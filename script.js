let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
let isKeyPress = false;

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (!isKeyPress) {
            handleInput(e.target.innerHTML);
        }
        isKeyPress = false; // Reset the flag after handling the input
    });
});

document.addEventListener('keydown', (e) => {
    let key = e.key;
    if (key === 'Enter') {
        key = '=';
    } else if (key === 'Backspace') {
        key = 'DEL';
    } else if (key === 'Escape') {
        key = 'AC';
    }
    isKeyPress = true; // Set the flag to indicate a key press
    handleInput(key);
});

function handleInput(inputChar) {
    if (inputChar === '=') {
        try {
            string = eval(string);
        } catch (e) {
            string = "Error";
        }
        input.value = string;
    } else if (inputChar === 'AC') {
        string = "";
        input.value = string;
    } else if (inputChar === 'DEL') {
        string = string.substring(0, string.length - 1);
        input.value = string;
    } else if (isValidInput(inputChar)) {
        string += inputChar;
        input.value = string;
    }
}

function isValidInput(char) {
    return /[0-9+\-*/.]/.test(char);
}
