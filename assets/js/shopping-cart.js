let orderListEmpty = [];

/**
 * Store the object in sessionStorage and display a confirmation window
 * @param {Object} dishe 
 */
export function addToCart(dishe) {
    orderListEmpty.push(dishe);
    sessionStorage.setItem("shopping-cart", JSON.stringify(orderListEmpty));
    window.alert(dishe.name + " is added to the shopping cart!");
    showCart();
    calculateTotal();
}

/**
 * Display the shopping cart and create an item the shopping list
 */
export function showCart() {
    let aside = document.querySelector("aside");
    let ol = document.querySelector(".shopping-list");
    ol.innerHTML = null;

    let orderList = orderListEmpty;
    if (orderList !== null) {
        for (let dishe of orderList) {
            let li = document.createElement("li");
            li.innerText = dishe.name;
            ol.appendChild(li);
        }
        aside.appendChild(ol);
        document.body.appendChild(aside);
    }

    let total = document.querySelector(".total");
    total.innerText = calculateTotal()


    aside.style.display = "flex";
    ol.style.display = "block";
}


/**
 * Set the shopping cart list to null and remove content from the list
 */
export function clearCart() {
    orderListEmpty = [];
    let ol = document.querySelector(".shopping-list");
    ol.innerHTML = null;
    sessionStorage.setItem("shopping-cart", JSON.stringify(orderListEmpty));
    calculateTotal();
    let total = document.querySelector(".total");
    total.innerText = "0,00 €";
}


/**
 * Take the price of each dishe in the shopping cart and add
 */
 export function calculateTotal() {
    let orderList = JSON.parse(sessionStorage.getItem("shopping-cart"));
    let total = 0.00;
    for (let dishe of orderList) {
        total = (total + dishe.price);
    }
    return formatter.format(total) + " €";

}


/**
 * A formatter function to round number at 2 decimals
 */
const formatter = new Intl.NumberFormat('fr-FR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});