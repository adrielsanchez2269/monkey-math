let output = 'Hello';

function update() {
    document.getElementById('calculator-value').innerHTML = output;
}

function clearResponse() {
    output = 0;
    update();
}

function printNumber(i) {
    if (output === 'Hello') {
        output = i;
    }

    output = String(output) + String(i);
    update();
}