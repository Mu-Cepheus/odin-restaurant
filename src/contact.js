function loadContact() {
    let content = document.querySelector("#content");
    let main = document.querySelector("main");
    main.classList.add("contact")
    content.appendChild(main);

    let box = document.createElement("div");
    box.classList.add("box");
    main.appendChild(box);
    let header = document.createElement("h3");
    box.appendChild(header);
    header.innerText = "Contact Us"
    let paragraph = document.createElement("p");
    paragraph.innerText = "John Cawfee"
    box.appendChild(paragraph);
    
    let position = document.createElement("p");
    position.innerText = "Manager"
    box.appendChild(position);

    let number = document.createElement("p");
    number.innerText = "42538876"
    box.appendChild(number);

    let email = document.createElement("p");
    email.innerText = "tomsdiner@gmail.com"
    box.appendChild(email);
}

export { loadContact };