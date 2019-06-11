'use strict';

class LogMeGently {
  constructor({ level = null } = {}) {
    this.level = level;
  }

  log({ log } = {}, ...args) {
    if (!this.level
      || !log
      || !log[this.level]) {
      return;
    }

    log[this.level](...args);
  }
}

module.exports = (...args) => new LogMeGently(...args);
