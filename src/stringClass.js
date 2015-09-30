'use strict';

// hasVowels returns true if the string contains vowels.
String.prototype.hasVowels = function() {
  var vowelsRegex = /[aeiou]/g;
  return vowelsRegex.test(this);
};

// toUpper returns the String in question but with all characters in upper cases as applicable
String.prototype.toUpper = function() {
  var word = this,
    uppercasedCasedWord = '';

  // loop through each character of the word, converting them to their uppercase variants
  for (var x = 0, length = word.length; x < length; x++) {
    // get the character's ASCII code
    var character = word[x],
      // check to see if the character is in lowercase using REGEX
      isUpperCase = /[a-z]/g.test(character),
      asciiCode = character.charCodeAt(0);

    // We want to 1st make sure these are non symbolic characters (a-z, A-Z)
    // If we are going to check for their cases(upper and lower)
    if ((asciiCode >= 65 && asciiCode <= (65 + 25)) || (asciiCode >= 97 && asciiCode <= (97 + 25))) {
      // check to see if any letter is lower cased
      if (isUpperCase) {
        // capitalize the letter, then convert it back to decimal value
        character = String.fromCharCode(asciiCode - 32);
      }
    }

    uppercasedCasedWord += character;
  }
  return uppercasedCasedWord;
};

// toLower returns the String in question but with all characters in their lower cases as applicable.
String.prototype.toLower = function() {
  var word = this,
    lowerCasedWord = '';

  for (var x = 0, length = word.length; x < length; x++) {
    // get the character's ASCII code
    var character = word[x],
      // check to see if the character is capitalised/in uppercase using REGEX
      isUpperCase = /[A-Z]/g.test(character),
      asciiCode = character.charCodeAt(0);

    if ((asciiCode >= 65 && asciiCode <= (65 + 25)) || (asciiCode >= 97 && asciiCode <= (97 + 25))) {
      // check to see if any letter is upper cased
      if (isUpperCase) {
        // decapitalize the letter, then convert it back to decimal value
        character = String.fromCharCode(asciiCode + 32);
      }
    }

    lowerCasedWord += character;
  }
  return lowerCasedWord;
};

// ucFirst (typeof String): returns the String in question but changes the First Character to an Upper case
String.prototype.ucFirst = function() {
  var word = this,
    ucFirstWord = '';

  for (var x = 0, length = word.length; x < length; x++) {
    // get the character's ASCII code
    var character = word[x],
      // check to see if the character is capitalised/in uppercase using REGEX
      isUpperCase = /[A-Z]/g.test(character),
      asciiCode = character.charCodeAt(0);

    if ((asciiCode >= 65 && asciiCode <= (65 + 25)) || (asciiCode >= 97 && asciiCode <= (97 + 25))) {
      // If the 1st letter is not in uppercase
      if (!isUpperCase && x === 0) {
        // capitalize the letter, then convert it back to decimal value
        character = String.fromCharCode(asciiCode - 32);
      }
      // lowercase any of the letters that are not in the 1st postion that are in uppercase
      else if (isUpperCase && x > 0) {
        // lower case the letter, converting it back to decimal value
        character = String.fromCharCode(asciiCode + 32);
      }
    }

    ucFirstWord += character;
  }
  return ucFirstWord;
};

// isQuestion return true if the string is a question (ending with a question mark).
String.prototype.isQuestion = function() {
  var word = this,
    // we want to match any kind of sentense created that ends with a Question mark
    // the sentence may have non-alphanumeric characters
    isWordOrSentenseAndIsQuestionRegex = /[\w\s^\w]+\?$/g;
  return isWordOrSentenseAndIsQuestionRegex.test(word);
};

// words returns a list of the words in the string, as an Array.
String.prototype.words = function() {
  // get all the words in the sentense
  // remove all symbolic characters from the sentense before splitting into words
  var words = this.replace(/[^\w\s]+/gi, '').split(/\s/),
    theCollectionOfWords = [];

  function isNotInArray(value, array) {
    var exists = false;
    for (var x = 0, length = array.length; x < length; x++) {
      if (array[x] === value) {
        exists = true;
      }
    }
    return exists;
  }

  // Loop through the words in the array, being careful not to add words already added
  for (var x = 0, length = words.length; x < length; x++) {
    // check if the word was already added
    if (!isNotInArray(words[x], theCollectionOfWords)) {
      // if not the add it
      theCollectionOfWords.push(words[x]);
    }
  }

  return theCollectionOfWords;
};

// wordCount returns the number of words in the string.
String.prototype.wordCount = function() {
  // get all the words in the array then get the length of the array
  return this.words().length;
};

// toCurrency returns a currency representation of the String
// e.g 11111.11 should be represented as 11,111.11.
String.prototype.toCurrency = function() {
  var integerString = this,
    // Confirm this is string representation of an integer
    isNumeric = /^[+-]?\d+(\.\d+)?$/.test(integerString),
    currencyRepresentation = '';

  // If yes
  if (isNumeric) {
    var theFloatingPoint = '',
      // make the integer string is the default value
      integer = integerString;

    // if the interger string contains a floating point
    // split up the integer, saving the theFloatingPoint for later reattachment
    var splitInteger = integerString.split(/\./);
    if (splitInteger.length === 2) {
      integer = splitInteger[0];
      theFloatingPoint = splitInteger[1];
    }

    // now loop through the integer string backwards,
    // placing a comma after every 3 successful loops
    for (var x = integer.length - 1, loopCount = 0; x >= 0; x--) {
      // do not add a comma to the 1st loop which happens to be
      // the where the floating point is joined
      if (loopCount % 3 === 0 && loopCount !== 0) {
        currencyRepresentation += ',';
      }
      currencyRepresentation += integer[x];
      loopCount++;
    }

    // It is ordered in a reversed manner,
    // so unreverse it using the array reverse method
    currencyRepresentation = currencyRepresentation.split('').reverse().join('');

    // if a floating point existed, attach it back
    if (theFloatingPoint !== '') {
      return [currencyRepresentation, '.', theFloatingPoint].join('');
    }
    return currencyRepresentation;
  }

  // if not just return it as it is
  return integerString;
};

// fromCurrency returns a number representation of the Currency String
// e.g 11,111.11 should return 11111.11
String.prototype.fromCurrency = function() {
  var integerString = this,
    // confirm this is string representation of currency
    isNumeric = /[\d{1,3}(\,)?]+(\.\d+)?$/.test(integerString);

  if (isNumeric) {
    // if it is just remove the commas
    return parseFloat(integerString.replace(/\,/g, ''));
  }
  // if not just return it as it is
  return integerString;
};
