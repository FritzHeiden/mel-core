module.exports = class Logger {
  constructor (className) {
    this._className = className
  }

  info (message) {
    let timestamp = new Date(Date.now()).toISOString()
    console.log(timestamp + ' ' + this._className + ' INFO: ' + message)
  }
}
