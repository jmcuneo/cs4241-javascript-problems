// Exercise 1:

const Artist = {
    speak: function(){
        console.log("I am an Artist")
    }
}

const x = Math.floor(Math.random() * 256)
const y = Math.floor(Math.random() * 256)
const z = Math.floor(Math.random() * 256)

const Painter = Object.create(Artist);
Painter.paint= function (){ // https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php
    var background = "rgb(" + x + "," + y + "," + z + ")";
    console.log(background);
    document.body.style.backgroundColor = background;
}

Artist.speak();
Painter.speak();
Painter.paint(); // Run the HTML, it changes the background there.

// Exercise 2

for (let i = 0; i < 20; i++) {
    const block = document.createElement("div")

    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    block.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    block.style.width = '50px';
    block.style.height = '50px';
    block.style.display = 'inline-block';
    block.style.margin = '5px';

    document.body.appendChild(block);
}

// Exercise 3:

const input = document.createElement('input');
document.body.appendChild(input);

input.addEventListener('input', function() {
    const letter = input.value;

    if (letter) {
        const h1 = document.createElement("h1")
        h1.textContent = letter;
        document.body.appendChild(h1);

        input.value= '';
    }
});


// Exercise 4:

const button = document.createElement('button');
button.textContent = "click";
button.addEventListener('click', function() {
    clickNewButton();
    button.remove();
})
document.body.appendChild(button);

function clickNewButton() {
    const newButton = document.createElement("button");
    newButton.textContent = `try again ${Math.random().toString(36).substring(7)}`;
    document.body.appendChild(newButton);

    newButton.addEventListener("click", function() {
        clickNewButton();
        newButton.remove();
    });
}






