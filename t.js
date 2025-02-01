const nativeJq = require('bindings')('jq-node-bindings')
const abortController = new AbortController()
const signal = abortController.signal
//setTimeout(() => abortController.abort(), 1000)
const json = JSON.stringify({a:1})
const query = `[ .a, range(${process.argv[2]}) ][0]`
//const success = (res) => console.log(res, signal.aborted)
//const fail = (e) => console.error(e, signal.aborted, 1)
const n = +process.argv[3]
  for(let i = 0;i < n;i++) {
    nativeJq.execAsync(json,query);
  }
//setTimeout(() => {
//  for(let i = 0;i < 10;i++) {
//    nativeJq.execAsync(json,query, signal).then(success).catch(fail)
//  }
//}, 1000)
