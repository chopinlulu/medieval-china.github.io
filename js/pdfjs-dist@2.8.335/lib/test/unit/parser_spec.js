"use strict";var _parser=require("../../core/parser.js"),_util=require("../../shared/util.js"),_primitives=require("../../core/primitives.js"),_stream=require("../../core/stream.js");describe("parser",function(){describe("Parser",function(){describe("inlineStreamSkipEI",function(){it("should skip over the EI marker if it is found",function(){var e="q 1 0 0 1 0 0 cm BI /W 10 /H 10 /BPC 1 /F /A85 ID abc123~> EI Q",r=new _stream.StringStream(e);new _parser.Parser({lexer:new _parser.Lexer(r),xref:null,allowStreams:!0}).inlineStreamSkipEI(r),expect(r.pos).toEqual(e.indexOf("Q")),expect(r.peekByte()).toEqual(81)}),it("should skip to the end of stream if the EI marker is not found",function(){var e="q 1 0 0 1 0 0 cm BI /W 10 /H 10 /BPC 1 /F /A85 ID abc123~> Q",r=new _stream.StringStream(e);new _parser.Parser({lexer:new _parser.Lexer(r),xref:null,allowStreams:!0}).inlineStreamSkipEI(r),expect(r.pos).toEqual(e.length),expect(r.peekByte()).toEqual(-1)})})}),describe("Lexer",function(){describe("nextChar",function(){it("should return and set -1 when the end of the stream is reached",function(){var e=new _stream.StringStream(""),r=new _parser.Lexer(e);expect(r.nextChar()).toEqual(-1),expect(r.currentChar).toEqual(-1)}),it("should return and set the character after the current position",function(){var e=new _stream.StringStream("123"),r=new _parser.Lexer(e);expect(r.nextChar()).toEqual(50),expect(r.currentChar).toEqual(50)})}),describe("peekChar",function(){it("should only return -1 when the end of the stream is reached",function(){var e=new _stream.StringStream(""),r=new _parser.Lexer(e);expect(r.peekChar()).toEqual(-1),expect(r.currentChar).toEqual(-1)}),it("should only return the character after the current position",function(){var e=new _stream.StringStream("123"),r=new _parser.Lexer(e);expect(r.peekChar()).toEqual(50),expect(r.currentChar).toEqual(49)})}),describe("getNumber",function(){it("should stop parsing numbers at the end of stream",function(){var e=new _stream.StringStream("11.234"),r=new _parser.Lexer(e);expect(r.getNumber()).toEqual(11.234)}),it("should parse PostScript numbers",function(){for(var e=0,r=["-.002","34.5","-3.62","123.6e10","1E-5","-1.","0.0","123","-98","43445","0","+17"];e<r.length;e++){var n=r[e],t=new _stream.StringStream(n),a=new _parser.Lexer(t).getNumber(),i=parseFloat(n);a!==i&&Math.abs(a-i)<1e-15?(console.error('Fuzzy matching "'.concat(a,'" with "').concat(i,'" to ')+"work-around rounding bugs in Chromium browsers."),expect(!0).toEqual(!0)):expect(a).toEqual(i)}}),it("should ignore double negative before number",function(){var e=new _stream.StringStream("--205.88"),r=new _parser.Lexer(e);expect(r.getNumber()).toEqual(-205.88)}),it("should ignore minus signs in the middle of number",function(){var e=new _stream.StringStream("205--.88"),r=new _parser.Lexer(e);expect(r.getNumber()).toEqual(205.88)}),it("should ignore line-breaks between operator and digit in number",function(){var e=new _stream.StringStream("-\r\n205.88"),r=new _parser.Lexer(e);expect(r.getNumber()).toEqual(-205.88);var n=new _stream.StringStream("+\r\n205.88"),t=new _parser.Lexer(n);expect(t.getNumber()).toEqual(205.88)}),it("should treat a single decimal point as zero",function(){var e=new _stream.StringStream("."),r=new _parser.Lexer(e);expect(r.getNumber()).toEqual(0);for(var n=function(){var e=a[t],r=new _stream.StringStream(e),n=new _parser.Lexer(r);expect(function(){return n.getNumber()}).toThrowError(_util.FormatError,/^Invalid number:\s/)},t=0,a=["..","-.","+.","-\r\n.","+\r\n."];t<a.length;t++)n()}),it("should handle glued numbers and operators",function(){var e=new _stream.StringStream("123ET"),r=new _parser.Lexer(e);expect(r.getNumber()).toEqual(123),expect(r.currentChar).toEqual(69)})}),describe("getString",function(){it("should stop parsing strings at the end of stream",function(){var n=new _stream.StringStream("(1$4)");n.getByte=function(e){var r=e.call(n);return 36===r?-1:r}.bind(n,n.getByte);var e=new _parser.Lexer(n);expect(e.getString()).toEqual("1")}),it("should ignore escaped CR and LF",function(){var e=new _stream.StringStream("(\\101\\\r\n\\102\\\r\\103\\\n\\104)"),r=new _parser.Lexer(e);expect(r.getString()).toEqual("ABCD")})}),describe("getHexString",function(){it("should not throw exception on bad input",function(){var e=new _stream.StringStream("<7 0 2 15 5 2 2 2 4 3 2 4>"),r=new _parser.Lexer(e);expect(r.getHexString()).toEqual('p!U"$2')})}),describe("getName",function(){it("should handle Names with invalid usage of NUMBER SIGN (#)",function(){for(var e=["/# 680 0 R","/#AQwerty","/#A<</B"],r=["#","#AQwerty","#A"],n=0,t=e.length;n<t;n++){var a=new _stream.StringStream(e[n]),i=new _parser.Lexer(a);expect(i.getName()).toEqual(_primitives.Name.get(r[n]))}})})}),describe("Linearization",function(){it("should not find a linearization dictionary",function(){var e=new _stream.StringStream("3 0 obj\n<<\n/Length 4622\n/Filter /FlateDecode\n>>\nendobj");expect(_parser.Linearization.create(e)).toEqual(null);var r=new _stream.StringStream("1 0 obj\n<<\n/Linearized 0\n>>\nendobj");expect(_parser.Linearization.create(r)).toEqual(null)}),it("should accept a valid linearization dictionary",function(){var e=new _stream.StringStream("131 0 obj\n<<\n/Linearized 1\n/O 133\n/H [ 1388 863 ]\n/L 90\n/E 43573\n/N 18\n/T 193883\n>>\nendobj");expect(_parser.Linearization.create(e)).toEqual({length:90,hints:[1388,863],objectNumberFirst:133,endFirst:43573,numPages:18,mainXRefEntriesOffset:193883,pageFirst:0})}),it("should reject a linearization dictionary with invalid integer parameters",function(){var e=new _stream.StringStream("1 0 obj\n<<\n/Linearized 1\n/O 133\n/H [ 1388 863 ]\n/L 196622\n/E 43573\n/N 18\n/T 193883\n>>\nendobj");expect(function(){return _parser.Linearization.create(e)}).toThrow(new Error('The "L" parameter in the linearization dictionary does not equal the stream length.'));var r=new _stream.StringStream("1 0 obj\n<<\n/Linearized 1\n/O 133\n/H [ 1388 863 ]\n/L 84\n/E 0\n/N 18\n/T 193883\n>>\nendobj");expect(function(){return _parser.Linearization.create(r)}).toThrow(new Error('The "E" parameter in the linearization dictionary is invalid.'));var n=new _stream.StringStream("1 0 obj\n<<\n/Linearized 1\n/O /abc\n/H [ 1388 863 ]\n/L 89\n/E 43573\n/N 18\n/T 193883\n>>\nendobj");expect(function(){return _parser.Linearization.create(n)}).toThrow(new Error('The "O" parameter in the linearization dictionary is invalid.'))}),it("should reject a linearization dictionary with invalid hint parameters",function(){var e=new _stream.StringStream("1 0 obj\n<<\n/Linearized 1\n/O 133\n/H 1388\n/L 80\n/E 43573\n/N 18\n/T 193883\n>>\nendobj");expect(function(){return _parser.Linearization.create(e)}).toThrow(new Error("Hint array in the linearization dictionary is invalid."));var r=new _stream.StringStream("1 0 obj\n<<\n/Linearized 1\n/O 133\n/H [ 1388 ]\n/L 84\n/E 43573\n/N 18\n/T 193883\n>>\nendobj");expect(function(){return _parser.Linearization.create(r)}).toThrow(new Error("Hint array in the linearization dictionary is invalid."));var n=new _stream.StringStream("1 0 obj\n<<\n/Linearized 1\n/O 133\n/H [ 1388 863 0 234]\n/L 93\n/E 43573\n/N 18\n/T 193883\n>>\nendobj");expect(function(){return _parser.Linearization.create(n)}).toThrow(new Error("Hint (2) in the linearization dictionary is invalid."))})})});