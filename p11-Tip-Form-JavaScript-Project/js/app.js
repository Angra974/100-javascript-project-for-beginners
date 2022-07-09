// get element
const bill = document.getElementById('input-bill');
const users = document.getElementById('input-users');
const service = document.getElementById('input-service');
const submit = document.querySelector('input[type="submit"]');
const results = document.querySelector('.results');
const htmlTipAmount = document.getElementById('tip-amount');
const htmlTotalAmount = document.getElementById('total-amount');
const htmlPersonAmount = document.getElementById('person-amount');

(() => {


    // add values to service

    const service_values = {
        '20%': 'Good',
        "10%": 'Normal',
        "2%": 'Bad'
    }
    for(index in service_values) {
        service.options[service.options.length] = new Option(`${service_values[index]} ${index}`, index)
    }

    submit.addEventListener('click',(e) => {
        e.preventDefault();

        // calculate the bill size
        const percentTip = service.value === '20%' ? 0.2 :
                           service.value === '10%' ? 0.1 :
                           0;
        const totalBill = Number(bill.value);
        const tipAmout = (totalBill * percentTip).toFixed(2);
        const eachPerson = (totalBill + tipAmout) / users.value;


        htmlPersonAmount.textContent = eachPerson;
        htmlTipAmount.textContent = tipAmout;
        htmlTotalAmount.textContent = totalBill

        // show results:
        results.style.display  = 'block';
        submit.disabled = true;
        // hide display after 3 sec
        setTimeout(() => {
            // reinitialise the values
            bill.value = 0;
            users.value = 1;
            submit.disabled = false;
            results.style.display = 'none';
        },3000);


     })

})();
