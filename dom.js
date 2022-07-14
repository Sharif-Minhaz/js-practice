const container = document.getElementsByClassName("container")[0];
const h1 = document.getElementsByTagName("h1")[0];

const h2 = document.createElement("h2");
const text = document.createTextNode("Replaced text here...");

h2.appendChild(text);
container.replaceChild(h2, h1);
