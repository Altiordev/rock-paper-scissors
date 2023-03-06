const stone = document.querySelector('.stone')
const clipper = document.querySelector('.clipper')
const paper = document.querySelector('.paper')
const playerMove = document.querySelector('.playerMove')
const computerMove = document.querySelector('.computerMove')
const scorePlayer = document.querySelector('.scorePlayer')
const scoreComputer = document.querySelector('.scoreComputer')
const whoWin = document.querySelector('.whoWin')
const gameHr = document.querySelector('.gameHr')
const who = document.querySelector('.who')
const scoreNum = document.querySelector('.scoreNum')
const scoreNum2 = document.querySelector('.scoreNum2')
const userName = prompt(`Ismingizni kiriting:`)
const stoneImg = `<img src="./images/rock.png" alt="rock">`
const clipperImg = `<img src="./images/clipper.png" alt="clipper">`
const paperImg = `<img src="./images/paper.png" alt="paper">`

if (userName == '') {
    who.textContent = 'Siz';
} else {
    who.textContent = userName
}
let playerScore = 0;
let computerScore = 0;

// function computerPlay() {
//     const moves = ['Tosh', 'Qaychi', 'Qog‘oz'];
//     const index = Math.floor(Math.random() * moves.length);
//     return moves[index];
// }
function computerPlay() {
    const moves = [stoneImg, clipperImg, paperImg];
    const index = Math.floor(Math.random() * moves.length);
    return moves[index];
}

// function checkResult() {
//     if (computerMove.textContent === playerMove.textContent) {
//         return whoWin.textContent = 'Durrang!', gameHr.classList.remove('green', 'red'), whoWin.classList.remove('green', 'red');
//     } else if (
//         (playerMove.textContent === "Tosh" && computerMove.textContent === "Qaychi") ||
//         (playerMove.textContent === "Qog‘oz" && computerMove.textContent === "Tosh") ||
//         (playerMove.textContent === "Qaychi" && computerMove.textContent === "Qog‘oz")) {
//         return whoWin.textContent = 'Siz yutdingiz!', scorePlayer.textContent = ++playerScore, gameHr.classList.add('green'), gameHr.classList.remove('red'), whoWin.classList.add('green'), whoWin.classList.remove('red')
//     } else {
//         return whoWin.textContent = 'Siz yutqazdingiz!', scoreComputer.textContent = ++computerScore, gameHr.classList.add('red'), gameHr.classList.remove('green'), whoWin.classList.add('red'), whoWin.classList.remove('green');
//     }
// }
function checkResult() {
    if (computerMove.innerHTML === playerMove.innerHTML) {
        return whoWin.textContent = 'Durrang!', gameHr.classList.remove('green', 'red'), whoWin.classList.remove('green', 'red'), scoreNum2.classList.remove('green', 'white'), scoreNum.classList.remove('green', 'white');
    } else if (
        (playerMove.innerHTML == stoneImg && computerMove.innerHTML == clipperImg) ||
        (playerMove.innerHTML == paperImg && computerMove.innerHTML == stoneImg) ||
        (playerMove.innerHTML == clipperImg && computerMove.innerHTML == paperImg)) {
        return whoWin.textContent = 'Siz yutdingiz!', scorePlayer.textContent = ++playerScore, gameHr.classList.add('green'), gameHr.classList.remove('red'), whoWin.classList.add('green'), whoWin.classList.remove('red'), scoreNum.classList.add('green', 'white'), scoreNum2.classList.remove('green', 'white');
    } else {
        return whoWin.textContent = 'Siz yutqazdingiz!', scoreComputer.textContent = ++computerScore, gameHr.classList.add('red'), gameHr.classList.remove('green'), whoWin.classList.add('red'), whoWin.classList.remove('green'), scoreNum2.classList.add('green', 'white'), scoreNum.classList.remove('green', 'white');
    }
}

// stone.addEventListener('click', () => {
//     playerMove.textContent = "Tosh"
//     computerMove.textContent = computerPlay()
//     checkResult()
// })
// clipper.addEventListener('click', () => {
//     playerMove.textContent = "Qaychi"
//     computerMove.textContent = computerPlay()
//     checkResult()
// })
// paper.addEventListener('click', () => {
//     playerMove.textContent = "Qog‘oz"
//     computerMove.textContent = computerPlay()
//     checkResult()
// })

stone.addEventListener('click', () => {
    playerMove.innerHTML = stoneImg
    computerMove.innerHTML = computerPlay()
    checkResult()
})
clipper.addEventListener('click', () => {
    playerMove.innerHTML = clipperImg
    computerMove.innerHTML = computerPlay()
    checkResult()
})
paper.addEventListener('click', () => {
    playerMove.innerHTML = paperImg
    computerMove.innerHTML = computerPlay()
    checkResult()
})