export default class JobQueue {
  constructor (limit, waitingTime = 100) {
    this._jobs = []
    this._processingJobs = false
    this._limit = limit
    this._waitingTime = waitingTime
    this._runningJobs = 0
  }

  async _processJobs () {
    if (this._processingJobs) {
      return
    }
    this._processingJobs = true

    while (this._jobs.length > 0) {
      if (this._runningJobs < this._limit) {
        (async () => {
          let job = this._jobs.shift()
          try {
            job.resolve(await job.fn())
          } catch (error) {
            job.reject(error)
          }
        })().then(() => this._runningJobs--).catch(console.error)
        this._runningJobs++
      } else {
        await new Promise((resolve) => setTimeout(resolve, this._waitingTime))
      }
    }
    this._processingJobs = false
  }

  queueJob (fn) {
    let promise = new Promise((resolve, reject) => this._jobs.push({fn, resolve, reject}))
    this._processJobs()
    return promise
  }
}
