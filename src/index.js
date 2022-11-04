import "./style.css";
import landingPage from "./landing.js";
import menu from "./menu.js";
import contact from "./contact.js";

let header = document.createElement('div');
header.classList.add("header");

let title = document.createElement('h1');
title.innerHTML = 'Pinot Restaurant';
header.appendChild(title);

let menubar = document.createElement('div');
menubar.classList.add("tabs");
menubar.id = 'tabs';

let identity = document.createElement('h2');
let link = document.createElement('a')
link.innerHTML = 'Our identity';
identity.appendChild(link);
identity.classList.add("focus");

// menubar.style.property = "background: linear-gradient(to right, grey 33%, white 33% 66%, white 66% 100%);"
link.onclick = () => {
    document.getElementById('content').lastElementChild.remove();
    document.getElementById('content').appendChild(landingPage());
    document.getElementsByClassName('focus')[0].classList.remove("focus");
    document.getElementById('transi').style.marginLeft = "20%"
    identity.classList.add("focus");
}
menubar.appendChild(identity);

let menuTitle = document.createElement('h2');
let linkm = document.createElement('a')
linkm.innerHTML = 'Menu';
menuTitle.appendChild(linkm);
menubar.appendChild(menuTitle);
linkm.onclick = () => {
    document.getElementById('content').lastElementChild.remove();
    document.getElementById('content').appendChild(menu());
    document.getElementsByClassName('focus')[0].classList.remove("focus");
    document.getElementById('transi').style.marginLeft = "120%"
    menuTitle.classList.add("focus");
}

let contactTitle = document.createElement('h2');
menubar.appendChild(contactTitle);
let linkc = document.createElement('a')
linkc.innerHTML = 'Contact';
contactTitle.appendChild(linkc);
linkc.onclick = () => {
    document.getElementById('content').lastElementChild.remove();
    document.getElementById('content').appendChild(contact());
    document.getElementsByClassName('focus')[0].classList.remove("focus");
    contactTitle.classList.add("focus");
    document.getElementById('transi').style.marginLeft = "220%"
    console.log("change css")
}

let transi = document.createElement('h2');
transi.id = 'transi';
menubar.appendChild(transi);

header.appendChild(menubar);

document.getElementById('content').appendChild(header);
document.getElementById('content').appendChild(landingPage());
// document.getElementById('content').appendChild(menu());
// document.getElementById('content').appendChild(contact());
