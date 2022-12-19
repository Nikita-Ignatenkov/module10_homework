const arr = [1, 5, 6, 0, 2];

let zeroNumbers = 0;
let evenNumbers = 0;
let oddNumbers = 0;

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number'){
        if (arr[i] === 0){
            zeroNumbers += 1;
        }
        else if((arr[i] % 2) === 0){
            evenNumbers += 1;
        }
        else{
            oddNumbers += 1;
        }
    }
};
console.log('нулей=' + zeroNumbers,
            'четный=' + evenNumbers,
            'нечет=' + oddNumbers);