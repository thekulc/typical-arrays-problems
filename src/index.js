
exports.min = function min(array) {
  if (!array || !array.length) return 0;
  return array.reduce((a, c) => c < a ? c = c : c = a)
}

exports.max = function max(array) {
  if (!array || !array.length) return 0;
  return array.reduce((a, c) => c < a ? c = a : c = c)
}

exports.avg = function avg(array) {
  if (!array || !array.length) return 0;
  return array.reduce((a, c) => a += c) / array.length;
}
