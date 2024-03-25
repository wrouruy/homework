let favoriteBook = ['1984','shedevroAlgebra','Phizuka-SOS'];
let favoriteFilms = ['Interstellar','Fight Club','American psychopath'];
let numericalValues = [2, 5, 8, 10, 15, 20, 25, 30, 35, 40];
let sum = 0;
for (let i = 0; i < numericalValues.length; i++) {
    sum += numericalValues[i];
}
let threeMassif = [favoriteBook, favoriteFilms, numericalValues, ];
let Notebook = ['processor: AMD Ryzen 5 4600G with Radeon Graphics   3.70 GHz; Operating memory: 16,0 GB'];
threeMassif.push = Notebook;
let phoneNumber = ['(+380) 68 959 7364'];
threeMassif.unshift = phoneNumber;
let color = 'violet';
threeMassif.unshift = color;


console.log(favoriteBook);
console.log(favoriteFilms);
console.log(sum);
console.log(threeMassif);
console.log(threeMassif.length);
// console.log(Notebook);
// console.log(phoneNumber);
console.log('Воно дуже важке(');




let a = 0;

function oleg1488(){
    if(a == 0){
        alert('НЕ НАЖИМАЙ НА ЦЮ КНОПКУ!')
        var button = document.getElementById("button");
        // Перевірка поточного тексту кнопки
        if (button.textContent === "нажми на кнопку") {
        // Якщо текст кнопки "Натисни мене", змінюємо його на "Кнопка натиснута"
        button.textContent = "НАЖМИ НА МЕНЕ!!";
    } else{
        button.textContent = "НАЖМИ НА МЕНЕ!!";
    }
        a += 1;
    } else if(a == 1){
        alert('Повторяю, НЕ НАЖИМАЙ')
        var button = document.getElementById("button");
        // Перевірка поточного тексту кнопки
        if (button.textContent === "НАЖМИ НА МЕНЕ!!") {
        // Якщо текст кнопки "Натисни мене", змінюємо його на "Кнопка натиснута"
        button.textContent = "НАЖМИ НАЖМИ НАЖМИ НАЖМИ";
    } else{
        button.textContent = "НАЖМИ НАЖМИ НАЖМИ НАЖМИ";
    }
        a += 1;
    } else if(a === 2){
        alert('ну благгааююю:(')
        var button = document.getElementById("button");
        // Перевірка поточного тексту кнопки
        if (button.textContent === "НАЖМИ НАЖМИ НАЖМИ НАЖМИ") {
        // Якщо текст кнопки "Натисни мене", змінюємо його на "Кнопка натиснута"
        button.textContent = "не слухай його, ПРОСТО НАЖМИ НА МЕНЕ!";
    } else{
        button.textContent = "не слухай його, ПРОСТО НАЖМИ НА МЕНЕ!";
    }
        a += 1;
    } else if(a === 3){
        alert('ПРОЧИТАВ -- ОЛЕГ ДВІЮШНИК')
        var button = document.getElementById("button");
        // Перевірка поточного тексту кнопки
        if (button.textContent === "не слухай його, ПРОСТО НАЖМИ НА МЕНЕ!") {
        // Якщо текст кнопки "Натисни мене", змінюємо його на "Кнопка натиснута"
        button.textContent = "ККННООППККААААА";
    } else{
        button.textContent = "ККННООППККААААА";
    }
        a += 1;
    } else if(a === 4){
        alert('НННЄЄЄЄЄЄЄ!!!')
        var button = document.getElementById("button");
        // Перевірка поточного тексту кнопки
        if (button.textContent === "ККННООППККААААА") {
        // Якщо текст кнопки "Натисни мене", змінюємо його на "Кнопка натиснута"
        button.textContent = "ААААААА!!!(звуки радості)";
    } else{
        button.textContent = "ААААААА!!!(звуки радості)";
    }   a += 1;
    
}else if(a === 5){
    alert('ННННЄЄЄЄЄЄЄЄ!!(звуки розачарування)')
    location.replace("https://github.com/wrouruy/homework")
    var button = document.getElementById("button");
        // Перевірка поточного тексту кнопки
        if (button.textContent === "ААААААА!!!(звуки радості") {
        // Якщо текст кнопки "Натисни мене", змінюємо його на "Кнопка натиснута"
        button.textContent = "Олег1488 -- двіюшник";
    } else{
        button.textContent = "Олег1488 -- двіюшник";
    }
}
}