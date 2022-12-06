let orderListEmpty = [];

export function addToCart(dish) {
    orderListEmpty.push(dish);
    sessionStorage.setItem("shopping-cart", JSON.stringify(orderListEmpty));
    window.alert(dish.name + " is added to the shopping cart!");
    showCart();
}

export function showCart() {
    let aside = document.querySelector("aside");
    let ol = document.querySelector("ol");
    ol.innerHTML = null;

    let orderList = orderListEmpty;
    if (orderList !== null) {
        for (let dish of orderList) {
            let li = document.createElement("li");
            li.innerText = dish.name;
            ol.appendChild(li);
        }
        aside.appendChild(ol);
        document.body.appendChild(aside);
    }
    aside.style.display = "flex";
    ol.style.display = "block";
}

export function clearCart(){
    orderListEmpty = [];
    let ol = document.querySelector("ol");
    ol.innerHTML = null;

    sessionStorage.setItem("shopping-cart", orderListEmpty);
}