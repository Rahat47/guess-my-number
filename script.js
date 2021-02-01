'use strict'
const messageBox = document.querySelector('.message')
let secretNumber = generate()
const checkForm = document.querySelector('.left')
const again = document.querySelector('.again')

// state number of the app
let score = 20
let highScore = 0

checkForm.addEventListener('submit', e => {
    e.preventDefault()

    // *storing the guess number
    const guess = Number(document.querySelector('.guess').value)

    // *When there is no guess
    if (!guess) {
        setMessage('⛔ No Number!!')
    }
    //* When guess is correct
    else if (guess === secretNumber) {
        setMessage('🎉 Correct Number!')

        //? Change css Style of body
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = secretNumber
        //? add the high score
        if (score > highScore) {
            highScore = score
            document.querySelector('.highscore').textContent = highScore
        }
    }
    //* when guess is wrong
    else if (guess !== secretNumber) {
        if (score > 1) {
            setMessage(guess > secretNumber ? '📈 Too High!!!' : '📉 Too Low!!!')
            checkForm.guess.value = ''
            checkForm.guess.focus()
            score--
            document.querySelector('.score').textContent = score
        }
        else {
            setMessage('💥💣 You Lost the game loser!!')
            document.querySelector('.score').textContent = 0
            document.querySelector('body').style.backgroundColor = 'crimson'
        }
    }
})

again.addEventListener('click', () => {
    score = 20
    secretNumber = generate()
    setMessage('Start guessing...')
    document.querySelector('.score').textContent = score
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = ''
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
})

// displays message to the dom
function setMessage(message) {
    messageBox.textContent = message
}

// generate a random number
function generate() {
    return Math.floor(Math.random() * 20)
}