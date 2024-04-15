function github(){
    location.replace('https://github.com/wrouruy/homework')
}
console.error('no function')
let yearOne = 2024;
let leapYear = (yearOne % 4 === 0 && yearOne % 100 !== 0) || (yearOne % 400 === 0);
console.log(leapYear);


console.error('with function')
function isLeapYear(year) {
    return (yearTwo % 4 === 0 && yearTwo % 100 !== 0) || (yearTwo % 400 === 0);
}

const yearTwo = 2024;
console.log(isLeapYear(yearTwo));
