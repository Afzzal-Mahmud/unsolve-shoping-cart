const btnAll = document.getElementsByClassName('btn__denger')

for(var i = 0; i<btnAll.length; i++){
    const btn = btnAll[i]

    btn.addEventListener('click',function(e){

        const productDiv = e.target.parentElement
        var title = productDiv.getElementsByClassName('')

    })
}

const removeCart = document.getElementsByClassName('remove__btn');

for(var i =0; i<removeCart.length; i++){
    var removeCartItem = removeCart[i];

    removeCartItem.addEventListener('click', function(e){
       const btnDel = e.target.parentElement;
       btnDel.remove()
    })
}