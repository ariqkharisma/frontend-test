function findQuery(input, query) {
    let output = [];
    for (q of query) {
        let counter = 0;
        for (i of input) {
            q === i? counter++ : null;
        }
        output.push(counter);
    }
    console.log(output);
}

const input = ['xc', 'dz', 'bbb', 'dz'];
const query = ['bbb', 'ac', 'dz'];

findQuery(input, query);