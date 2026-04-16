const add = () => {
    event.preventDefault()

    let val1 = document.getElementById("value1").value 
    let val2 = document.getElementById("value2")
    let display = document.getElementById("display")

    display.innerHTML = `The sum of ${val1} add ${val2.value} is ${val1 + val2.value}`
}
const sub = () => {
    event.preventDefault()

    let val1 =Number(document.getElementById("value1").value)
    let val2 = document.getElementById("value2")
    let display = document.getElementById("display")

    display.innerHTML = `The sum of ${val1} add ${val2.value} is ${val1 - val2.value}`
}
const mul = () => {
    event.preventDefault()

    let val1 = document.getElementById("value1").value 
    let val2 = document.getElementById("value2")
    let display = document.getElementById("display")

    display.innerHTML = `The sum of ${val1} add ${val2.value} is ${val1 * val2.value}`
}
const div = () => {
    event.preventDefault()

    let val1 = document.getElementById("value1").value 
    let val2 = document.getElementById("value2")
    let display = document.getElementById("display")

    display.innerHTML = `The sum of ${val1} add ${val2.value} is ${val1 / val2.value}`
}

