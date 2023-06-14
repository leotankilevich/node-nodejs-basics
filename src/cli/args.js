const parseArgs = () => {
    // Write your code here
    const result = process.argv.slice(2).reduce((rows, key, index) => (index % 2 == 0 ? rows.push([key])
        : rows[rows.length - 1].push(key)) && rows, []).reduce((acc, [key, value], i, arr) => {
        acc += `${key.replace(/-/g, '')} is ${value}${arr.length - 1 === i ? '' : ', '}`

        return acc
    }, '');

    console.log(result)
};

parseArgs();