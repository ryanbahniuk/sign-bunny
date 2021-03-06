'use strict';

const assert = require('chai').assert;
const buildSign = require('../src/build-sign');

describe('#buildSign', () => {
  let inputArr;

  context('when all the words are shorter than the max width', () => {
    beforeEach(() => {
      inputArr = [
        'NO!!',
        'MOOAR!',
        'TESTS!'
      ];
    });

    it('should return the complete sign string', () => {
      assert.strictEqual(
        buildSign(inputArr),
        '|-----------|\n' +
        '| NO!!      |\n' +
        '| MOOAR!    |\n' +
        '| TESTS!    |\n' +
        '|-----------|\n' +
        '(\\__/) ||\n' +
        '(•ㅅ•) ||\n' +
        '/ 　 づ'
      );
    });
  });

  context('when there are short words that can fit on the same line', () => {
    beforeEach(() => {
      inputArr = [
        'I',
        'AM',
        'A',
        'CUTE',
        'BUNNY',
        '!'
      ];
    });

    it('should return the complete sign string', () => {
      assert.strictEqual(
        buildSign(inputArr),
        '|-----------|\n' +
        '| I AM A    |\n' +
        '| CUTE BUNNY|\n' +
        '| !         |\n' +
        '|-----------|\n' +
        '(\\__/) ||\n' +
        '(•ㅅ•) ||\n' +
        '/ 　 づ'
      );
    });
  });

  context('when one of the words is longer than the max width', () => {
    beforeEach(() => {
      inputArr = [
        'TESTS',
        'ARE',
        'TRANSCENDENT'
      ];
    });

    it('should throw an error', () => {
      assert.throws(() => {
        buildSign(inputArr)
      });
    });
  });
});
