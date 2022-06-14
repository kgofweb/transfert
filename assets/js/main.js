// DOM
const title = document.querySelector('h3')
const subTitle = document.querySelector('p')
const cardOne = document.querySelector('.card-one')
const cardTwo = document.querySelector('.card-two')
const cardThree = document.querySelector('.card-three')

const send = document.getElementById('send'),
      receive = document.getElementById('receive'),
      help = document.getElementById('help');


// Redirect to tranfert page
send.addEventListener('click', () => {
  
})

// Redirect to receive page
receive.addEventListener('click', () => {
  
})

const sr = ScrollReveal({
  distance: '70px',
  duration: 2000,
})

sr.reveal(title, { origin: 'top', delay: 300 })
sr.reveal(subTitle, { origin: 'bottom', delay: 400 })
sr.reveal(cardOne, { origin: 'left', delay: 600 })
sr.reveal(cardTwo, { origin: 'bottom', delay: 600 })
sr.reveal(cardThree, { origin: 'right', delay: 600 })