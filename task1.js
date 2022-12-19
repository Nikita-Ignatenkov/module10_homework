let value = prompt('введите значение');
value = +value;
if(typeof value === 'number'){
    if(isNaN(value)){
        console.log('упс, непотребство! NaN')
    } else if(value % 2 == 0){
        console.log('even')
    } else {
        console.log('odd')
    }
} else {
    console.log('упс, это ты как так смог?')
}