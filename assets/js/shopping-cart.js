let orderListEmpty = [];

export function addToCart(dishe) {
    orderListEmpty.push(dishe);
    sessionStorage.setItem("shopping-cart", JSON.stringify(orderListEmpty));
    window.alert(dishe.name + " is added to the shopping cart!");
    showCart();
}

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

export function clearCart(){
    orderListEmpty = [];
    let ol = document.querySelector("ol");
    ol.innerHTML = null;

    sessionStorage.setItem("shopping-cart", orderListEmpty);
}