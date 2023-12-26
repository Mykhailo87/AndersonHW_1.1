const value1 = prompt();
const value2 = prompt();

function newValue(firstCheckingValue,secondCheckingValue) {
    const isInvalid = isNaN(firstCheckingValue) || isNaN(secondCheckingValue) || 
                      firstCheckingValue.trim() === '' || secondCheckingValue.trim() === '';

    if (isInvalid) {
        return console.log('Некорректный ввод!')
    }                  

    console.log((+firstCheckingValue).toString(+secondCheckingValue))
}

newValue(value1,value2);
