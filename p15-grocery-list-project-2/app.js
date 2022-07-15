//Selection items from the DOM
//Add items container
const addItemsAction = document.querySelector('.addItems-action');
const input = document.querySelector('.addItems-input');
const submit = document.querySelector('.addItems-submit');
const form = document.querySelector('form');

//Display items container
const list = document.querySelector('.grocery-list');
const displayItemsAction = document.querySelector('.displayItems-action');
const clear = document.querySelector('.displayItems-clear');

const msgError = "Please Add Grocery Item";
const msgSuccess = "Added to the list"
const MSG_DISPLAY_TIME = 3000;

//localStorage.removeItem('groceryList');

const groceryList = localStorage.hasOwnProperty('groceryList') ?
  JSON.parse(localStorage.getItem('groceryList')) : [];

/**
 * Take an item name and add the needed hml content to create an list item
 * before be injected into the grocery list item. We use afterbegin parameter
 * so we can see the item when added alwaays on top of the list
 *
 * @param {string} item name of the item to be added to the list
 * @param {boolean} pushToList Add item to the groceryList, set to false when loading the page
 *
 */
function addItemToList(item, pushToList = true) {

  let listItemHtml = `<div class="grocery-item">
                <h4 class="grocery-item__title">${item}</h4>
                <a href="#" class="grocery-item__link">
                    <i class="far fa-trash-alt"></i>
                </a>
    </div>`;

  // add item to grocery list if it's not from localStorage
  pushToList && groceryList.unshift(item);

  // remote groceryList to localStorage;
  localStorage.removeItem('groceryList');

  // add new array to localStorage
  localStorage.setItem('groceryList', JSON.stringify(groceryList));

  // insert list html element to grocery list
  pushToList && list.insertAdjacentHTML('afterbegin', listItemHtml);

  !pushToList && list.insertAdjacentHTML('beforeend', listItemHtml);
}


function loadListItems() {
  groceryList && groceryList.forEach(item => addItemToList(item, false));
}


/**
 *
 * @param {childNode} el children element to remove from the html
 */
function removeItemFromList(el) {
  // parent element
  // if not icon trash eelement
  if (el.target.dataset.icon !== "trash-alt") return false;

  const itemNode = el.target.parentNode.parentNode;
  // top position of the list item
  const itemPosition = Array.prototype.indexOf.call(list.childNodes, itemNode);

  // delete reference in groceryList array
  let position = itemPosition - 1;

  groceryList.splice(position, 1);

  // delete element from html interface
  itemNode.remove();

  // remove list from localStorage
  localStorage.removeItem("groceryList");

  // add New modified array in localStorage
  localStorage.setItem("groceryList", JSON.stringify(groceryList));
  el.stopPropagation();

}

function clearList() {
   while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    groceryList.length = 0;

    localStorage.hasOwnProperty('groceryList') && localStorage.removeItem('groceryList');


}

(() => {

  loadListItems();

  //Listen to list to delete individual items
  list.addEventListener('click', removeItemFromList, true);

  // ckear akk utels?
  clear.addEventListener('click',clearList)
  /**
   *
   * @param {string} message Display a message to the user
   * @param {string} className class name associate to the type of message ( error, info, alert etc)
   */
  function displayMessage(message, className) {
    addItemsAction.textContent = message;
    addItemsAction.classList.toggle(className);

    // message will be displayed 3 sec
    setTimeout(() => {
      addItemsAction.textContent = '';
      addItemsAction.classList.toggle(className);
    }, MSG_DISPLAY_TIME);
  }

  /**
   * Do something when we click on the submit button. This
   * if no item, show an error message
   * if item, add it to the list
   */
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!input.value) {
      displayMessage(msgError, 'alert');
    } else {
      displayMessage(`${input.value} ${msgSuccess}`, 'success');
      addItemToList(input.value);
    }
  })
})();
