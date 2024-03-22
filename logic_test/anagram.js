const sortingJoin = (word) => {
  const splitWord = word.split("");

  for (let i = 0; i < splitWord.length - 1; i++) {
    for (let j = 0; j < splitWord.length - i - 1; j++) {
      if (splitWord[j] > splitWord[j + 1]) {
        const temp = splitWord[j];
        splitWord[j] = splitWord[j + 1];
        splitWord[j + 1] = temp;
      }
    }
  }

  return splitWord.join("");
};

const anagramList = () => {
  result = [];

  for (let i = 0; i <= words.length - 1; i++) {
    const sortedWords = sortingJoin(words[i]);

    if (!result[sortedWords]) {
      result[sortedWords] = [words[i]];
    } else {
      result[sortedWords].push(words[i]);
    }
  }

  return Object.values(result);
};

const words = ["cook", "save", "taste", "aves", "vase", "state", "map"];
console.log(anagramList(words));
