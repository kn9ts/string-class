describe('String class additional methods implementation', function() {
  'use strict';

  // English words that do not contain vowels
  // http://wordslisted.com/words/no-vowels/

  // --- hasVowels method test ---
  describe('hasVowels method tests', function() {

    it('should return a boolean value', function() {
      expect(typeof 'Eugene Mutai'.hasVowels()).toBe('boolean');
    });

    it('Should returns true if the string contains vowels', function() {
      // should return true, which is a truthy value
      expect('Eugene'.hasVowels()).toBe(true);
      expect('Eugene Mutai'.hasVowels()).toBe(true);
      expect('1000 ryhmes'.hasVowels()).toBe(true);
    });

    it('Should returns false if the string does not contains vowels', function() {
      // should return false, which is a falsy value
      expect(typeof 'Rythmn'.hasVowels()).toBe('boolean');
      expect('flybys'.hasVowels()).toBeFalsy();
      expect('CRYPTS'.hasVowels()).toBe(false);
    });

  });

  // --- toUpper method test ---
  describe('toUpper method tests', function() {

    it('should return a string value', function() {
      expect(typeof 'Ron weasley'.toUpper()).toBe('string');
    });

    it('should returns the String in question but with all characters in uppercases where applicable', function() {
      // should return a string all the words are all uppercase
      expect('Harry Potter'.toUpper()).toBe('HARRY POTTER');
      expect('severus Snape'.toUpper()).toBe('SEVERUS SNAPE');
    });

    it('spaces/symbolic characters should be preserved/kept', function() {
      // matches any non-character or non-digit character.
      expect(/[^\w\s]{1,}/g.test('Fluer Dela\'Cour (Co-operation)'.toUpper())).toBe(true);
    });

  });

  // --- toLower method test ---
  describe('toLower method tests', function() {

    it('should return a string value', function() {
      expect(typeof 'ron WEASley'.toLower()).toBe('string');
    });

    it('should returns the String in question but with all characters in lowercases where applicable', function() {
      // should return a string all the words are all uppercase
      expect('HARRY POTTER'.toLower()).toBe('harry potter');
      expect('Severus Snape'.toLower()).toBe('severus snape');
    });

    it('spaces/symbolic characters should be preserved/kept', function() {
      // matches any non-character or non-digit character.
      expect(/[^\w\s]{1,}/g.test('Fluer Dela\'Cour (Co-operation)'.toUpper())).toBe(true);
    });

  });

  // --- ucFirst method test ---
  describe('ucFirst method tests', function() {

    it('should return a string value', function() {
      expect(typeof 'lamboghini'.ucFirst()).toBe('string');
    });

    it('should returns the String in question but changes the first character in uppercase', function() {
      // should return string with the 1st character uppercased, lowercasing the rest
      expect('lamboghini'.ucFirst()).toBe('Lamboghini');
      expect('Lykan'.ucFirst()).toBe('Lykan');
      expect('look AT That Car'.ucFirst()).toBe('Look at that car');
      expect('WORTH 100,000'.ucFirst()).toBe('Worth 100,000');
    });

  });

  // --- isQuestion method test ---
  describe('isQuestion method tests', function() {

    it('should return a boolean value', function() {
      expect(typeof 'Are you a developer?'.isQuestion()).toBe('boolean');
      expect(typeof 'yes I am!!'.isQuestion()).toBe('boolean');
    });

    it('should return true if the string is a question (ending with a question mark)', function() {
      expect('Are you a developer?'.isQuestion()).toBe(true);
      expect('yes I am, checkout my git-repo.'.isQuestion()).toBe(false);
      expect('Huh? I did not know it\'s true!'.isQuestion()).toBe(false);
    });

  });

  // --- words method method test ---
  describe('words method tests', function() {

    it('should return instance of an array which is a type of object', function() {
      // demo sentense
      var wordsInSentence = 'The quick brown fox jumps over the lazy dog';
      expect(Object.prototype.toString.call(wordsInSentence.words())).toBe('[object Array]');
    });

    it('Should returns a list of the words in the string, as an Array from string provided', function() {
      expect('Are you a developer?'.words()).toEqual(['Are', 'you', 'a', 'developer']);
      expect('He must have known!?! I want to leave you.'.words()).toEqual(['He', 'must', 'have', 'known', 'I', 'want', 'to', 'leave', 'you']);
      expect('You should test test test TESTS!!'.words()).toEqual(['You', 'should', 'test', 'TESTS']);
    });

  });

  // --- wordCount method test ---
  describe('wordCount method test', function() {
    // demo sentense
    var wordsInSentence = 'The quick brown fox jumps over the lazy dog';

    it('should return a number value', function() {
      expect(typeof wordsInSentence.wordCount()).toBe('number');
    });

    it('should returns the number of words a string', function() {
      expect(wordsInSentence.wordCount()).toBe(9);
      expect('You should test test test TESTS!!'.wordCount()).toBe(4);
    });

    // Will use a jasmine spy to carry out this test
    it('it must make use of the words method declared/and extended the string class', function() {
      // We are creating a spy which will pretend to be the words method of the String class
      spyOn(String.prototype, 'words').and.returnValue(['You', 'should', 'test', 'TESTS']);
      // Now call the wordCount function which uses the String.prototype.words() method
      // Which has to be called, before acquiring the number of words in a sentense
      wordsInSentence.wordCount();
      expect(String.prototype.words).toHaveBeenCalled();
    });

  });

  // --- toCurrency method test ---
  describe('toCurrency method tests', function() {

    it('should return a string value', function() {
      expect(typeof '11111.11'.toCurrency()).toBe('string');
    });

    it('should return the string unmorphed if has alphanumeric values', function() {
      expect('these three words'.toCurrency()).toBe('these three words');
      expect('100 million'.toCurrency()).toBe('100 million');
    });

    it('Should returns a currency representation of the String', function() {
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

  });

  // --- fromCurrency method test ---
  describe('fromCurrency method tests', function() {

    it('should return a number value', function() {
      expect(typeof '11111.11'.fromCurrency()).toBe('number');
    });

    it('should return the string unmorphed if has alphanumeric values', function() {
      expect('these three words'.fromCurrency()).toBe('these three words');
      expect('100 million'.fromCurrency()).toBe('100 million');
    });

    it('Should returns a number representation of the Currency String', function() {
      expect('11,111.11'.fromCurrency()).toBe(11111.11);
      expect('1,989.08'.fromCurrency()).toBe(1989.08);
      expect('1,000,000'.fromCurrency()).toBe(1000000);
      expect('1,234,567,890'.fromCurrency()).toBe(1234567890);
      expect('1,234,567,890.12345'.fromCurrency()).toBe(1234567890.12345);
    });

  });

});
