import LandingImage from './resto.jpg';

export default function landingPage() {

    let landing = document.createElement('div');
    landing.classList.add("landing");

    // Row 1
    let identityText = document.createElement('div');
    identityText.innerHTML = `<p> Family </p>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident.
        <p>Quality product</p>  Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
        <p>Serve better</p>  Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.`;
    identityText.classList.add("text");

    let identityImage = document.createElement('div');
    identityImage.classList.add("image");
    // Add the image to our existing div.
    const restoImage = new Image();
    restoImage.src = LandingImage;

    identityImage.appendChild(restoImage);

    landing.appendChild(identityText);
    landing.appendChild(identityImage);

    // Row 2
    let identityText2 = document.createElement('div');
    identityText2.innerHTML = `<p> Family </p>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident.
        <p>Quality product</p>  Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
        <p>Serve better</p>  Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.`;
    identityText2.classList.add("text");

    let identityImage2 = document.createElement('div');
    identityImage2.classList.add("image");

    // Add the image to our existing div.
    const restoImage2 = new Image();
    restoImage2.src = LandingImage;

    identityImage2.appendChild(restoImage2);

    landing.appendChild(identityImage2);
    landing.appendChild(identityText2);

    return landing;
}
