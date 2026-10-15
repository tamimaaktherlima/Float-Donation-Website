// console.log('Welcome')

// Card 1
document.getElementById('donateNow1-btn').addEventListener('click', function () {
    afterClickedDonateBtn('input-donate-amount1', 'card1-currentAmount', 'card1-title');
})

// Card 2
document.getElementById('donateNow2-btn').addEventListener('click', function () {
    afterClickedDonateBtn('input-donate-amount2', 'card2-currentAmount', 'card2-title');
})

// Card 3
document.getElementById('donateNow3-btn').addEventListener('click', function () {
    // console.log('clicked')
    afterClickedDonateBtn('input-donate-amount3', 'card3-currentAmount', 'card3-title');
})

document.getElementById('blog-btn').addEventListener('click', function () {
    window.location.href = './fqa.html'
})