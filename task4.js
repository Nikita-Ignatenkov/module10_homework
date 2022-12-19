function randomInteger(min, max) {
    return Math.round(Math.random() * (max - min) ) + min; 
}  
alert( randomInteger(0, 100) );