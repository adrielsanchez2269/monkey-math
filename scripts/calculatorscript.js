var output = 0
var values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function update() {
    document.getElementById('calculator-value').innerText = output;
}

function printNumber(i) {
    output = values[i];
    update()
}