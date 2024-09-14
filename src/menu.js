import pokChop from "./assets/porkChop.jpeg";
import rice from "./assets/rice.jpeg";
import ketch from "./assets/ketch.jpg"
import cs from "./assets/chopSuey.jpg"

function loadMenu() {
    let content = document.querySelector("#content");
    let main = document.querySelector("main");
    main.classList.add("menu")
    content.appendChild(main);

    let menuItemPork = document.createElement("div");
    menuItemPork.classList.add("item");
    main.appendChild(menuItemPork);
    let porkPic = document.createElement("img");
    porkPic.src = pokChop;
    let porkPicDiv = document.createElement("div");
    porkPicDiv.classList.add("pic");
    porkPicDiv.appendChild(porkPic);
    menuItemPork.appendChild(porkPicDiv);
    let porkNameDiv = document.createElement("div");
    porkNameDiv.classList.add("name");
    let porkHeader = document.createElement("h4");
    porkHeader.innerText = "Porkchops";
    porkNameDiv.appendChild(porkHeader);
    menuItemPork.appendChild(porkNameDiv);
    let porkDescDiv = document.createElement("div");
    porkDescDiv.classList.add("description");
    let porkDesc = document.createElement("span");
    porkDesc.innerText = "Charcoal grilled marinated porkchops";
    porkDescDiv.appendChild(porkDesc);
    menuItemPork.appendChild(porkDescDiv)

    let menuItemRice = document.createElement("div");
    menuItemRice.classList.add("item");
    main.appendChild(menuItemRice);
    let ricePic = document.createElement("img");
    ricePic.src = rice;
    let ricePicDiv = document.createElement("div");
    ricePicDiv.classList.add("pic");
    ricePicDiv.appendChild(ricePic);
    menuItemRice.appendChild(ricePicDiv);
    let riceNameDiv = document.createElement("div");
    riceNameDiv.classList.add("name");
    let riceHeader = document.createElement("h4");
    riceHeader.innerText = "Rice";
    riceNameDiv.appendChild(riceHeader);
    menuItemRice.appendChild(riceNameDiv);
    let riceDescDiv = document.createElement("div");
    riceDescDiv.classList.add("description");
    let riceDesc = document.createElement("span");
    riceDesc.innerText = "Two servings of soft steamed rice.";
    riceDescDiv.appendChild(riceDesc);
    menuItemRice.appendChild(riceDescDiv)

    let menuItemKetchup = document.createElement("div");
    menuItemKetchup.classList.add("item");
    main.appendChild(menuItemKetchup);
    let ketchupPic = document.createElement("img");
    ketchupPic.src = ketch;
    let ketchupPicDiv = document.createElement("div");
    ketchupPicDiv.classList.add("pic");
    ketchupPicDiv.appendChild(ketchupPic);
    menuItemKetchup.appendChild(ketchupPicDiv);
    let ketchupNameDiv = document.createElement("div");
    ketchupNameDiv.classList.add("name");
    let ketchupHeader = document.createElement("h4");
    ketchupHeader.innerText = "Ketchup";
    ketchupNameDiv.appendChild(ketchupHeader);
    menuItemKetchup.appendChild(ketchupNameDiv);
    let ketchupDescDiv = document.createElement("div");
    ketchupDescDiv.classList.add("description");
    let ketchupDesc = document.createElement("span");
    ketchupDesc.innerText = "Delicious tomato ketchup";
    ketchupDescDiv.appendChild(ketchupDesc);
    menuItemKetchup.appendChild(ketchupDescDiv)

    let menuItemChopsuey = document.createElement("div");
    menuItemChopsuey.classList.add("item");
    main.appendChild(menuItemChopsuey);
    let chopsueyPic = document.createElement("img");
    chopsueyPic.src = cs;
    let chopsueyPicDiv = document.createElement("div");
    chopsueyPicDiv.classList.add("pic");
    chopsueyPicDiv.appendChild(chopsueyPic);
    menuItemChopsuey.appendChild(chopsueyPicDiv);
    let chopsueyNameDiv = document.createElement("div");
    chopsueyNameDiv.classList.add("name");
    let chopsueyHeader = document.createElement("h4");
    chopsueyHeader.innerText = "Chopsuey";
    chopsueyNameDiv.appendChild(chopsueyHeader);
    menuItemChopsuey.appendChild(chopsueyNameDiv);
    let chopsueyDescDiv = document.createElement("div");
    chopsueyDescDiv.classList.add("description");
    let chopsueyDesc = document.createElement("span");
    chopsueyDesc.innerText = "Stir fried vegetables, chicken, and quail eggs";
    chopsueyDescDiv.appendChild(chopsueyDesc);
    menuItemChopsuey.appendChild(chopsueyDescDiv)
}

export { loadMenu };