
const buttons = document.querySelectorAll(".menu-card button");
let order=[];
const cartItems =document.getElementById("cart-items");
const total =document.getElementById("total");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {
        const card=button.parentElement;
        const foodName=card.querySelector("h3").textContent;
        const foodPrice=card.querySelector("span").textContent;
        const existingItem = order.find(function(item) {
    return item.name === foodName;
});

if (existingItem) {
    existingItem.quantity++;

    const existingCartItem = cartItems.querySelector(`[data-name="${foodName}"]`);
    const quantityText = existingCartItem.querySelector(".quantity");

    quantityText.textContent = existingItem.quantity;

    let sum = 0;

    order.forEach(function(item) {
        sum += parseFloat(item.price) * item.quantity;
    });

    total.textContent = sum + "$";

    return;
}
        const newItem ={
            name: foodName,
            price:foodPrice,
            quantity:1
            };
            order.push(newItem);

          cartItems.insertAdjacentHTML("beforeend", `
        <p class="cart-item">
        ${foodName} - ${foodPrice}
        <br>
        Quaantity:
        <button class="minus-btn">-
        </button>
        <span class="quantity">${newItem.quantity}</span>
        <button class="plus-btn">+
        </button>
        <button class="remove-btn" data-name="${foodName}">
            Remove</button>
        </p>`);
         
           const cartItem = cartItems.lastElementChild;

const plusButton = cartItem.querySelector(".plus-btn");

const quantityText = cartItem.querySelector(".quantity");

plusButton.addEventListener("click", function(){

    newItem.quantity++;

    quantityText.textContent = newItem.quantity;
    let sum=0;
    order.forEach(function(item){
        sum +=
        parseFloat(item.price) *
        item.quantity;
    });
    total.textContent=sum+"$";

});
            const minusButton = cartItem.querySelector(".minus-btn");

minusButton.addEventListener("click", function() {

    if (newItem.quantity > 1) {
        newItem.quantity--;
        quantityText.textContent = newItem.quantity;
        let sum=0;
        order.forEach(function(item){
            sum +=
            parseFloat(item.price) *
            item.quantity;
        });
        total.textContent=sum+"$";
    }

});
        const removeButtons=document.querySelectorAll(".remove-btn")
        removeButtons.forEach(function(removeButton) {

    removeButton.addEventListener("click", function() {
        const foodName=removeButton.dataset.name;
        const index=order.findIndex(function(item) {
            return item.name===foodName;
            });
            if (index !== -1) {
            order.splice(index, 1);}
    removeButton.parentElement.remove();
    let sum=0;
    order.forEach(function(item){
        sum +=parseFloat(item.price) * item.quantity;
        });
    total.textContent = sum + "$";
    });

});
        let sum = 0;

order.forEach(function(item) {
    sum += parseFloat(item.price) * item.quantity;
});

total.textContent = sum + "$";


        alert(foodName +" - " +
             foodPrice + "Your order has been added!");

    });

});
const checkoutButton=document.querySelector(".checkout-btn");
checkoutButton.addEventListener("click", function() {
    if (order.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert("Your order has been confirmed!");
        order.length=0;
        cartItems.innerHTML="";
        total.textContent="0$";
    }
});
