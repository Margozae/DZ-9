function fibonacci (n) {
    const str = [];
    for(let i = 0; i < n; i++) {
        str.push(i);
    }
    for(let k = 2; k < str.length; k++) {
        str[k] = str[k - 1] + str[k - 2]; // eslint-disable-line 
    }
    return str.join(',');
}
fibonacci(21);   // eslint-disable-line 