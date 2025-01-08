const { renderRecursively } = require('./template');
const { workerData, parentPort } = require('node:worker_threads');

parentPort.postMessage(renderRecursively(workerData.inputJson, workerData.template, workerData.execOptions));

