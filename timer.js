let listElems = document.getElementsByClassName("timed");
let timeElapsed = 0;

function checkTime () {
	timeElapsed++;
	
	for (let i = 0, x = listElems.length; i < x; i++) {
		if (listElems[i].dataset.timing <= timeElapsed / 10) {
			listElems[i].style.visibility = "visible";
		}
	}
	
	if(timeElapsed >= 2000) {
		clearInterval(interval);
	}
}

let interval = setInterval(checkTime, 100);


