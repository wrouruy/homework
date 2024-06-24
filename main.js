// подія заходу
$('.asistantPreview').hide(0);
$('.asistantNumber').hide(0);
$('.asistantMessage').hide(0);
$('.alertError').hide(0);

$('.asistantMessage').append(`<div class='subscriberMessageItem'><p style='margin-left: 10px'>Добрий день! Мене звати Олег, вам з чимось допомогти або підсказати?<span class="miniText">${new Date().getHours()}:${new Date().getMinutes()}</span><p></div>`);



let closeHide = false
$('.asistantButton').click(function () {
    $('.asistantPreview').slideToggle(300);
    $('.asistantNumber').fadeOut(300);
    $('.alertError').fadeOut(300);
    leftBtn = 0
    rightBtn = 0


    if(closeHide == false){
        $('.asistantMessage').css('right', '315px');
        $('#send').css('right', '321px');
        closeHide = true
    } else{
        $('.asistantMessage').css('right', '100px');
        $('#send').css('right', '100px');
        closeHide = false
    }
    if(closeHide == false){
        closeHide = true
    } else if(closeHide == true){
        closeHide = false
    }
})

let leftBtn = 0
let rightBtn = 0
$('.call').click(function() {
    $('.alertError').toggle(300);
    leftBtn++
    if(leftBtn >= 1 && rightBtn >= 1){
        $('#textP').text('Воно тоже недоступно (')
    } else{
        $('#textP').text('Ця функція наразі недоступна :(')
    }
})
$('.sendExploes').click(function() {
    $('.alertError').toggle(300);
    rightBtn++
    if(leftBtn >= 1 && rightBtn >= 1){
        $('#textP').text('Воно тоже недоступно (')
    } else{
        $('#textP').text('Ця функція наразі недоступна :(')
    }
})

$('#send').click(function () {


    $('.asistantMessage').append(`<div class='subscriberMessageItem'><p style='margin-left: 10px'>${$('#message').val()}
    <span class="miniText">${new Date().getHours()}:${new Date().getMinutes()}</span><p>
    </div>`);
    $('.asistantMessage').append(`<p style="color: red; margin-left: 10px">помилка <span style="font-weight: 700; color: red">0052</span>: IQ олега не витримало такого напору.</p>`);
    message.value = ''
})

$('.wrap').click(function() {
    $('.asistantPreview').slideUp(300);
    $('.asistantNumber').fadeOut(300);
    $('.alertError').fadeOut(300);

    $('.asistantMessage').css('right', '100px');
    $('#send').css('right', '100px');
    leftBtn = 0
    rightBtn = 0
})

$('#goTelegram').click(function() {
    window.location.href = 'https://t.me/letfin2';
});

$('#goNumber').click(function () {
    $('.asistantNumber').slideToggle(300);
})

$('#goTalk').click(function() {
    $('.asistantMessage').slideToggle(300);
});


// let currentTime = new Date();

// console.log(currentTime);