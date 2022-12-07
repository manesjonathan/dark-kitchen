import { DISHES } from "./config.js";
import { addToCart, clearCart, showCart } from "./shopping-cart.js";

function main() {
    let dishes = DISHES;
    let main = document.createElement("main");
    let section = document.createElement("section");
    let title = document.createElement("h2");
    title.innerText = "Nos tartines";
    main.prepend(title);

    for (let dish of dishes) {
        section.appendChild(drawDishes(dish));
    }
    let shoppingCartButton = drawShoppingCartButton();

    main.appendChild(shoppingCartButton);
    main.appendChild(section);
    document.body.insertBefore(main, document.querySelector("footer"));
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

    let resetButton = document.createElement("button");
    resetButton.addEventListener("click", () => {
        clearCart();
    })

    aside.appendChild(resetButton);
    document.body.appendChild(aside);
}

/**
 * Create the shopping cart element
 * @returns the shopping cart button
 */
function drawShoppingCartButton() {
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

/**
 * Create an article for each dishe
 * @param {Object} dishe 
 * @returns the article
 */
function drawDishes(dishe) {
    let article = document.createElement("article");

    // Create the picture
    let picture = document.createElement("img");
    picture.setAttribute("alt", dishe.name);
    picture.setAttribute("src", dishe.picture);
    article.appendChild(picture);

    // Name of the dish
    let title = document.createElement("h3");
    title.innerText = dishe.name;
    article.appendChild(title);

    // Price of the dish
    let price = document.createElement("h4");
    price.innerText = dishe.price + " €";
    article.appendChild(price);

    // Create the inner section
    let innerSection = document.createElement("section");
    innerSection.className = "inner-section";

    // Add dish to shopping cart
    let addToCartButton = document.createElement("button");
    addToCartButton.innerText = "Add to cart"
    addToCartButton.addEventListener("click", () => {
        addToCart(dishe);
    })
    innerSection.appendChild(addToCartButton);

    // Create summary
    let summary = document.createElement("p");
    summary.innerText = dishe.description;
    innerSection.appendChild(summary);

    // Vegan pin
    if (dishe.category.includes("vegan")) {
        let icon = document.createElement("i");
        icon.setAttribute("class", "fa-solid fa-seedling");
        innerSection.appendChild(icon);
    }
    // Create the back section
    let backSection = document.createElement("section");
    backSection.className = "back-section";

    // Assemble
    article.appendChild(innerSection);
    article.appendChild(backSection);

    return article;
}


export function responsiveMenu() {
    console.log("coucou")
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

main();