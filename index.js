const btnAll = document.getElementsByClassName('btn__add__to__cart');
const cartItemsEach = document.getElementById('cart__items')
//delet add to cart item

const removeCart = document.getElementsByClassName('remove__btn');
for (var i = 0; i < removeCart.length; i++) {
    var removeCartItem = removeCart[i];

    removeCartItem.addEventListener('click', btnRemove)
}
function btnRemove(e) {
    removeCartItem = e.target.parentElement
    removeCartItem.remove();
}

//console.log(cartItemsEach)
for (var i = 0; i < btnAll.length; i++) {
    const btn = btnAll[i]

    btn.addEventListener('click', function (e) {
        //taking all information to the main product list throw out the function
        const productDiv = e.target.parentElement
        var title = productDiv.getElementsByClassName('product__title')[0].innerText
        var imgSrc = productDiv.getElementsByClassName('product__image')[0].src;
        var price = productDiv.getElementsByClassName('product__price')[0].innerText;

        //passing details on cartDetailsPassed function

        cartDetailsPassed(title, imgSrc, price)
    })
}
//passing argument on this cartDetailsPassed function

function cartDetailsPassed(title, imgSrc, price) {
    var cartContainer = document.createElement('li');
    cartItemsEach.append(cartContainer);

    //problem code see what happend on uncomment
    cartContainer.innerHTML =

        `
        <li class="cart__item__each">
        <h3>${title}</h3>
        <img src="${imgSrc}" alt="">
        <span class="price">${price}</span>
        <button class="btn remove__btn">
            delete Item
        </button>
        </li>

        `

    /*  

     const productTitle = document.getElementsByClassName('product__title')
     for(var i =0;i<productTitle.length; i++){
         var noMoreAddBtn = productTitle[i];

         if(noMoreAddBtn.innerText == title){
             alert('This item is alrady added to your cart')
             return;
         }

     }
     */

    cartContainer.getElementsByClassName('remove__btn')[0].addEventListener('click', btnRemove)

    createLocalCartData(cartContainer);
    createLocalCartData(cartContainer.innerHTML);

    // let inner =cartContainer.innerHTML;
    // createLocalCartData(inner);
}


//creating a local storage to save cart item data

// let itemms = document.getElementsByClassName('cart__item__each');
//cart container is li or the hole red box on the cart item

function createLocalCartData(cartContainer) {
    let cartItems;
    if (localStorage.getItem('cartsItems') === null) {
        cartItems = [];
    } else {
        cartItems = JSON.parse(localStorage.getItem(cartItems));
    }
    cartItems.push(cartContainer);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}