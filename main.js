const Artist = {
    speak() {
        console.log("I am an artist")
    }
}

const Painter = {
    __proto__ : Artist,

    paint() {
        document.body.style.backgroundColor = generateColor();
    }

    
}

function generateColor() {
    let hexStretch = "0123456789ABCDEF"
    let hexString = ""
    

    for (i = 0; i < 6; i++) {
        randIndex = Math.floor(Math.random() * hexStretch.length)
        hexString += hexStretch[randIndex]

    }

    return "#" + hexString
}

function generateBlocks() {
    const mainDiv = document.getElementById('mainDiv')
    
    for (let i = 0; i < 20; i++) {
        const block = document.createElement('div')
        block.className = "block"
        block.style.backgroundColor = generateColor()
        mainDiv.appendChild(block)
    }
}


const letterInput = document.getElementById('letterInput');

letterInput.addEventListener('input', function() {
    const letter = this.value.trim()
    if (letter.length === 1) {
        const h1 = document.createElement('h1')
        h1.textContent = letter
        document.body.appendChild(h1)
        this.value = '';
    }
});


window.onload = function() {
    generateBlocks();

    const createButton = document.querySelector('button')
    createButton.addEventListener('click', createNewButton)
};

function createNewButton() {
    const newButton = document.createElement('button')
    newButton.textContent = generateRandomText()
    newButton.addEventListener('click', createNewButton)
    this.parentNode.insertBefore(newButton, this.nextSibling)
    this.remove()
}

function generateRandomText() {
    const charString = "abcdef0123456789"
    let randomText = ""

    for (let i = 0; i < 5; i++) {
        randomText += charString.charAt(Math.floor(Math.random() * charString.length))
    }

    return randomText;
}