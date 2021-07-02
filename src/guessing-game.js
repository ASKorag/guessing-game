class GuessingGame {
  #begin
  #end
  #guess

  constructor() {}

  setRange(min, max) {
    this.#begin = min
    this.#end = max
  }

  guess() {
    this.#guess = this.#begin + Math.round((this.#end - this.#begin) / 2)
    return this.#guess
  }

  lower() {
    this.#end = this.#guess
  }

  greater() {
    this.#begin = this.#guess
  }
}

module.exports = GuessingGame
