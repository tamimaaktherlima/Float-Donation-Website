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


        // For showing the details in history 
        const cartTitle = document.getElementById('card-title').innerText;
        // get the previous history
        const donationHistory = JSON.parse(localStorage.getItem('donationHistory')) || [];

        // Create new donation
        const newDonation = {
            amount: donateAmount,
            date: new Date().toLocaleString()
        };

        // add new donation
        donationHistory.push(newDonation)
        // saved update history
        localStorage.setItem = (
            'donationHistory',
            JSON.stringify(donationHistory)
        )


        const historyContainer = document.getElementById('history-container');

        donationHistory.forEach(function (newDonation) {

            const donationElement = document.createElement('div');

            donationElement.innerHTML = `
            <p>${newDonation.amount} tk is ${cartTitle} </p>
            <p>Date: ${newDonation.date}</p>
            `;

            historyContainer.appendChild(donationElement);
            window.location.href = './history.html';
        });

        // window.location.href = './history.html';
    }
    else {
        alert('You don\'t have enough money to Donate!');
        return;
    }

}