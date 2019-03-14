const block = document.getElementById("block")
const upArrow = document.getElementById("up")
const leftArrow = document.getElementById("left")
const rightArrow = document.getElementById("right")
const downArrow = document.getElementById("down")

const moveUp = function(){
    let position = parseInt(block.style.top) || 0
    if(position >= 20){
        block.style.top = parseInt(position - 15) + "px"
    }
}

const moveLeft = function(){
    let position = parseInt(block.style.left) || 0
    if(position >= 20){
        block.style.left = parseInt(position - 15) + "px"
    }
}

const moveRight = function(){
    let position = parseInt(block.style.left) || 0
    if(position <= 390){
        block.style.left = parseInt(position + 15) + "px"
    }
}

const moveDown = function(){
    let position = parseInt(block.style.top) || 0
    if(position <= 380){
        block.style.top = parseInt(position + 15) + "px"
    }
}

upArrow.onclick = moveUp
leftArrow.onclick = moveLeft
rightArrow.onclick = moveRight
downArrow.onclick = moveDown