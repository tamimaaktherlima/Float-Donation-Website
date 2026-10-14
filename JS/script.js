// console.log('Welcome')

// Card 1
document.getElementById('donateNow1-btn').addEventListener('click', function () {
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

// Card 2
document.getElementById('donateNow2-btn').addEventListener('click', function () {
    // const current_balance = document.getElementById('current-balance').innerText
    const currentBalance = getTextById('current-balance');

    // const card1_Current_Amount = document.getElementById('card1-currentAmount').innerText
    // const card1CurrentAmount = parseFloat(card1_Current_Amount);
    const card2CurrentAmount = getTextById('card2-currentAmount');

    // const donate_amount = document.getElementById('input-donate-amount').value;
    // const donateAmount = parseFloat(donate_amount);
    const donateAmount = getValueById('input-donate-amount2');

    // minus the donate amount from the current main balance
    if (donateAmount <= currentBalance) {
        // add money to the card1 current amount
        const newCard2Amount = card2CurrentAmount + donateAmount;
        document.getElementById('card2-currentAmount').innerText = newCard2Amount;

        const newCurrentBalance = currentBalance - donateAmount;
        document.getElementById('current-balance').innerText = newCurrentBalance

        // donate_amount = '';

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

// Card 3
// document.getElementById('donateNow3-btn').addEventListener('click', function () {
//     // const current_balance = document.getElementById('current-balance').innerText
//     const currentBalance = getTextById('current-balance');

//     // const card1_Current_Amount = document.getElementById('card1-currentAmount').innerText
//     // const card1CurrentAmount = parseFloat(card1_Current_Amount);
//     const card1CurrentAmount = getTextById('card1-currentAmount');

//     // const donate_amount = document.getElementById('input-donate-amount').value;
//     // const donateAmount = parseFloat(donate_amount);
//     const donateAmount = getValueById('input-donate-amount');

//     // minus the donate amount from the current main balance
//     if (donateAmount <= currentBalance) {
//         // add money to the card1 current amount
//         const newCard1Amount = card1CurrentAmount + donateAmount;
//         document.getElementById('card1-currentAmount').innerText = newCard1Amount;

//         const newCurrentBalance = currentBalance - donateAmount;
//         document.getElementById('current-balance').innerText = newCurrentBalance

//         donate_amount = '';

//         // console.log(typeof(donateAmount))
//         // console.log(typeof(currentBalance))
//         // console.log(currentBalance)

//         const cartTitle = document.getElementById('card-title').innerText

//         const div = document.createElement('div');
//         const h1 = document.createElement('h1');
//         const p = document.createElement('p');
//         h1.innerText = `Added ${donateAmount} tk to the ${cartTitle}`;
//         p.innerText = new Date().toLocaleString();
//         // console.log(p)

//         // Append 
//         div.appendChild(h1);
//         div.appendChild(p);

//         document.getElementById('history-container').append(div);

//         // popup
//         document.getElementById('my_modal_5').showModal();
//     }
//     else {
//         alert('You don\'t have enough money to Donate!');
//         return;
//     }

//     // document.getElementById('my_modal_5').showModal();
// })

// Card 3
document.getElementById('donateNow3-btn').addEventListener('click',function(){
    console.log('clicked')
    afterClickedDonateBtn('input-donate-amount3', 'card3-currentAmount');
})

document.getElementById('blog-btn').addEventListener('click', function () {
    window.location.href = '/fqa.html'
})

document.getElementById('history-btn').addEventListener('click', function () {
    // Redirect to the history page


    // const donateBtn = document.getElementById('donate-btn');
    // const historyBtn = document.getElementById('history-btn');

    // window.location.href = '/history.html';

    document.getElementById('history-btn').classList.add('bg-[#B4F461]')

    document.getElementById('donate-btn').classList.remove('bg-[#B4F461]')

    window.location.href = '/history.html';
})
