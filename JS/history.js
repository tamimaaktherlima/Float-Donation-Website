// console.log('Welcome')


// History Page work
// document.getElementById('donate-btn').addEventListener('click', function (event) {
//     event.preventDefault();
//     const current_balance = document.getElementById('current-balance').innerText
//     const currentBalance = parseFloat(current_balance);
//     const donate_amount = document.getElementById('input-donate-amount').value;
//     const donateAmount = parseFloat(donate_amount)
//     // console.log(typeof(donateAmount))
//     // console.log(typeof(currentBalance))
//     // console.log(currentBalance)

//     const cartTitle = document.getElementById('card-title').innerText

//     if (donateAmount <= currentBalance) {
//         // window.location.href = '/history.html';
//         // alert("Successful")

//         const div = document.createElement('div');
//         const h1 = document.createElement('h1');
//         const p = document.createElement('p');
//         h1.innerText = `Added ${donateAmount} tk to the ${cartTitle}`;
//         p.innerText = new Date().toLocaleString();
//         // console.log(p)

//         // Append 
//         div.appendChild(h1);
//         div.appendChild(p);

//         document.getElementById('show-history').appendChild(div)
//     }
//     else {
//         alert('You have not enough Money!');
//     }
// })

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
