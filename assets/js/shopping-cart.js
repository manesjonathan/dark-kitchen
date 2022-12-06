const orderList = [];

export function addToCart(dish) {

    sessionStorage.setItem(dish.id, JSON.stringify(dish));
    orderList.push(dish);
    sessionStorage.setItem("shopping-cart", JSON.stringify(orderList));
    console.log(orderList);

    window.alert(dish.name + " is added to the shopping cart!");
}

export function showCart() {
    let aside = document.querySelector("aside");
    aside.style.display = "flex";
    let orderList = JSON.parse(sessionStorage.getItem("shopping-cart"));
    let ol = document.createElement("ol");

    for (let dish of orderList) {
        let li = document.createElement("li");
        li.innerText = dish.name;
        ol.appendChild(li);
        console.log(dish.name);
    }

    aside.appendChild(ol);
    document.body.appendChild(aside);
}
