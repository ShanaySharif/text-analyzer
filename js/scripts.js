// Business Logic

function wordCounter(text) {
    let wordCount = 0;
    const textArray = text.split (" ");
    textArray.forEach(function(word) {
        wordCount++;
} )
return wordCount;
}

function wordCount(text){
    if (text.length ===0) {
        return 0;
    }

    let wordCount = 0;
    const textArray = text.split(" ");
    text.Array.forEach(function(word){
        wordCount++;

    });

}

// Business Logic

function wordCounter(text) {
    if (text.trim().length === 0) {
      return 0;
    }
    let wordCount = 0;
    const textArray = text.split(" ");
    textArray.forEach(function(word) {
      wordCount++;
    });
    return wordCount;
  }

  Test: "It should not count numbers as words."
Code: wordCounter("hi there 77 19");
Expected Output: 2


// Business Logic

function wordCounter(text) {
    if (text.trim().length === 0) {
      return 0;
    }
    let wordCount = 0;
    const textArray = text.split(" ");
    textArray.forEach(function(element) {
      if (!Number(element)) {
        wordCount++;
      }
    });
    return wordCount;
  }


  // Business Logic

  function removeOffensiveWords (text) {
    const offensiveWordsArray = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
    const textArray = text.split(" ");

    let cleanTextArray = [];

    textArray.forEach(function (word) {
      const lowerCaseWord = word.toLowerCase();
      if (!offensiveWordsArray.includes(lowerCaseWord)) {
        cleanTextArray.push(word);
      }
    });

    return cleanTextArray.join(" ");
  }

