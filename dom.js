const container = document.getElementsByClassName("container")[0];
const h1 = document.getElementsByTagName("h1")[0];

const para = document.createElement("p");
const text1 = document.createTextNode(`Window width: ${window.innerWidth}`);
const para2 = document.createElement("p");
const text2 = document.createTextNode(`Window height: ${window.innerHeight}`);

para.appendChild(text1);
para2.appendChild(text2);

container.insertBefore(para, h1);
container.insertBefore(para2, h1);
