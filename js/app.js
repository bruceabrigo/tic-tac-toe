const marker = document.querySelectorAll('[board-boxes]')
const boxes = document.getElementsByClassName('box')
const checkPlayer = document.querySelector('.currentPlayer')
const box0 = document.getElementById('box-0')
const box1 = document.getElementById('box-1')
const box2 = document.getElementById('box-2')
const box3 = document.getElementById('box-3')
const box4 = document.getElementById('box-4')
const box5 = document.getElementById('box-5')
const box6 = document.getElementById('box-6')
const box7 = document.getElementById('box-7')
const box8 = document.getElementById('box-8')
const reset = document.getElementById('reset')

// should we declare a game1 variable
//create a turn counter - if turn counter odd(player1) of turn counter even(player2)
console.log(boxes)
let currentPlayer = 'X' //player who marks X
let game = false
console.log(currentPlayer)
checkPlayer.innerText = 'the current player is ' + currentPlayer

marker.forEach(cell => { //verify's one click 
  cell.addEventListener('click', markBox, {once:true})
})

function markBox(e) { //adds player1 marker ('x') to board
  console.log('clicked') //logs the click
  const draw = e.target //waits for event
  draw.innerText = currentPlayer //creates event for x to print
  // checkWinnerFunction goes here once done
  if(currentPlayer == 'X') {
    currentPlayer = 'O' 
    checkPlayer.innerText = 'the current player is ' + currentPlayer
    console.log(currentPlayer)
  } else {
    currentPlayer = 'X'
    checkPlayer.innerText = 'the current player is ' + currentPlayer
    console.log(currentPlayer)
  }
  game = true
}
const checkWinner = () => {
  box0.addEventListener('click', checkWinner)
  box1.addEventListener('click', checkWinner)
  box2.addEventListener('click', checkWinner)
  box3.addEventListener('click', checkWinner)
  box4.addEventListener('click', checkWinner)
  box5.addEventListener('click', checkWinner)
  box6.addEventListener('click', checkWinner)
  box7.addEventListener('click', checkWinner)
  box8.addEventListener('click', checkWinner)

  let winner;
  if(box0.innerHTML == 'X' && box1.innerHTML == 'X' && box2.innerHTML == 'X') {
    checkPlayer.innerText = 'X WON!'
  } else if(box0.innerHTML == 'O' && box1.innerHTML == 'O' && box2.innerHTML == 'O'){
    checkPlayer.innerText = 'O WON!'
  } if(box3.innerHTML == 'X' && box4.innerHTML == 'X' && box5.innerHTML == 'X') {
    checkPlayer.innerText = 'X WON!'
  } else if(box3.innerHTML == 'O' && box4.innerHTML == 'O' && box5.innerHTML == 'O'){
    checkPlayer.innerText = 'O WON!'
  } if(box6.innerHTML == 'X' && box7.innerHTML == 'X' && box8.innerHTML == 'X') {
    checkPlayer.innerText = 'X WON!'
  } else if(box6.innerHTML == 'O' && box7.innerHTML == 'O' && box8.innerHTML == 'O'){
    checkPlayer.innerText = 'O WON!'
  } if(box0.innerHTML == 'X' && box3.innerHTML == 'X' && box6.innerHTML == 'X') { //
    checkPlayer.innerText = 'X WON!'
  } else if(box0.innerHTML == 'O' && box3.innerHTML == 'O' && box6.innerHTML == 'O'){
  } if(box1.innerHTML == 'X' && box4.innerHTML == 'X' && box7.innerHTML == 'X') { //
    checkPlayer.innerText = 'X WON!'
  } else if(box1.innerHTML == 'O' && box4.innerHTML == 'O' && box7.innerHTML == 'O'){
    checkPlayer.innerText = 'O WON!'
  } if(box2.innerHTML == 'X' && box5.innerHTML == 'X' && box8.innerHTML == 'X') { //---ROWS---
    checkPlayer.innerText = 'X WON!'
  } else if(box2.innerHTML == 'O' && box5.innerHTML == 'O' && box8.innerHTML == 'O'){
    checkPlayer.innerText = 'O WON!'
  } if(box0.innerHTML == 'X' && box3.innerHTML == 'X' && box6.innerHTML == 'X') { //---ROWS---
    checkPlayer.innerText = 'X WON!'
  } else if(box0.innerHTML == 'O' && box3.innerHTML == 'O' && box6.innerHTML == 'O'){
    checkPlayer.innerText = 'O WON!'
  } if(box0.innerHTML == 'X' && box4.innerHTML == 'X' && box8.innerHTML == 'X') { //---ROWS---
    winner = 'cross 1 true x'
    checkPlayer.innerText = 'X WON!'
  } else if(box0.innerHTML == 'O' && box4.innerHTML == 'O' && box8.innerHTML == 'O'){
    winner = 'cross 1 true o'
    checkPlayer.innerText = 'O WON!'
  } if(box2.innerHTML == 'X' && box4.innerHTML == 'X' && box6.innerHTML == 'X') { //---CROSS---
    winner = 'cross 2 true x'
    checkPlayer.innerText = 'X WON!'
  } else if(box2.innerHTML == 'O' && box4.innerHTML == 'O' && box6.innerHTML == 'O'){ //---CROSS---
   winner = 'cross 2 true o'
   checkPlayer.innerText = 'O WON!'
} 
//  } 
 console.log(winner)
}


checkWinner()
checkDraw()
console.log(game)