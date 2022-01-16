let cart = document.querySelector('#cart');
let cross = document.querySelectorAll('#cross');
let crossContainer = document.querySelector('#crossContainer');
let cartItemText = document.querySelector('.cartItemText');
let shoes = document.querySelector('#shoes');
let buttonShop = document.querySelectorAll('.shop');
let totalCart = 0;
let cartArray = [];

cart.addEventListener('click', () => {
    cartBlock.classList.toggle('activeCart');
})
/* cross.addEventListener('click', (e) => {
    console.log(e.toElement.parentElement)
    let parent = e.toElement.parentElement; 
    parent.style.display = 'none';
}) */
//Function to remove item from cart
cross.forEach( item => {
  item.addEventListener('click', (event) => {
      /* console.log("Click"); */
      event.target.parentElement.parentElement.remove();
  })
})
shoes.addEventListener('click', () => {
    for(let i = 0; i < cartArray.length; i++){

        
       /*  if(cartArray[i] !== 'shoes'){
            cartArray.push('shoes');
            console.log(cartArray);
    }else{
        console.log(cartArray);
    } */
}   

})
document.addEventListener('click', (e) => {
    /* console.log(e); */
})
let con = document.querySelector('.container');
/* console.log(con.hasChildNodes()) */


//close cart block
crossContainer.addEventListener('click', () => {
    crossContainer.parentElement.style.display = 'none';
    document.querySelector('.cartBlock').style.display = 'none';
})
buttonShop.forEach( item => {
    item.addEventListener('click', (e) => {
        console.log(e.target.getAttribute('data-price'));

        updateCart(e);
    })
})
updateCart = (event) => {
    let target = event.target;
    
    switch(parseInt(target.getAttribute('data-id'))){
        case 1:
            cartArray[0] = 1;
            break;
        case 2:
            cartArray[1] = 1;
            break;
        case 3:
            cartArray[2] = 1;
            break;
        case 4:
            cartArray[3] = 1;
            break;
        case 5:
            cartArray[4] = 1;
            break;  
        case 6:
            cartArray[5] = 1;
                 
          
}
    let cartArrayNew = cartArray.filter( (item) => {
        return item !== 'undefined';
    })
    totalCart++;

    console.log( cartArrayNew);

    document.querySelector('#cartPrice').innerHTML = cartArrayNew.length;
}
