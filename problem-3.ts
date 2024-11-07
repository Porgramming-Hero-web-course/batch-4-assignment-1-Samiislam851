function countWordOccurrences(sentence: string, word: string): number {
    const lwrCaseSentence = sentence.toLowerCase();
    const lwrCaseWord = word.toLowerCase();
    const words = lwrCaseSentence.split(/\W+/);
    return words.filter(w => w === lwrCaseWord).length;
}

console.log(countWordOccurrences("I love typescript, typescript is my favorite language. I use typescript so much", "typescript"))