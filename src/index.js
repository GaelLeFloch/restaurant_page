import "./style.css";
import landingPage from "./landing.js";
import menu from "./menu.js";
import contact from "./contact.js";

function header() {

    header = document.createElement('div');
    header.classList.add("header");

    let title = document.createElement('h1');
    title.innerHTML = 'Pinot Restaurant';
    header.appendChild(title);

    menubar = document.createElement('div');
    menubar.classList.add("tabs");

    let identity = document.createElement('h2');
    identity.innerHTML = 'Our identity';
    menubar.appendChild(identity);

    let menu = document.createElement('h2');
    menu.innerHTML = 'Menu';
    menubar.appendChild(menu);

    let contact = document.createElement('h2');
    contact.innerHTML = 'Contact';
    menubar.appendChild(contact);

    header.appendChild(menubar);

    return header;
}

document.getElementById('content').appendChild(header());
document.getElementById('content').appendChild(landingPage());
document.getElementById('content').appendChild(menu());
document.getElementById('content').appendChild(contact());
