const orderList = [];

export function addToCart(dish) {

    sessionStorage.setItem(dish.id, JSON.stringify(dish));
    orderList.push(dish);
    sessionStorage.setItem("shopping-cart", JSON.stringify(orderList));

    window.alert(dish.name + " is added to the shopping cart!");
}

export function showCart() {

    let aside = document.querySelector("aside");
    let ol = document.querySelector("ol");

    let orderList = JSON.parse(sessionStorage.getItem("shopping-cart"));
    console.log(orderList);

    for (let dish of orderList) {
        let li = document.createElement("li");
        li.innerText = dish.name;
        ol.appendChild(li);
        console.log(dish.name);
    }

    aside.appendChild(ol);
    document.body.appendChild(aside);
    aside.style.display = "flex";
    ol.style.display = "block";
}

export function updateCart(){

}