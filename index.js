const btnAll = document.getElementsByClassName('btn__add__to__cart');
const cartItemsEach = document.getElementById('cart__items')

//console.log(cartItemsEach)
for(var i = 0; i<btnAll.length; i++){
    const btn = btnAll[i]

    btn.addEventListener('click',function(e){
        //taking all information to the main product list throw out the 
        const productDiv = e.target.parentElement
        var title = productDiv.getElementsByClassName('product__title')[0].innerText
        var imgSrc = productDiv.getElementsByClassName('product__image')[0].src;
        var price = productDiv.getElementsByClassName('product__price')[0].innerText;

        //console.log(title,imgSrc,price)

        //passing details on cartDetailsPassed function

        cartDetailsPassed(title,imgSrc,price)
    })
}
//crating cartDetailsPassed function and passing argument on this

    function cartDetailsPassed(title,imgSrc,price){
        var cartContainer = document.createElement('li');
        cartItemsEach.append(cartContainer);
        cartContainer.innerHTML= 
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
cartContainer.getElementsByClassName('remove__btn')[0].addEventListener('click',btnRemove)   

    }



const removeCart = document.getElementsByClassName('remove__btn');

for(var i =0; i<removeCart.length; i++){
    var removeCartItem = removeCart[i];

    removeCartItem.addEventListener('click',btnRemove)
}

function btnRemove(e){
    removeCartItem = e.target.parentElement
    //console.log(removeCartItem)
    removeCartItem.remove();
}