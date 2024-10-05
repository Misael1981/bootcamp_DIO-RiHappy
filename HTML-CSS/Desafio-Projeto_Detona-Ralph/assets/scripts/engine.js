const state = {
    view: {
        squares: document.querySelectorAll('.square'),
        enemy: document.querySelector('.enemy'),
        timeLeft: document.querySelector('#time-left'),
        score: document.querySelector('#score'),
    },
    value: { 
        gameVelocity: 1000,
        hitPosition: 0,
        result: 0,
        corretTime: 60
    },
    actions: {
        countDownTimerId: setInterval(countDown, 500),
        timerId: null
    }
}

function playSound () {
    let audio = new Audio('./assets/sound/hit.m4a')
    audio.volume = 0.2
    audio.play()
}

function countDown () {
    state.value.corretTime--
    state.view.timeLeft.textContent = state.value.corretTime

    if(state.value.corretTime <= 0) {
        clearInterval(state.actions.countDownTimerId)
        clearInterval(state.actions.timerId)
        alert(`Game Over! O seu resultado foi ${state.value.result}`)
    }
}

function randomSquare () {
    state.view.squares.forEach((square) => {
        square.classList.remove('enemy')
    })

    let randomNumber = Math.floor(Math.random() * 9)
    let randomSquare = state.view.squares[randomNumber]
    randomSquare.classList.add('enemy')
    state.value.hitPosition = randomSquare.id 
}

function moveEnemy () {
    state.value.timerId = setInterval(randomSquare, state.value.gameVelocity)
}

function addListnerHitBox() {
    state.view.squares.forEach((square) => {
        square.addEventListener('mousedown', () => {
            if (square.id === state.value.hitPosition) {
                state.value.result++
                state.view.score.textContent = state.value.result
                state.value.hitPosition = null
                playSound()
            }
        })
    })
}

function initialize() {
    moveEnemy()
    addListnerHitBox()
}

initialize()