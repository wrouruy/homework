let n = prompt('введи свій вік');


if (n < 0) {
    alert('ти ще не народився!');
} else if (n <= 6) {
    alert('тобі завтра в садок');
} else if (n <= 16) {
    alert('тобі завтра в школу');
} else if (n <= 24) {
   alert('тобі завтра в університет');
} else if (n <= 25) {
    alert('тобі завтра на роботу');
} else if (n <= 60) {
    alert('ти вже пенсіонер');
} else if (n <= 100) {
    alert('ти живий?');
} else {
    alert('шось я непоняв то');
}  
function uuu(){

    let m = prompt('введіть вік для реєстрації')

    if (m >= 18){
        var url = "https://github.com/wrouruy/homework";
        window.location.assign(url);
    } else if (m < 18){
      alert('вхід не виконано')
     }
}
 