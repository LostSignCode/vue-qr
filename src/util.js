function toBoolean(val) {
  if (val === '') return val
  return val === 'true' || val == '1'
}

module.exports = {
  toBoolean
}