function сreateObjWord(text) {
    if (text && typeof text === "string" && text.trim()) {

        if (!text.includes(' ')) {
            const isCapitalLetter = /[A-ZА-Я]/.test(text[0]);

            return {
                word: text,
                length: text.length,
                isCapitalized: isCapitalLetter
            }
        } else {
            return 'Введите одно слово';
        }

    } else {
        return 'Данные не корректны';
    }
}

// tests

console.log(сreateObjWord('дом'));
console.log(сreateObjWord('Дом'));
console.log(сreateObjWord(''));
console.log(сreateObjWord(5555));
console.log(сreateObjWord({}));
console.log(сreateObjWord('fff ggggg'))