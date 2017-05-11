'use strict';


class stringSplosion {
  constructor (word) {
    this.word = word;
  }

  manipulate () {
    let length = this.word.length;
    
    for (let i = length - 1; i >= 0; i--) {
      this.word = this.word.substring(0, i) + this.word;
    }
    
    return this.word;
  }
}

module.exports = stringSplosion