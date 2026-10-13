// console.log('Welcome')

document.getElementById('donate-btn').addEventListener('click', function () {
    const current_balance = document.getElementById('current-balance').innerText
    const currentBalance = parseFloat(current_balance);

    const card1_Current_Amount = document.getElementById('card1-currentAmount').innerText
    const card1CurrentAmount = parseFloat(card1_Current_Amount);

    const donate_amount = document.getElementById('input-donate-amount').value;
    const donateAmount = parseFloat(donate_amount);

    // minus the donate amount from the current main balance
    if (donateAmount <= currentBalance) {
        // add money to the card1 current amount
        const newCard1Amount = card1CurrentAmount + donateAmount;
        document.getElementById('card1-currentAmount').innerText = newCard1Amount;

        const newCurrentBalance = currentBalance - donateAmount;
        document.getElementById('current-balance').innerText = newCurrentBalance

        // donate_amount.value = '';
    }
    else {
        alert('You don\'t have enough money to Donate!');
    }
    
})


// History Page work
document.getElementById('donate-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const current_balance = document.getElementById('current-balance').innerText
    const currentBalance = parseFloat(current_balance);
    const donate_amount = document.getElementById('input-donate-amount').value;
    const donateAmount = parseFloat(donate_amount)
    // console.log(typeof(donateAmount))
    // console.log(typeof(currentBalance))
    // console.log(currentBalance)

    const cartTitle = document.getElementById('card-title').innerText

    // if(donateAmount <= currentBalance){
    //     window.location.href = '/history.html';
    //     // alert("Successful")

    //     const p = document.createElement('p');
    //     p.innerText = `Added ${donateAmount} tk to the ${cartTitle}`;
    //     console.log(p)

    //     document.getElementById('history-container').appendChild(p);
    // }
    // else{
    //     alert('You have not enough Money!');
    // }
})