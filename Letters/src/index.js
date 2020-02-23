function vowelsNumber (str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelsStr = '';
    if (typeof(str) === 'string') {
        for(let i = 0; i < str.length; i++) {
            for(let j = 0; j < vowels.length; j++) {
                if (str[i] === vowels[j]) {
                    vowelsStr += str[i];
                }
            }
        }
        return vowelsStr.length;
    } else {
        return 'Введите строку!';
    }
}
vowelsNumber('wyrertaeu');
