let counterElement = document.getElementById("counterValue");

function onIncrement() {
    let previouscounterElement = counterElement.textContent;
    let updatedcounterElement = parseInt(previouscounterElement) + 1;
    counterElement.textContent = updatedcounterElement;
    if (updatedcounterElement > 0) {
        counterElement.style.color = "green";
    } else if (updatedcounterElement < 0) {
        counterElement.style.color = "red";
    } else {
        counterElement.style.color = "black"
    }
}

function onDecrement() {
    let previouscounterElement = counterElement.textContent;
    let updatedcounterElement = parseInt(previouscounterElement) - 1;
    counterElement.textContent = updatedcounterElement;

    if (updatedcounterElement > 0) {
        counterElement.style.color = "green";
    } else if (updatedcounterElement < 0) {
        counterElement.style.color = "red";
    } else {
        counterElement.style.color = "black"
    }

}

function onReset() {
    let updatedcounterElement = 0;
    counterElement.textContent = updatedcounterElement;
    if (updatedcounterElement > 0) {
        counterElement.style.color = "green";
    } else if (updatedcounterElement < 0) {
        counterElement.style.color = "red";
    } else {
        counterElement.style.color = "black"
    }
}