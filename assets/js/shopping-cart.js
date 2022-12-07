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
    let ol = document.querySelector("ol");
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
    aside.style.display = "flex";
    ol.style.display = "block";
}


/**
 * Set the shopping cart list to null and remove content from the list
 */
export function clearCart() {
    orderListEmpty = [];
    let ol = document.querySelector("ol");
    ol.innerHTML = null;
    sessionStorage.setItem("shopping-cart", JSON.stringify(orderListEmpty));
    calculateTotal();
}


/**
 * Take the price of each dishe in the shopping cart and add
 */
function calculateTotal() {
    let total = 0.00;
    let orderList = JSON.parse(sessionStorage.getItem("shopping-cart"));
    for (let dishe of orderList) {
        total = (total + dishe.price);
    }
    console.log(formatter.format(total) + " €");
}


/**
 * A formatter function to round number at 2 decimals
 */
const formatter = new Intl.NumberFormat('fr-FR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});