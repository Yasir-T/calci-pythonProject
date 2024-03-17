function appendToDisplay(character) {
    document.getElementById('display').value += character;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const expression = document.getElementById('display').value;
    fetch('/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ expression: expression })
    })
    .then(response => response.json())
    .then(data => {
        if ('result' in data) {
            document.getElementById('display').value = data.result;
        } else if ('error' in data) {
            alert('Error: ' + data.error);
        }
    })
    .catch(error => console.error('Error:', error));
}

