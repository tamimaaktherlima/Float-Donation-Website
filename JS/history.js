// const historyContainer = document.getElementById('history-container');
// const cartTitle = document.getElementById('card-title').innerText;

// const donationHistory =
//     JSON.parse(localStorage.getItem('donationHistory')) || [];

// donationHistory.forEach(function (donation) {

//     const donationElement = document.createElement('div');

//     donationElement.innerHTML = `
//         <p>${donation.amount} tk is ${cartTitle} </p>
//         <p>Date: ${donation.date}</p>
//     `;

//     historyContainer.appendChild(donationElement);
// });

document.getElementById('donate-btn').addEventListener('click', function () {
    // Redirect to the history page


    // const donateBtn = document.getElementById('donate-btn');
    // const historyBtn = document.getElementById('history-btn');
    

    // window.location.href = '/index.html';
    
    document.getElementById('donate-btn').classList.add('bg-[#B4F461]')
    
    document.getElementById('history-btn').classList.remove('bg-[#B4F461]')
    
    window.location.href = '/index.html';

})

// document.getElementById('history-btn').addEventListener('click', function () {
//     // Redirect to the history page


//     const donateBtn = document.getElementById('donate-btn');
//     const historyBtn = document.getElementById('history-btn');

//     // window.location.href = '/history.html';
    
//     historyBtn.classList.add('bg-[#B4F461]')
    
//     donateBtn.classList.remove('bg-[#B4F461]')
    
//     window.location.href = '/history.html';
// })
