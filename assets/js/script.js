import { DISHES, LOREM_IPSUM } from "./config.js";
import { addToCart, showCart } from "./shopping-cart.js";

function main() {
    let dishes = DISHES;
    let main = document.createElement("main");
    let section = document.createElement("section");
    for (let dish of dishes) {
        section.appendChild(drawDishes(dish));
    }
    let cartButton = drawCartButton();
    main.appendChild(cartButton);
    main.appendChild(section);
    document.body.appendChild(main);

    drawShoppingCart();
}

function drawShoppingCart() {
    let aside = document.createElement("aside");
    aside.className = "shopping-cart";
    aside.style.display = "none";
    aside.style.position = "fixed" //set in scss
    aside.style.top = 0; //set in scss
    aside.style.right = 0; //set in scss

    let ol = document.createElement("ol");

    aside.appendChild(ol);
    let section = document.createElement("section")
    document.body.appendChild(aside);

}

function drawCartButton() {
    let cartButton = document.createElement("button");
    cartButton.innerText = "Shopping Cart"
    cartButton.addEventListener("click", (e) => {
        let aside = document.querySelector("aside");
        if (aside.style.display === "none") {
        showCart();
        } else {
            aside.style.display = "none";
        }
    })
    return cartButton;
}

function drawDishes(dish) {
    let article = document.createElement("article");

    // Create the picture
    let picture = document.createElement("img");
    picture.setAttribute("alt", dish.name);
    picture.setAttribute("src", dish.picture);
    article.appendChild(picture);

    // Name of the dish
    let title = document.createElement("h2");
    title.innerText = dish.name;
    article.appendChild(title);

    // Price of the dish
    let price = document.createElement("h3");
    price.innerText = dish.price + " €";
    article.appendChild(price);

    // Create the inner section
    let innerSection = document.createElement("section");
    innerSection.className = "inner-section";

    // Add dish to shopping cart
    let addToCartButton = document.createElement("button");
    addToCartButton.innerText = "Add to cart"
    addToCartButton.addEventListener("click", () => {
        addToCart(dish);
        let aside = document.querySelector("aside");
        let ol = document.querySelector("ol");
        if (aside.style.display === "flex"){
            ol.innerHTML = null;
        //todo update the aside menu if displayed
            showCart();
        }

    })
    innerSection.appendChild(addToCartButton);


    // Create summary
    let summary = document.createElement("p");
    summary.innerText = dish.description;
    innerSection.appendChild(summary);



    // Create the back section
    let backSection = document.createElement("section");
    backSection.className = "back-section";

    // Assemble
    article.appendChild(innerSection);
    article.appendChild(backSection);

    return article;
}

main();