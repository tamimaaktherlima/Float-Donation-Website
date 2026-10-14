const donateBtn = document.getElementById('donate-btn');
const historyBtn = document.getElementById('history-btn');

// When Donate button is clicked
donateBtn.addEventListener('click', function () {
    localStorage.setItem('activeButton', 'donate');
    window.location.href = './index.html';
});

// When History button is clicked
historyBtn.addEventListener('click', function () {
    localStorage.setItem('activeButton', 'history');
    window.location.href = './history.html';
});


// Check which button should be active
const activeButton = localStorage.getItem('activeButton');

if (activeButton === 'donate') {
    donateBtn.classList.add('bg-[#B4F461]');
    historyBtn.classList.remove('bg-[#B4F461]');
}

if (activeButton === 'history') {
    historyBtn.classList.add('bg-[#B4F461]');
    donateBtn.classList.remove('bg-[#B4F461]');
}