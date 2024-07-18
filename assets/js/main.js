//console.log("hello world")

let char = document.getElementById("char")

let proficent = document.getElementById("proficent")

let roller = document.getElementById("roller")

let start = document.getElementById("start")

// let char = document.getElementById("char")

// let char = document.getElementById("char")

// let char = document.getElementById("char")

start.addEventListener("click", () => starting())

function starting() {
    console.log("hello world")
    console.log(parseInt(roller.value))
    console.log(char.value)
    console.log(proficent.value)
}