function findLongestWord(sentence) {
    let longestWord = '';
    let counter = 0;
    const sentenceArr = sentence.split(' ');
    for (word of sentenceArr) {
        if (word.length > counter) {
            counter = word.length;
            longestWord = word;
        }
    }
    console.log(`${longestWord}: ${counter}`);
}

findLongestWord("Saya sangat senang mengerjakan soal algoritma");
findLongestWord("Balonku ada lima, rupa rupa warnanya");