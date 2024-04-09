//PROBLEM 1
// Make two objects named Artist
// and Painter. Artist should have
// a function named speak() that
// when called logs "I am an artist"
// to the console. Painter should be
// able to use the Artist's speak function
// (painters are artists, after all) in some
// way, and should also have a function named
// paint() that sets the background color of the
// page to a random color whenever called. 

//My solution was almost identicle to the person I compared my code with for solution 1
const Artist = {
    speak(){
        console.log("I am an artist")
    }
}

const Painter = {
    __proto__: Artist,
    paint()
    {
        let color = GenerateColor()
        document.body.style.backgroundColor = color;    
    }
} 

function GenerateColor()
{
    let n = "0123456789ABCDEF"
    let resultString ="#"
    for(let i = 0; i < 6; i++){
        let index = Math.floor(Math.random() * n.length)
        resultString += n.charAt(index)
    }
    return(resultString);
}

Painter.speak()
Painter.paint()

// create a for loop that creates 20 blocks,
// all on a single row, with a random color for each
// make sure the values for each color channel are different
// (i.e. no gray/black/white blocks)

//My solution was similar the classmate I compared with again
for(let i = 0; i < 20; i++){
    let color = GenerateColor()
    let block = document.createElement("DIV")
    block.style.backgroundColor = color
    block.style.width = "20px"
    block.style.height = "20px"
    block.style.display = "inline-block"
    document.body.appendChild(block)
}

// create a for input field that does the following 
// whenever the user enters a letter in it:
// 1. Creates a <h1> element containing the letter and appends it to the page
// 2. deletes the inputted letter from the input field so it is blank

//Did not get to compare with a classmate in time
let inputBox = document.createElement("INPUT")
document.body.appendChild(inputBox)

inputBox.addEventListener("keypress", (event) =>{
    let keyPressed = event.key
    let h1Element = document.createElement("H1")
    h1Element.textContent = keyPressed
    document.body.appendChild(h1Element)
})

// make a button that, when clicked, creates a new
// button, and then deletes the original button. 
// every button that is created should have this same behavior.
// put random text inside of each button so you can be sure 
// that each button is different.

//Did not get to compare with a classmate in time
let btn = document.createElement("BUTTON")
btn.textContent = "Ran Btn Gen"
document.body.appendChild(btn)

btn.addEventListener("click", buttonFunction)

function buttonFunction(event){
    let clickedButton = event.target
    clickedButton.remove()
    n = "1234567890qwertyuiopasdfghjklzxcvbnm"
    let resultString = ""
    for(let i = 0; i < Math.floor(Math.random() * 10); i++){
        let index = Math.floor(Math.random() * n.length)
        resultString += n.charAt(index)
    }

    let btn = document.createElement("BUTTON")
    btn.textContent = resultString
    btn.addEventListener("click", buttonFunction)
    document.body.appendChild(btn)
}