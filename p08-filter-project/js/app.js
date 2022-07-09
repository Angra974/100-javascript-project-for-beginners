// initialise and get elements
const filterAll = document.querySelectorAll(`[data-filter]`)
// selector for all element
const allDivs = document.querySelectorAll('div[data-item]');
const aSweets = document.querySelectorAll('a[data-item="sweets"]');
const divSweets = document.querySelectorAll('div[data-item="sweets"]');

// for each filter button
filterAll.forEach(elem => {

     elem.addEventListener('click',(el) => {
        // don't follow the links
        el.preventDefault();
        // for convenience
        let currentFilter = el.target.dataset.filter;
        if(currentFilter === 'all') // shaw all products
            allDivs.forEach(function(div) {div.style.display = 'block'});
        else {
            // for each product, show the product if the filter is selected, hide others
            allDivs.forEach(div =>  {
                div.style.display = (div.dataset.item === currentFilter) ? 'block' : 'none';
            })
        }
     })
})
