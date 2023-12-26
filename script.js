const value1 = prompt();
const value2 = prompt();

function isValidInput(input) {
    return isNaN(input) || input.trim () === '';
}

function newValue(firstCheckingValue,secondCheckingValue) {
    const isInvalid = isValidInput(firstCheckingValue) || isValidInput(secondCheckingValue);                  

    if (isInvalid) {
        return console.log('Некорректный ввод!');
    }                  

    console.log((+firstCheckingValue).toString(+secondCheckingValue));
}

newValue(value1,value2);

