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
    console.log(parseInt(char.value))
    console.log(proficent.value)
    getRandomInt(1, parseInt(roller.value) + 1)
}

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}