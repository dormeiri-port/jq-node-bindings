const { renderRecursively } = require('./template');

module.exports = async ({inputJson, template, execOptions}) => await renderRecursively(inputJson, template, execOptions);

