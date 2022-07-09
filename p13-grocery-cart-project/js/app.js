    // initialise variable
    const cart = document.getElementById('cart');
    const cartTotal = document.getElementById('cart-total');
    const itemCount = document.getElementById('item-count');
    const itemTotal = document.querySelector('.item-total');
    const plurial = document.querySelector('#plurial');
    const clearCart = document.getElementById('clear-cart');

(() => {

    // show the cart widget
    const cartInfo = document.getElementById('cart-info');
    // show/hide cart info
    cartInfo.addEventListener('click', () => {
             cart.classList.toggle('show-cart');
    } , true);



    // clear cart : reset cart content
   clearCart.addEventListener('click', () => {
        clearCheckOut();
    })


    // select all icon store item add
    const itemsSelection = document.querySelectorAll('.store-item-icon');
    // add event to all store icons add add it to selection
    itemsSelection.forEach((item) => { item.addEventListener('click', (elem) => {

        // select image of the itemsSelection
        const itemElement = elem.currentTarget.parentElement.nextElementSibling;
        const itemName = itemElement.querySelector('#store-item-name').textContent;
        const itemImg = elem.currentTarget.previousElementSibling;
        const itemPrice = itemElement.querySelector('#store-item-price').textContent;

        // we insert the element first, so we can use an event listener on first child
        cart.insertAdjacentHTML("afterbegin", addItemToCart(itemImg, itemName, itemPrice, cart.childElementCount));
        // select item name
    })}); /* end itemsSelection */

        // delete item from cart

})();

/*
* @param {string | number}  price of the selected item
*
*/
function updateCartValue(price) {
        // update the tatal value of the cart in the widget
        cartTotal.textContent = Number(cartTotal.textContent) + price;
        itemTotal.textContent = cartTotal.textContent;

        let cartVal = Number(itemCount.textContent)
        Math.sign(price) === 1 ? cartVal++ : cartVal--;
         itemCount.textContent = cartVal;

        plurial.style.display = cartVal > 1 ? 'inline-flex' : 'none';
}

function removeItem(dataId,price) {
    //   element.remove();
    cart.querySelector(`div[data-id="${dataId}"]`).remove()

    updateCartValue(Number(price) * -1)
}

function clearCheckOut() {

    // delete all items
    cart.querySelectorAll('.cart-item').forEach(function(item) { item.remove()});

    // initialise variable
    itemTotal.textContent = 0;
    itemCount.textContent = 0;
    plurial.style.display = 'none';
    cartTotal.textContent = 0;
}
/**
 *
 * @param {string} itemImg url to the image of the item
 * @param {string} itemName name of the item
 * @param {float} itemPrice price of the item
 * @returns
 */
function addItemToCart(itemImg, itemName, itemPrice, idNumber) {

        updateCartValue(Number(itemPrice));

    return `<div class="cart-item d-flex justify-content-between text-capitalize my-3" data-id="${idNumber}">
         <img src="${itemImg.src.replace('/img/','/img-cart/')}" class="img-fluid rounded-circle" id="item-img"  alt="${itemName}"></img>

            <div class="item-text">

              <p id="cart-item-title" class="font-weight-bold mb-0">${itemName}</p>
              <span>$</span>
              <span id="cart-item-price" class="cart-item-price" class="mb-0">${itemPrice}</span>
            </div>
            <a href="#" id='cart-item-remove' class="cart-item-remove" onClick="removeItem('${idNumber}','${itemPrice}')">
              <i class="fas fa-trash"></i>
            </a>
          </div>`
}
