const value1 = prompt();
const value2 = prompt();

function newValue (a,b){
    if(isNaN(a) || isNaN(b) || a.includes(' ') || b.includes(' ')){
        console.log('Некорректный ввод!')
        return
    }else(
        console.log((+a).toString(+b))
    )
}

newValue(value1,value2);
