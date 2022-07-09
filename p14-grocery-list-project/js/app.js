//Get five elements and assign them to variables.

const form = document.getElementById("input-form");
const input = document.getElementById("input-value");
const feedback = document.querySelector(".feedback");
const listItems = document.querySelector(".list-items");
const clearBtn = document.querySelector(".clearBtn");

/**
 * Get grocery list from localStorage or initialise as an empty array
 */
const groceryList = (localStorage.getItem("groceryList") && JSON.parse(localStorage.getItem("groceryList"))) || [];
/**
 * if grocery list is not empty, so you got something in the localstorage
 */
groceryList.length > 0 && groceryList.forEach((item) => addItemToList(item, false));

/**
 *
 * @param {childNode} el children element to remove from the html
 */
function removeItemFromList(el) {
    // parent element
    const itemNode = el.target.parentNode.parentNode;

    // top position of the list item
    const itemPosition = Array.prototype.indexOf.call(listItems.childNodes, itemNode);

    // delete reference in groceryList array
    groceryList.splice(itemPosition - 1, 1);

    // delete element from html interface
    itemNode.remove();

    // remove list from localStorage
    localStorage.removeItem("groceryList");

    // add New modified array in localStorage
    localStorage.setItem("groceryList", JSON.stringify(groceryList));
}

/**
 *
 * @param {string} itemName String for the product to add in the list
 * @param {boolean} addToStorage Do we need to add it to the storage ( false for when you read first from the storage)
 * @returns
 */
function addItemToList(itemName, addToStorage = true) {
    // html content to add to the interface
    const template = `<div class="item my-3 d-flex justify-content-between p-2">
       <h5 class="item-title text-capitalize">${itemName}</h5>
       <span class="remove-icon text-danger"><i class="fas fa-trash" onClick="removeItemFromList(event)"></i></span>
      </div>`;

    // add element just before the end of the parent
    listItems.insertAdjacentHTML("beforeend", template);

    // do we need to save it to the storage ?
    if (addToStorage) {
        groceryList.push(itemName);
        // delete before write it again
        localStorage.removeItem("groceryList");

        // write the list so if we refresh the page, the list will be accessible
        localStorage.setItem("groceryList", JSON.stringify(groceryList));
    }
    // A function always return a value, so we define true here so we can chain with the success message
    return true;
}

(() => {
    /**

 * Deal with the form submission
 * We use preventDefault to prevent a page reload
 */
    form.addEventListener("submit", (e) => {
        // don't submit the form
        e.preventDefault();

        // if we have a value in the input field
        input.value && addItemToList(input.value) && showMessage("item Added To The List", "success");
        !input.value && showMessage("Can Not Add Empty Value", "error");
    });

    clearBtn.addEventListener("click", (e) => {
        // clear input
        input.value = "";
        // clear list
        listItems.innerHTML = "";
        // remove groceryList if exists on localhostrage
        localStorage.hasOwnProperty("groceryList") && localStorage.removeItem("groceryList");
    });
})();

function showMessage(message, type) {
    let errorType = "";
    switch (type) {
        case "error":
            errorType = "alert-danger";
            break;
        case "success":
            errorType = "alert-info";
            break;
        default:
            "";
            break;
    }

    feedback.textContent = message;
    feedback.classList.toggle(errorType);
    feedback.style.display = "block";

    setTimeout(() => {
        feedback.style.display = "none";
        feedback.classList.toggle(errorType);
    }, 1000);
}
