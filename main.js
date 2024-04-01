let user = [{
    username: 'олег1488',
    login: 'xtrm andrey',
    password: 'олег двіюшник'
}];
let account = {}
    account.username = 'олег1488';
    account.login = 'xtrm andrey';
    account.password = '*************';

console.log(account)
function submit() {
    let inputValueUsername = document.getElementById('idUsername').value;
    let inputValueLogin = document.getElementById('idLogin').value;
    let inputValuePassword = document.getElementById('idPassword').value;

    let foundUser = user.find(item => item.username === inputValueUsername && item.login === inputValueLogin && item.password === inputValuePassword);

    if (foundUser) {
        window.location.href = 'https://github.com/wrouruy/homework';
    } else {
        alert('Неправильне імя, логін або пароль');
    }
}
