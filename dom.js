const selectHeader = document.getElementsByTagName("h1");

selectHeader[0].onmouseenter = function () {
	this.innerHTML = "Well done! now leave";
};

selectHeader[0].onmouseleave = function () {
	this.innerHTML = "Thank you";
};

function didit(event) {
	alert(event.key);
}
