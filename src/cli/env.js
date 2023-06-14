const parseEnv = () => {
    // Write your code here
    const result = Object.entries(process.env).filter(([key]) => key.startsWith('RSS')).reduce((acc, [key, value]) => {
        acc += `${key}=${value}; `

        return acc;
    }, '')

    console.log(result);
};

parseEnv();