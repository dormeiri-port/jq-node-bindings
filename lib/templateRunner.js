const { Worker } = require('node:worker_threads');

function runRenderRecursively(inputJson, template, execOptions = {}) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(__dirname + '/templateRunnerWorker.js', {
      workerData: {
        inputJson,
        template,
        execOptions
      }
    });

    setTimeout(() => {
      worker.terminate();
      worker.removeAllListeners();
      reject(new Error('Worker timed out'));
    }, execOptions.timeout || 2000);

    worker.once('message', resolve);
    worker.once('error', reject);
    worker.once('exit', (code) => {
      if (code !== 0) {
        reject(new Error(`Worker stopped with exit code ${code}`));
      }
    });
  });
}

module.exports = {
  runRenderRecursively,
}
