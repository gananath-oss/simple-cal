var  screen1 = document.getElementById('txtScreen1');
var screen2 = document.getElementById('txtScreen2');

function setScreen1(num) {
	if (screen1.value != 0 || screen1.value != '+'){
		screen1.value += num;
	} else if (screen1.value == 0) {
		screen1.value = num;
	}
}

function clear() {
	screen2.value = screen1.value;
	screen1.value = '';
}

function equal(eq) {
	screen2.value = screen1.value;
	screen1.value = eval(screen1.value);
}
