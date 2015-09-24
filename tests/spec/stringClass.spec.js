'use strict';

// English words that do not contain vowels
// http://wordslisted.com/words/no-vowels/

describe('String class implementation', function() {

  describe('Should returns true if the string contains vowels', function() {

    // should return a boolean
    expect(typeof 'Eugene Mutai'.hasVowels()).toBe('boolean');

    // should return true, which is a truthy value
    expect('Eugene'.hasVowels()).toBe(true);
    expect('Eugene Mutai'.hasVowels()).toBe(true);
    expect('1000 ryhmes'.hasVowels()).toBe(true);

    // should return false, which is a falsy value
    expect(typeof 'Rythmn'.hasVowels()).toBe('boolean');
    expect('flybys'.hasVowels()).toBeFalsy();
    expect('CRYPTS'.hasVowels()).toBe(false);
  });

  describe('Should returns the String in question but with all characters in upper cases as applicable', function() {

    // should return a string
    expect(typeof 'ron weasley '.toUpper()).toBe('string');

    // should return a string all the words are all uppercase
    expect('harry potter'.toUpper()).toBe('HARRY POTTER');
    expect('severus snape '.toUpper()).toBe('SEVERUS SNAPE');

    // spaces or symbolic characters should be preserved/kept
    expect(/\s{1,}/g.test('fluer delacour'.toUpper())).toBe(true);
  });

  describe('Should returns the String in question but changes the First Character to an Upper case', function() {

    // should return a string
    expect(typeof 'lamboghini'.ucFirst()).toBe('string');

    // should return string with the 1st character uppercased, lowercasing the rest
    expect('lamboghini'.ucFirst()).toBe('Lamboghini');
    expect('Lykan'.ucFirst()).toBe('Lykan');
    expect('look AT That car'.ucFirst()).toBe('Look at that car');
    expect('WORTH 100,000'.ucFirst()).toBe('Worth 100,000');
  });

  describe('Return true if the string is a question (ending with a question mark)', function() {

    // should return a string
    expect(typeof 'Are you a developer?'.isQuestion()).toBe('boolean');
    expect('yes I am.'.isQuestion()).toBe('boolean');

    expect('Are you a developer?'.isQuestion()).toBe(true);
    expect('yes I am.'.isQuestion()).toBe(false);
    expect('Software'.isQuestion()).toBe(false);
  });

  describe('Should returns a list of the words in the string, as an Array', function() {
    var wordsInSentence = 'The quick brown fox jumps over the lazy dog'.words();

    // should return an instance of array which is an object
    expect(Object.prototype.toString.call(wordsInSentence)).toBe('[object Array]');

    // should return an array of words from the sentense provided
    expect('Are you a developer?'.words()).toBe(['are', 'you', 'a', 'developer']);
    expect('He must have known I want to leave you.'.words()).toBe(['he', 'must', 'have', 'known', 'I', 'want', 'to', 'leave', 'you']);
    expect('You should test test test TESTS!!'.words()).toBe(['you', 'should', 'test', 'tests']);

    describe('Returns the number of words in the string', function() {
      // Should return a number
      expect(typeof wordsInSentence.wordCount()).toBe('number');

      expect(wordsInSentence.wordCount()).toBe(9);
      expect('You should test test test TESTS!!'.wordCount()).toBe(4);

      describe('It must make use of the words method above', function() {
        // Write a spy function testing here
        it('It calls the words method', function() {

          // We are creating a spy which will pretend to be the words method of the String class
          spyOn(String, 'words');
          // Now call the wordCount function which uses the String words() method
          // Thus has to be called at some point
          wordsInSentence.wordCount();
          expect(String.words).toHaveBeenCalled();
        });

      });

    });

  });

  describe('Should returns a currency representation of the String', function() {
    // should return a string
    expect(typeof '11111.11'.toCurrency()).toBe('string');

    // should return a string as is if it is not fully numeric
    expect('these three words'.toCurrency()).toBe('these three words');
    expect('100 million'.toCurrency()).toBe('100 million');

    expect('11111.11'.toCurrency()).toBe('11,111.11');
    expect('110'.toCurrency()).toBe('110');
    expect('9.08'.toCurrency()).toBe('9.08');
    expect('1989.08'.toCurrency()).toBe('1,989.08');
    expect('14500'.toCurrency()).toBe('14,500');
    expect('14500.055'.toCurrency()).toBe('14,500.055');
    expect('152000'.toCurrency()).toBe('152,000');
    expect('1000000'.toCurrency()).toBe('1,000,000');
    expect('1234567890'.toCurrency()).toBe('1,234,567,890');
    expect('1234567890.12345'.toCurrency()).toBe('1,234,567,890.12345');
  });

  describe('Should returns a number representation of the Currency String', function() {
    // should return a string
    expect(typeof '11111.11'.toCurrency()).toBe('string');

    // should return a string as is if it is not fully numeric
    expect('these three words'.toCurrency()).toBe('these three words');
    expect('100 million'.toCurrency()).toBe('100 million');

    expect('11,111.11'.fromCurrency()).toBe(11111.11);
    expect('1,989.08'.fromCurrency()).toBe(1989.08);
    expect('1,000,000'.fromCurrency()).toBe(1000000);
    expect('1,234,567,890'.fromCurrency()).toBe(1234567890);
    expect('1,234,567,890.12345'.fromCurrency()).toBe(1234567890.12345);
  });

});
