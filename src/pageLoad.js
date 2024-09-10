import pizzer from "./assets/pizza.jpg"

function loader() {
    let content = document.querySelector("#content");
    let main = document.createElement("main");
    content.appendChild(main);
    let pizza = document.createElement("div");
    pizza.setAttribute("id", "pizza");
    main.appendChild(pizza);
    let pizzaTime = document.createElement("img");
    pizzaTime.setAttribute("src", pizzer);
    pizzaTime.setAttribute("alt", "pizza time");
    pizza.appendChild(pizzaTime);
    let attribution = document.createElement("span");
    pizza.appendChild(attribution);
    attribution.innerText = "Photo by";
    let profileLink = document.createElement("a");
    profileLink.setAttribute("href", "https://unsplash.com/@dabyki");
    profileLink.innerText = " Nadya Filatova"
    attribution.appendChild(profileLink);
    let onSpan = document.createElement("span");
    onSpan.innerText = " on";
    attribution.appendChild(onSpan);
    let picLink = document.createElement("a");
    picLink.setAttribute("href", "https://unsplash.com/photos/pizza-on-blue-ceramic-plate-frTrM7Gdkho");
    picLink.innerText = " Unsplash";
    attribution.appendChild(picLink);

    let resto = document.createElement("div");
    resto.setAttribute("id", "ristorante");
    let eych = document.createElement("h1");
    eych.innerText = "Food so good you'll never eat again!";
    resto.appendChild(eych);
    main.appendChild(resto);

    let blurb = document.createElement("div");
    blurb.setAttribute("id", "blurb");
    blurb.innerText = "Full meals for dirt cheap! Culinary experience made in heaven!"
    main.appendChild(blurb);
}

export { loader };