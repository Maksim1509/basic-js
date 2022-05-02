const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if(!Number(position) || position < 0 || position > this.chain.length) {
      this.chain = []
      throw new Error('You can\'t remove incorrect link!');
    } 
    this.chain = this.chain.filter((v, i) =>  i + 1 !== position);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    const res = this.chain.join('~~');
    this.chain = [];
    return res;
  }
};

module.exports = {
  chainMaker
};
