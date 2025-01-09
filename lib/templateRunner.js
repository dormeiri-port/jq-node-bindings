const path = require('path');
const Piscina = require('piscina');

const piscina = new Piscina({
  filename: path.resolve(__dirname, 'templateRunnerWorker.js'),
  maxThreads: 1,
});

function runRenderRecursively(inputJson, template, execOptions) {
  return piscina.run({ inputJson, template, execOptions }, { signal: execOptions.signal });
};

module.exports = { runRenderRecursively };
