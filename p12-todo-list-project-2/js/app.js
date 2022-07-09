//add an eventListener to the from
const form = document.querySelector('#itemForm'); // select form
const itemInput = document.querySelector('#itemInput'); // select input box from form
const itemList = document.querySelector('.item-list');
const feedback = document.querySelector('.feedback');
const clearButton = document.querySelector('#clear-list');
const clearInput = document.querySelector('#clear-input');
const submit = document.querySelector('button[type="submit"]');

(() => {

    // load item from localStorage
    const tasks = [];
    if(localStorage.hasOwnProperty('tasks')) {
        tasks.push(...JSON.parse(localStorage.getItem('tasks')))
        tasks.forEach((task,index) => itemList.innerHTML += addNewTaskItem(task,index))
    }
    // Clear input content when the user clicks on the button
    clearInput.addEventListener('click', () => {
        itemInput.value = '';
    })

    function addNewTaskItem(task,id) {

        return `<div class="item my-3" data-id="${id}">
      <h5 class="item-name text-capitalize">${task}</h5>
      <div class="item-icons">
       <a href="#" class="complete-item mx-2 item-icon"><i class="far fa-check-circle"></i></a>
       <a href="#" class="edit-item mx-2 item-icon"><i class="far fa-edit"></i></a>
       <a href="#" class="delete-item item-icon"><i class="far fa-times-circle"></i></a>
      </div>
     </div>`
    }


    function removeTask(target) {
        let root = target.parentElement.parentElement.parentElement;
        let id = root.dataset.id;
        tasks.splice(id-1,1);
        localStorage.setItem('tasks',JSON.stringify(tasks));
        root.remove();
    }

    // add Items to list
    submit.addEventListener('click', (e) => {
        e.preventDefault()
        // get the task content (value)
        if(itemInput.value !== '') {
              itemList.innerHTML += addNewTaskItem(itemInput.value,tasks.length)
              tasks.push(itemInput.value)
              localStorage.setItem('tasks',JSON.stringify(tasks));
              // set empty value for input ( clear its content)
              itemInput.value = '';
        } else {
            // 3. Hide the message 3 sec later
            setTimeout(() => {
            feedback.classList.toggle('showItem');
            feedback.classList.toggle('alert-danger');
            },3000)

                        // 1. Create the error message
            feedback.textContent = `Please Enter Valid Value`;

            // 2. Show the Message
            feedback.classList.toggle('alert-danger');
            feedback.classList.toggle('showItem');
        }
    })

    clearButton.addEventListener('click', (e) => {
        itemList.innerHTML = '';
		// delete the data in localStorage?
		localStorage.removeItem('tasks');
    })


    itemList.addEventListener('click', function(e) {

        // select the current element clicked
        let elementClassName = e.target.className;

        // select the current task item
        let currentTask = e.currentTarget.querySelector('.item-name');

        if(elementClassName.includes('fa-check-circle'))
        {
            // select the current task and add the class completed to i
            currentTask.classList.toggle('completed')
        } else {
            if (elementClassName.includes('fa-edit')) {
              itemInput.value = currentTask.textContent;
            }
            // edit or delete call this funciton, so we can call it once here
        removeTask(e.target);
        }

    })

})();
