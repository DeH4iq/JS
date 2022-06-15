<!DOCTYPE html>
<html>
<head>
<script>
function hello() {
meet = prompt('Как вас зовут?', '')
document.write("Привет " + meet + " и добро пожаловать");
}
</script>
</head>
<body>
<form action="javascript:hello()">
<input type="submit" value="Отобразить приветствие">
</form>
</body>
</html>
<!DOCTYPE html>

<html>
<head>
<script>
function hello() {
const name = prompt('Пожалуйста, представьтесь');
if (name) {
document.querySelector('#welcome').innerHTML = `Привет <b>${name}</b>, добро пожаловать на сайт!`;
alert(`Привет ${name}, добро пожаловать на сайт!`);
} else {
document.querySelector('#welcome').innerHTML = 'Вы нажали кнопку Отмена';
alert('Вы нажали кнопку Отмена');
}
}</script>
</head>
<body>
<div id="welcome"></div>

<form action="javascript:hello()">
<input type="submit" id='welcome' value="Отобразить приветствие">
</form>
</body>
</html> 