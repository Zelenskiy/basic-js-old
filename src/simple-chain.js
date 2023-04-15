const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  links: [],

  getLength() {
    return this.links.length;
  },

  addLink(value) {
    if (value === undefined) {
      this.links.push("( )");
    } else {
      this.links.push(`( ${value} )`);
    }
    return this;
  },

  removeLink(position) {
    if (
      position < 1 ||
      position > this.links.length ||
      typeof position !== "number" ||
      !Number.isInteger(position)
    ) {
      this.links = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.links.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.links.reverse();
    return this;
  },

  finishChain() {
    const result = this.links.join("~~");
    this.links = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};

// console.log(
//   chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain()
// );
// console.log('( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )');
// console.log('======================================================================');
