var  screen = document.getElementById('txtScreen1');

function setScreen1(num) {
	if (screen.value != 0) {
		screen.value += num;
	} else {
		screen.value = num;
	}
	console.log(screen);
}