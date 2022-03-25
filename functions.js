//Selectors
let calcInput1 = document.querySelector("#calc-input")
let calcInput2 = document.querySelector("#calc-input2")
let sum = document.querySelector("#sum"),
    sub = document.querySelector("#sub"),
    division = document.querySelector("#division"),
    mult = document.querySelector("#mult"),
    containerCalc = document.querySelector("#container-calc")
//Event Listernes
sum.addEventListener("click", sumCalc)
sub.addEventListener("click", subCalc)
division.addEventListener("click", divisionCalc)
mult.addEventListener("click", multCalc)
//Functions

function sumCalc(e){
    e.preventDefault()
    console.log("sum")
    let res = Number(calcInput1.value) + Number(calcInput2.value)
    containerCalc.innerHTML = `<p>${res}</p>`
    calcInput1.value = ""
    calcInput2.value = ""
}

function subCalc(e){
    e.preventDefault()
    console.log("sub")
    let res = Number(calcInput1.value) - Number(calcInput2.value)
    containerCalc.innerHTML = `<p>${res}</p>`
    calcInput1.value = ""
    calcInput2.value = ""
}

function divisionCalc(e){
    e.preventDefault()
    let res = Number(calcInput1.value) / Number(calcInput2.value)
    containerCalc.innerHTML = `<p>${res}</p>`
    calcInput1.value = ""
    calcInput2.value = ""
}

function multCalc(e){
    e.preventDefault()
    let res = Number(calcInput1.value) * Number(calcInput2.value)
containerCalc.innerHTML = `<p>${res}</p>`
    calcInput1.value = ""
    calcInput2.value = ""
}