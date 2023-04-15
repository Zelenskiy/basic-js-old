const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    const latinAlphabet = /[a-z]/i;
    const messageUpper = message.toUpperCase();
    const keyUpper = key.toUpperCase();
    let result = "";

    for (let i = 0, j = 0; i < message.length; i++) {
      const currentChar = messageUpper[i];
      if (latinAlphabet.test(currentChar)) {
        const currentCharIndex = currentChar.charCodeAt(0) - 65;
        const keyIndex = keyUpper[j % key.length].charCodeAt(0) - 65;
        const newIndex = (currentCharIndex + keyIndex) % 26;
        const newChar = String.fromCharCode(newIndex + 65);
        result += newChar;
        j++;
      } else {
        result += currentChar;
      }
    }

    if (!this.isDirect) {
      return result.split("").reverse().join("");
    }

    return result;
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    const latinAlphabet = /[a-z]/i;
    const messageUpper = message.toUpperCase();
    const keyUpper = key.toUpperCase();
    let result = "";

    for (let i = 0, j = 0; i < message.length; i++) {
      const currentChar = messageUpper[i];
      if (latinAlphabet.test(currentChar)) {
        const currentCharIndex = currentChar.charCodeAt(0) - 65;
        const keyIndex = keyUpper[j % key.length].charCodeAt(0) - 65;
        const newIndex = (currentCharIndex - keyIndex + 26) % 26;
        const newChar = String.fromCharCode(newIndex + 65);
        result += newChar;
        j++;
      } else {
        result += currentChar;
      }
    }

    if (!this.isDirect) {
      return result.split("").reverse().join("");
    }

    return result;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
