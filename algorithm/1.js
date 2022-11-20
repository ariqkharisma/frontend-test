function reverseOnlyAlphabet(str) {
    let alphabet = '';
    let number = [];
    for (let i = str.length - 1; i >= 0; i--) {
        isNaN(parseInt(str[i]))? alphabet += str[i] : number += str[i];
    };
    console.log(alphabet + number);
}

reverseOnlyAlphabet('NEGIE1');
reverseOnlyAlphabet('NEGIE12');
reverseOnlyAlphabet('N2EGIE1');
