// console.dir(document);

// const h1 = document.body.children[0];

// console.log(h1);

// const parentElement = h1.parentElement;

// console.log(parentElement);

// const siblingElement = h1.nextElementSibling;

// console.log(siblingElement);

// const username = document.getElementById("username");

// console.log(username);

// let secondParagraph = document.querySelector("p.secondP");

// secondParagraph = secondParagraph.textContent = "Don't click here!";

// console.log(secondParagraph);

let newAnchorElement = document.createElement('a');

let anchorParentElement = document.querySelector('p');

anchorParentElement.append(newAnchorElement);

newAnchorElement.className = "new__link";
newAnchorElement.href = "https://google.com";
newAnchorElement.textContent = "New Link!";

document.querySelector('.new__link').remove('.new__link');

