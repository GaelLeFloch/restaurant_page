
export default function contact() {

    let contact = document.createElement('div');
    contact.classList.add("contact");

    // let title = document.createElement('h2');
    // title.innerHTML = 'Contact'
    // title.id = 'contact'

    let name = document.createElement('input');
    name.type = "text";
    name.placeholder = "Name";
    name.name = "name";

    let email = document.createElement('input');
    email.type = "text";
    email.placeholder = "Email@gmail.com";
    email.name = "email";

    let comment = document.createElement('input');
    comment.type = "text";
    comment.placeholder = "Comment";
    comment.name = "comment";

    // contact.appendChild(title);
    contact.appendChild(name);
    contact.appendChild(email);
    contact.appendChild(comment);

    return contact;
}
