const reservations = {
    "bob": { claimed: false },
    "ted": { claimed: true }
}

const container = document.getElementById("container")

const checkReservation = function(){
    const response = document.createElement("div")
    const name = document.getElementById("reservation-name").value
    if(reservations[name.toLowerCase()] && !reservations[name.toLowerCase()].claimed){
        response.innerHTML = "Welcome " + name + "! Your table is this way."
        reservations[name.toLowerCase()].claimed = true
    }
    else if(reservations[name.toLowerCase()] && reservations[name.toLowerCase()].claimed){
        response.innerHTML = "Welcome " + name + ". The reservation under your name as already been claimed. Please wait while we resolve the situation."
    }
    else{
        response.innerHTML = "Welcome " + name + ", we do not have a reservation listed under that name. Let me make one for you now."
        reservations[name.toLowerCase()] = {claimed: false}
    }
    container.appendChild(response)
}

document.getElementById("button").onclick = checkReservation