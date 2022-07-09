//Wrap code in an IIFE
(function(){

    const btns = document.querySelectorAll('[data-num]');
    const clearBtn = document.querySelector('.btn-clear');
    const equalBtn = document.querySelector('.btn-equal');
    const screen = document.querySelector('.screen');

    // for each btn with the dataset num
    btns.forEach(elem => elem.addEventListener('click',(e) =>  {
        screen.value += elem.dataset.num;
    } ))

  clearBtn.addEventListener('click',(e) => screen.value = '');
  equalBtn.addEventListener('click',(e) => screen.value = eval(screen.value));
})(); //end IIFE
