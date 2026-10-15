// console.log('Welcome')

// Card 1
document.getElementById('donateNow1-btn').addEventListener('click', function () {
    afterClickedDonateBtn('input-donate-amount1', 'card1-currentAmount');
})

// Card 2
document.getElementById('donateNow2-btn').addEventListener('click', function () {
    afterClickedDonateBtn('input-donate-amount2', 'card2-currentAmount');
})

// Card 3
document.getElementById('donateNow3-btn').addEventListener('click', function () {
    // console.log('clicked')
    afterClickedDonateBtn('input-donate-amount3', 'card3-currentAmount');
})

document.getElementById('blog-btn').addEventListener('click', function () {
    window.location.href = './fqa.html'
})