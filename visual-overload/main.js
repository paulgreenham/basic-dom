const randomColors = {
    0: "1abc9c",
    1: "2ecc71",
    2: "3498db",
    3: "9b59b6",
    4: "34495e",
    5: "f1c40f",
    6: "e67e22",
    7: "e74c3c",
    8: "ecf0f1",
    9: "95a5a6",
}

const getRandom = function(){
    let count = new Date
    let milSecs = count.getMilliseconds().toString()
    let randomNum = parseInt(milSecs[milSecs.length - 1])
    console.log(randomNum)
    return randomNum
}

const changeColor = function(){    
    this.style.backgroundColor = "#" + randomColors[getRandom()]
}

for(let i = 0; i < 6; i++){
    let box = document.createElement("div")
    box.setAttribute("class", "box")
    box.setAttribute("id", "box" + (i + 1))
    box.style.backgroundColor = "#" + randomColors[setTimeout(getRandom(), 1)]
    document.getElementById("container").appendChild(box)
}

document.getElementById("box1").onmouseenter = changeColor
document.getElementById("box2").onmouseenter = changeColor
document.getElementById("box3").onmouseenter = changeColor
document.getElementById("box4").onmouseenter = changeColor
document.getElementById("box5").onmouseenter = changeColor
document.getElementById("box6").onmouseenter = changeColor

