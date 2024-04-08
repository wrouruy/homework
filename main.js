setTimeout(function(){
    document.getElementById('button').style.backgroundColor = 'black';
}, 20000);
function button() {
    document.getElementById('h2').style.color = 'black';

    setTimeout(function() {
        location.href = 'https://github.com/wrouruy/homework';
    }, 500);
}




console.error('task one:')
for(let taskOne = 0; taskOne < 11; taskOne++){
    console.log(taskOne);
}


console.error('task two:')
let taskTwo = 10;
while(taskTwo > -1){
    console.log(taskTwo);
    taskTwo--;
}


console.error('task three:')
let taskThree = 20;
while(taskThree < 51){
    console.log(taskThree);
    taskThree++;
}


console.error('task four:')
for(let taskFour = 0; taskFour < 102; taskFour += 2){
    console.log(taskFour)
}


console.error('task five:')
let arr = [];
while(arr.length < 10){
    let a = Math.floor(Math.random() * 100);
    arr.push(a);
    console.log(arr);
}


console.error('task six:')
let taskSix = 0;
for (let i = 0; i < arr.length; i++) {
    taskSix += arr[i];
    console.log(taskSix);
}
    

console.error('task seven:')
while(arr.length < 10){
    let a = Math.floor(Math.random() * 100);
    arr.push(a);
    console.log(arr);
}
let taskSeven = 0;
for (let i = 0; i < arr.length; i++) {
    arr[i] = '$' + arr[i]; 
    console.log(arr[i]);
    taskSeven += parseInt(arr[i].slice(1));
}
console.log(taskSeven);


console.error('task eight')
let secondArr = [];
while(secondArr.length < 10){
    let a = Math.floor(Math.random() * 100);
    secondArr.push(a);
}
let numOfEven = 0;
for (let i = 0; i < secondArr.length; i++) {
    if (secondArr[i] % 2 === 0) {
        numOfEven += secondArr[i];
    }
}
console.log(numOfEven);


console.error('task nine')
console.log('я не знаюю(')
console.error('task ten')
console.log('я ННЕЕЕ знаю як то робитии')