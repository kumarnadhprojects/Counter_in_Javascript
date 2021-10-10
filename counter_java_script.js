let counterElement = document.getElementById("counterValue");

function onIncrease() {
    let previousValue = counterElement.textContent;
    let updatedValue = parseInt(previousValue) + 1;
    counterValue.textContent = updatedValue;
    if (updatedValue > 0) {
        counterElement.style.color = "green"
    } else if (updatedValue < 0) {

        counterElement.style.color = "red"
    } else {
        counterElement.style.color = "red"
    }
}

function onDecrease() {
    let previousValue = counterElement.textContent;
    let updatedValue = parseInt(previousValue) - 1;
    counterValue.textContent = updatedValue;
    if (updatedValue > 0) {
        counterElement.style.color = "green"
    } else if (updatedValue < 0) {

        counterElement.style.color = "red"
    } else {
        counterElement.style.color = "black"
    }
}

function onReset() {
    counterElement.textContent = 0;
    counterElement.style.color = "black"
}