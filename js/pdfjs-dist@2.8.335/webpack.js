"use strict";var pdfjs=require("./build/pdf.js"),PdfjsWorker=require("worker-loader?esModule=false&filename=[name].js!./build/pdf.worker.js");"undefined"!=typeof window&&"Worker"in window&&(pdfjs.GlobalWorkerOptions.workerPort=new PdfjsWorker),module.exports=pdfjs;