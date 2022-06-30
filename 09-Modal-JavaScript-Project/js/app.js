/**
 * Add an event on store-item to show the lightbox on click
 */
const storeItems = document.querySelectorAll('.store-item');
const closeBtn = document.querySelector('.lightbox-close');
const lightboxContainer =  document.querySelector('.lightbox-container');
const btnLeft= document.querySelector('.btnLeft');
const btnRight= document.querySelector('.btnRight');



// close button
closeBtn.addEventListener('click', (el) => lightboxContainer.style.display = 'none');

(function() {
let index = 0;
let currentPosition = -1;

storeItems.forEach(function(el) {
    el.dataset.position = index++;
    el.addEventListener('click', function(e) {
        lightboxContainer.style.display = 'block';
        document.querySelector('.lightbox-item').innerHTML = el.innerHTML;
        // add item position left and right
        currentPosition = Number(el.dataset.position);
    })
})

btnLeft.addEventListener('click', function(e) {
        currentPosition = currentPosition === 0 ? storeItems.length - 1 : Number(currentPosition) -1;
        document.querySelector('.lightbox-item').innerHTML = storeItems[currentPosition].innerHTML;
        // add item position left and right
})


btnRight.addEventListener('click', function(e) {
        currentPosition = currentPosition === storeItems.length -1 ? 0 : Number(currentPosition) + 1 ;
        document.querySelector('.lightbox-item').innerHTML = storeItems[currentPosition].innerHTML;
        // add item position left and right
})

})()
