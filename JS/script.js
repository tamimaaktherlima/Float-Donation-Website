// console.log('Welcome')

document.getElementById('donateNow-btn').addEventListener('click', function () {
    // const current_balance = document.getElementById('current-balance').innerText
    const currentBalance = getTextById('current-balance');

    // const card1_Current_Amount = document.getElementById('card1-currentAmount').innerText
    // const card1CurrentAmount = parseFloat(card1_Current_Amount);
    const card1CurrentAmount = getTextById('card1-currentAmount');

    // const donate_amount = document.getElementById('input-donate-amount').value;
    // const donateAmount = parseFloat(donate_amount);
    const donateAmount = getValueById('input-donate-amount');

    // minus the donate amount from the current main balance
    if (donateAmount <= currentBalance) {
        // add money to the card1 current amount
        const newCard1Amount = card1CurrentAmount + donateAmount;
        document.getElementById('card1-currentAmount').innerText = newCard1Amount;

        const newCurrentBalance = currentBalance - donateAmount;
        document.getElementById('current-balance').innerText = newCurrentBalance

        donate_amount = '';

        // console.log(typeof(donateAmount))
        // console.log(typeof(currentBalance))
        // console.log(currentBalance)

        const cartTitle = document.getElementById('card-title').innerText

        const div = document.createElement('div');
        const h1 = document.createElement('h1');
        const p = document.createElement('p');
        h1.innerText = `Added ${donateAmount} tk to the ${cartTitle}`;
        p.innerText = new Date().toLocaleString();
        // console.log(p)

        // Append 
        div.appendChild(h1);
        div.appendChild(p);

        document.getElementById('history-container').append(div);

        // popup
        document.getElementById('my_modal_5').showModal();
    }
    else {
        alert('You don\'t have enough money to Donate!');
        return;
    }

    // document.getElementById('my_modal_5').showModal();
})


