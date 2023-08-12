const cartButton = document.querySelector(".add-cart");
const cartButtonText = document.getElementById("cart-text");

function addToCart(){
  if(cartButtonText.innerHTML === 'Add to Cart'){
    cartButtonText.innerHTML = 'Product Added';
  } else{
    cartButtonText.innerHTML = 'Add to Cart';
  }
}

cartButton.addEventListener('click', addToCart);


