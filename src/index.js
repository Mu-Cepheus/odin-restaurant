import "./styles.css"
import * as pageLoad from "./pageLoad.js"
import * as menu from "./menu.js"
import * as contact from "./contact.js"

function cleaner() {
    let main = document.querySelector("div#content>main");
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
    if (main.classList.contains("home")) {
        homeButton.classList = "";
    } else if (main.classList.contains("menu")) {
        menuButton.classList = "";
    } else if (main.classList.contains("contact")) {
        contactButton.classList = "";
    }
    while (main.classList.length > 0) {
        main.classList.remove(main.classList.item(0));
    }
}

function tabSwitchers(event) {
    if (event.target.id === "home" && !main.classList.contains("home")) {
        cleaner();
        homeButton.classList.add("colored")
        pageLoad.loader();
    } else if (event.target.id === "menu" && !main.classList.contains("menu")) {
        cleaner()
        menuButton.classList.add("colored")
        menu.loadMenu();
    } else if (event.target.id === "contact" && !main.classList.contains("contact")) {
        cleaner()
        contactButton.classList.add("colored")
        contact.loadContact();
    }
}


let homeButton = document.querySelector("#home");
let menuButton = document.querySelector("#menu");
let contactButton = document.querySelector("#contact");
homeButton.addEventListener("click", tabSwitchers);
menuButton.addEventListener("click", tabSwitchers);
contactButton.addEventListener("click", tabSwitchers);
pageLoad.loader();
let main = document.querySelector("div#content>main");
