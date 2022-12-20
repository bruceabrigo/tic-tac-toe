const marker = document.querySelectorAll('[board-boxes]')
const boxes = document.getElementsByClassName('box')


console.log(boxes)
let player1 = 'X'

marker.forEach(cell => { //verify's one click 
  cell.addEventListener('click', markBox, {once:true})
})

function markBox(e) { //adds player1 marker ('x') to board
  console.log('clicked')
  const boxes = e.target
  boxes.innerText = player1
}
