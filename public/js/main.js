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

    while (r === g && g === b) {
        let r = Math.floor(Math.random() * 256)
        let g = Math.floor(Math.random() * 256)
        let b = Math.floor(Math.random() * 256)
    }

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





