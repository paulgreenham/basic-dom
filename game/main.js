// console.log(document)

const playingField = document.getElementById("playing-field")
// console.log(playingField.innerHTML)

// const down = document.getElementById("down")
// down.innerHTML = "Down"
// console.log(down.innerHTML)

// block.style.backgroundColor = "yellow"

// const block = document.getElementById("block")

// const moveRight = function(element){
//     let position = parseInt(element.style.left) || 0
//     element.style.left = parseInt(position + 15) + "px"
// }

// const header = document.createElement("h1")
// header.innerHTML = "The Best Game Ever"
// header.style.color = "#c0392b"
// header.style.fontFamily = "Helvetica"
// document.body.appendChild(header)

// const subHeader = document.createElement("h2")
// subHeader.innerHTML = "A simple game to test DOM"
// subHeader.setAttribute("class", "sub-header")
// document.body.appendChild(subHeader)

// const clickColor = function(){
//     playingField.style.backgroundColor = "#8e44ad"
// }

// playingField.onclick = clickColor

// const mouseEnter = function(){
//     playingField.innerHTML = "entered"
//     playingField.style.left = "60px"
// }

// playingField.onmouseenter = mouseEnter


const block = document.getElementById("block")
const upArrow = document.getElementById("up")
const leftArrow = document.getElementById("left")
const rightArrow = document.getElementById("right")
const downArrow = document.getElementById("down")

const moveUp = function(){
    let position = parseInt(block.style.top) || 0
    block.style.top = parseInt(position - 15) + "px"
}

const moveLeft = function(){
    let position = parseInt(block.style.left) || 0
    block.style.left = parseInt(position - 15) + "px"
}

const moveRight = function(){
    let position = parseInt(block.style.left) || 0
    block.style.left = parseInt(position + 15) + "px"
}

const moveDown = function(){
    let position = parseInt(block.style.top) || 0
    block.style.top = parseInt(position + 15) + "px"
}

upArrow.onclick = moveUp
leftArrow.onclick = moveLeft
rightArrow.onclick = moveRight
downArrow.onclick = moveDown