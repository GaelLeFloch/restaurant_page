import "./style.css";
import LandingImage from './resto.jpg';

function header() {

    header = document.createElement('div');
    header.classList.add("header");

    let title = document.createElement('h1');
    title.innerHTML = 'Pinot Restaurant';
    header.appendChild(title);

    menubar = document.createElement('div');
    menubar.classList.add("menu");

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

function landingPage() {

    let landing = document.createElement('div');
    landing.classList.add("landing");

    let identityText = document.createElement('div');
    identityText.innerHTML = `<p> Family </p>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident.
        <p>Quality product</p>  Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
        <p>Serve better</p>  Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.`;
    identityText.classList.add("text");

    let identityImage = document.createElement('div');
    identityImage.classList.add("image");
    // Add the image to our existing div.
    const restoImage = new Image();
    restoImage.src = LandingImage;

    identityImage.appendChild(restoImage);

    landing.appendChild(identityText);
    landing.appendChild(identityImage);

    return landing;
}

document.getElementById('content').appendChild(header());
document.getElementById('content').appendChild(landingPage());
