const container = document.getElementById("container")

const removeCommas = function(str){
    let newStr = ""
    for (let i = 0; i < str.length; i++){
        if(str[i] != ","){
            newStr += str[i]
        }
    }
    return newStr
}

const validate = function(){
    const name = document.getElementById("name-input").value
    const salary = document.getElementById("salary-input").value
    const birthday = document.getElementById("birthday-input").value
    const phone = document.getElementById("phone-input").value
    if(validateName(name) != undefined){
        const nameError = document.createElement("div")
        nameError.setAttribute("class", "error-message")
        nameError.innerHTML = validateName(name)
        container.appendChild(nameError)
    }
    if(validateSalary(salary) != undefined){
        const nameError = document.createElement("div")
        nameError.setAttribute("class", "error-message")
        nameError.innerHTML = validateSalary(salary)
        container.appendChild(nameError)
    }
    if(validateBirthday(birthday) != undefined){
        const nameError = document.createElement("div")
        nameError.setAttribute("class", "error-message")
        nameError.innerHTML = validateBirthday(birthday)
        container.appendChild(nameError)
    }
    if(validatePhone(phone) != undefined){
        const nameError = document.createElement("div")
        nameError.setAttribute("class", "error-message")
        nameError.innerHTML = validatePhone(phone)
        container.appendChild(nameError)
    }
}

const validateName = function(name){
    if(name.length == 0){
        return "name is missing"
    }
    else if(name.length > 2){
        return 
    }
    else{
        return "name is not long enough"
    }
}

const validateSalary = function(salary){
    if(salary.length == 0){
        return "salary is missing"
    }
    else if(parseInt(removeCommas(salary)) >= 10000 && parseInt(removeCommas(salary)) <= 16000){
        return
    }
    else{
        return "salary must be between 10,000 and 16,000"
    }
}

const validateBirthday = function(birthday){
    if(birthday.length == 0){
        return "birthday is missing"
    }
    else{
        return
    }
}

const validatePhone = function(phone){
    if(phone.length == 0){
        return "phone is missing"
    }
    else if(phone.length !== 10){
        return "phone must be 10 digits long (no spaces or dashes)"
    }
    else{
        return
    }
}

document.getElementById("button").onclick = validate