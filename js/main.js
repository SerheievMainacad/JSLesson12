//dom load
document.addEventListener('DOMContentLoaded', function() {
	console.log('DOM loaded');
});
//window load
window.onload = function() {
	console.log('window loaded');
	/*var btn = document.getElementById('btn');
	btn.onclick = handleClick;

	function handleClick() {
		alert('click form script');
	}

	var block = document.getElementById('block');
	var paragraph = document.getElementsByTagName('p')[0];*/

	/*block.onclick = function() {
		this.style.backgroundColor = 'lightblue';
		// console.log(this);
		// document.body.style.backgroundColor = 'red';
	};
	paragraph.onclick = function() {
		this.style.backgroundColor = 'lightgreen';
		// console.log(this);
		// document.body.style.backgroundColor = 'red';
	};*/
	//elem.addEventListener('EventName', function(){}, isBubbles)
	//событие 3 стадии - 1-перехват, 2- на целевом элементе, 3- всплытие
	// isBubbles - на какой стадии обработать событие перехват/всплытие - всплытие по умолч.
	/*var buble = false;
	block.addEventListener(
		'click',
		function(event) {
			this.style.backgroundColor = 'lightblue';
			alert('block event');
		},
		buble
	);
	paragraph.addEventListener(
		'click',
		function(event) {
			// event.stopPropagation();
			this.style.backgroundColor = 'lightgreen';
			alert('paragraph event');
		},
		buble
	);*/
	// delegate event
	/*block.onclick = function(event) {
		if (event.target.tagName == 'P') {
			event.target.style.backgroundColor = 'orange';
		}
		if (event.target.tagName == 'A') {
			alert('a clicked');
		}
	};*/

	//--------mouse events
	var mouse = document.getElementById('mouse');
	// bubble
	/*mouse.onmouseover = function() {
		console.log('mouseover');
	};
	mouse.onmouseout = function() {
		console.log('mouseout');
	};
	mouse.onmousemove = function() {
		console.log('mousemove');
	};
	//don't bubble
	mouse.onmouseenter = function() {
		console.log('mouseenter');
	};
	mouse.onmouseleave = function() {
		console.log('mouseleave');
	};
*/
	/*mouse.onclick = function() {
		console.log('click');
	};
	mouse.onmousedown = function() {
		console.log('mousedown');
	};
	mouse.onmouseup = function() {
		console.log('mouseup');
	};
	mouse.ondblclick = function() {
		console.log('dblclick');
	};
	mouse.oncontextmenu = function() {
		console.log('oncontextmenu');
		event.preventDefault();
	};*/

	//-------keyboard events
	var keyboard = document.getElementById('keyboard');
	var result = document.getElementById('result');
	/*keyboard.onkeydown = function() {
		console.log('onkeydown');
		// if (event.keyCode < 48 || event.keyCode > 57) return false;
		// result.innerHTML = event.keyCode;
		result.innerHTML = event.keyCode;
	};*/
	// keyboard.onkeyup = function() {
	// 	console.log('onkeyup');
	// };
	/*var alt = document.getElementById('alt');
	var ctrl = document.getElementById('ctrl');
	var shift = document.getElementById('shift');
	var meta = document.getElementById('meta');
	keyboard.onkeypress = function() {
		console.log('onkeypress');
		alt.innerHTML = 'alt ' + event.altKey;
		ctrl.innerHTML = 'ctrl ' + event.ctrlKey;
		shift.innerHTML = 'shift ' + event.shiftKey;
		meta.innerHTML = 'meta ' + event.metaKey;
		console.log(event);
		//result.innerHTML = event.charCode;
		// result.innerHTML += String.fromCharCode(event.charCode);
	};*/
};
window.onunload = function() {
	return false;
};

window.onbeforeunload = function() {
	return 'asdasdasd';
};
