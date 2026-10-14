function getTextById(id) {
    const text = document.getElementById(id).innerText;
    const textIntoNumber = parseFloat(text);
    return textIntoNumber;
}

function getValueById(id) {
    const value = document.getElementById(id).value;
    const valueIntoNumber = parseFloat(value);
    return valueIntoNumber
}

function afterClickedDonateBtn(donateAmountId, cardCurrentAmountId) {

    const currentBalance = getTextById('current-balance');

    const cardCurrentAmount = getTextById(cardCurrentAmountId);

    const donateAmount = getValueById(donateAmountId);

    // minus the donate amount from the current main balance
    if (donateAmount <= currentBalance) {
        // add money to the card1 current amount
        const newCardAmount = cardCurrentAmount + donateAmount;
        document.getElementById(cardCurrentAmountId).innerText = newCardAmount;

        const newCurrentBalance = currentBalance - donateAmount;
        document.getElementById('current-balance').innerText = newCurrentBalance;

        // show popup model
        document.getElementById('my_modal_5').showModal();

        // clear textarea
        document.getElementById(donateAmountId).value = '';

        // return

        // const cartTitle = document.getElementById('card-title').innerText

        // const div = document.createElement('div');
        // const h1 = document.createElement('h1');
        // const p = document.createElement('p');
        // h1.innerText = `Added ${donateAmount} tk to the ${cartTitle}`;
        // p.innerText = new Date().toLocaleString();
        // console.log(p)

        // Append 
        // div.appendChild(h1);
        // div.appendChild(p);

        // document.getElementById('history-container').append(div);

        // // popup
        // document.getElementById('my_modal_5').showModal();
    }
    else {
        alert('You don\'t have enough money to Donate!');
        return;
    }

    // document.getElementById('my_modal_5').showModal();

}