const marker = document.querySelectorAll('[board-boxes]')
const boxes = document.getElementsByClassName('box')
const checkPlayer = document.querySelector('.currentPlayer')
const winnerModal = document.querySelector('.winner-modal')
const box0 = document.getElementById('box-0')
const box1 = document.getElementById('box-1')
const box2 = document.getElementById('box-2')
const box3 = document.getElementById('box-3')
const box4 = document.getElementById('box-4')
const box5 = document.getElementById('box-5')
const box6 = document.getElementById('box-6')
const box7 = document.getElementById('box-7')
const box8 = document.getElementById('box-8')

// create a model to display when winner is true
let modal = document.getElementById("showWinner");
// should we declare a game1 variable
//create a turn counter - if turn counter odd(player1) of turn counter even(player2)
let currentPlayer = 'X' 
//player who marks X
checkPlayer.innerText = 'the current player is ' + currentPlayer
let count = 0;

// const tie = () => {
//   for (const box of boxes) {
//     box.addEventListener('click', function onClick() {
//       console.log('box clicked')
//     })
//   }
// }

marker.forEach(cell => { //verify's one click 
  cell.addEventListener('click', markBox, {once:true})

  console.log()
})

function markBox(e) { 
  //adds player1 marker ('x') to board
  count ++
  console.log(count)
  console.log('clicked') 
  //logs the click
  const draw = e.target 
  //waits for event
  draw.innerText = currentPlayer 
  //creates event for x to print
  // checkWinnerFunction goes here once done
  if(currentPlayer == 'X') {
    currentPlayer = 'O' 
    checkPlayer.innerText = 'the current player is ' + currentPlayer

  } else {
    currentPlayer = 'X'
    checkPlayer.innerText = 'the current player is ' + currentPlayer
  } 

  //------- Checks for Draw ------- 
  if (count == 9) {
    checkPlayer.innerText = 'WE HAVE A DRAW!'
    winnerModal.innerText = 'DRAW!!'
    modal.style.display = 'block'
  }
}

const checkWinner = () => {
    
  let winner;
  if(box0.innerHTML == 'X' && box1.innerHTML == 'X' && box2.innerHTML == 'X') {
    winner = 'X WON!'
    checkPlayer.innerText = winner
    winnerModal.innerText = winner
  } else if(box0.innerHTML == 'O' && box1.innerHTML == 'O' && box2.innerHTML == 'O'){
    winner = 'O WON!'
    checkPlayer.innerText = winner
    winnerModal.innerText = winner
  } if(box3.innerHTML == 'X' && box4.innerHTML == 'X' && box5.innerHTML == 'X') {
    winner = 'X WON!'
    checkPlayer.innerText = winner
    winnerModal.innerText = winner
  } else if(box3.innerHTML == 'O' && box4.innerHTML == 'O' && box5.innerHTML == 'O'){
    winner = 'O WON!'
    checkPlayer.innerText = winner
    winnerModal.innerText = winner
  } if(box6.innerHTML == 'X' && box7.innerHTML == 'X' && box8.innerHTML == 'X') {
    winner = 'X WON!'
    checkPlayer.innerText = winner
    winnerModal.innerText = winner
  } else if(box6.innerHTML == 'O' && box7.innerHTML == 'O' && box8.innerHTML == 'O'){
    winner = 'O WON!'
    checkPlayer.innerText = winner
    winnerModal.innerText = winner
  } if(box0.innerHTML == 'X' && box3.innerHTML == 'X' && box6.innerHTML == 'X') { //
    winner = 'X WON!'
    checkPlayer.innerText = winner
    winnerModal.innerText = winner
  } else if(box0.innerHTML == 'O' && box3.innerHTML == 'O' && box6.innerHTML == 'O'){
    winner = 'O WON!'
    checkPlayer.innerText = winner
    winnerModal.innerText = winner
  } if(box1.innerHTML == 'X' && box4.innerHTML == 'X' && box7.innerHTML == 'X') { //
    winner = 'X WON!'
    checkPlayer.innerText = winner
    winnerModal.innerText = winner
  } else if(box1.innerHTML == 'O' && box4.innerHTML == 'O' && box7.innerHTML == 'O'){
    winner = 'O WON!'
    checkPlayer.innerText = winner
    winnerModal.innerText = winner
  } if(box2.innerHTML == 'X' && box5.innerHTML == 'X' && box8.innerHTML == 'X') { //---ROWS---
    winner = 'X WON!'
    checkPlayer.innerText = winner
    winnerModal.innerText = winner
  } else if(box2.innerHTML == 'O' && box5.innerHTML == 'O' && box8.innerHTML == 'O'){
    winner = 'O WON!'
    checkPlayer.innerText = winner
    winnerModal.innerText = winner
  } if(box0.innerHTML == 'X' && box3.innerHTML == 'X' && box6.innerHTML == 'X') { //---ROWS---
    winner = 'X WON!'
    checkPlayer.innerText = winner
    winnerModal.innerText = winner
  } else if(box0.innerHTML == 'O' && box3.innerHTML == 'O' && box6.innerHTML == 'O'){
    winner = 'O WON!'
    checkPlayer.innerText = winner
    winnerModal.innerText = winner
  } if(box0.innerHTML == 'X' && box4.innerHTML == 'X' && box8.innerHTML == 'X') { //---ROWS---
    winner = 'X WON!'
    checkPlayer.innerText = winner
    winnerModal.innerText = winner
  } else if(box0.innerHTML == 'O' && box4.innerHTML == 'O' && box8.innerHTML == 'O'){
    winner = 'O WON!'
    checkPlayer.innerText = winner
    winnerModal.innerText = winner
  } if(box2.innerHTML == 'X' && box4.innerHTML == 'X' && box6.innerHTML == 'X') { //---CROSS---
    winner = 'X WON!'
    checkPlayer.innerText = winner
    winnerModal.innerText = winner
  } else if(box2.innerHTML == 'O' && box4.innerHTML == 'O' && box6.innerHTML == 'O'){ //---CROSS---
    winner = 'O WON!'
    checkPlayer.innerText = winner  
    // winner modal quits spans across full page and only allows game to restart.
    winnerModal.innerText = winner 
  } if (winner == 'X WON!' || winner == 'O WON!') {
    modal.style.display = 'block'
  }

}

const clearAll = () =>{
  window.location.reload()
  console.log('press me')
}



checkWinner()
box0.addEventListener('click', checkWinner)
box1.addEventListener('click', checkWinner)
box2.addEventListener('click', checkWinner)
box3.addEventListener('click', checkWinner)
box4.addEventListener('click', checkWinner)
box5.addEventListener('click', checkWinner)
box6.addEventListener('click', checkWinner)
box7.addEventListener('click', checkWinner)
box8.addEventListener('click', checkWinner)

