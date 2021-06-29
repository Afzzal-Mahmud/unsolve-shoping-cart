const btnAll = document.getElementsByClassName('btn__add__to__cart')
const 

for(var i = 0; i<btnAll.length; i++){
    const btn = btnAll[i]

    btn.addEventListener('click',function(e){
        //taking all information to the main product list throw out the btn__add__to__cart
        //class
        const productDiv = e.target.parentElement
        var title = productDiv.getElementsByClassName('product__title')[0].innerText
        var imgSrc = productDiv.getElementsByClassName('product__image')[0].src;
        var details = productDiv.getElementsByClassName('product__details')[0].innerText;

        console.log(title,imgSrc,details)

        //passing details on cartDetailsPassed function

        cartDetailsPassed(title,imgSrc,details)
    })
}
//crating cartDetailsPassed function and passing argument on this

    function cartDetailsPassed(title,imgSrc,details){
        var cartContainer = document.createElement('ul');

    }



const removeCart = document.getElementsByClassName('remove__btn');

for(var i =0; i<removeCart.length; i++){
    var removeCartItem = removeCart[i];

    removeCartItem.addEventListener('click', function(e){
       const btnDel = e.target.parentElement;
       btnDel.remove()
    })
}