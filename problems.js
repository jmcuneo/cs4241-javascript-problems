function randomColor(uniqueVal=false){
    let hexVals=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    let hexCode="#";
    for (let i=0;i<6;i++){
        let r=Math.floor(Math.random()*hexVals.length);
        hexCode+=hexVals[r];
        if (uniqueVal){
            hexVals.splice(r,1);
        }
    }
    return hexCode;
}

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


function problem1(){
    const Artist  = {
        speak(){
            console.log("I am an artist");
        },
    };
    const Painter ={
        paint(){
            let hexCode=randomColor();
            document.getElementById("page").style.backgroundColor=hexCode;
        },
    };
    Object.assign(Painter, Artist);
    Painter.paint();
    Artist.speak();
    Painter.speak();

}
//problem1();


// create a for loop that creates 20 blocks,
// all on a single row, with a random color for each
// make sure the values for each color channel are different
// (i.e. no gray/black/white blocks)

function problem2(){
    document.getElementById("page").innerHtml="";
    for (let i=0;i<20;i++){

        let c=randomColor(true);
        let newBox=document.createElement("div");
        newBox.style.backgroundColor=c;
        newBox.style.display="inline-block";
        newBox.style.width="20px";
        newBox.style.height="10px"
        document.getElementById("page").appendChild(newBox);
    }
}
//problem2();

// create a for input field that does the following
// whenever the user enters a letter in it:
// 1. Creates a <h1> element containing the letter and appends it to the page
// 2. deletes the inputted letter from the input field so it is blank

function problem3(){
    let docBody=document.getElementById("page");
    let input=document.createElement("input");
    let inputStr="";
    input.oninput=function(){
        if (inputStr.length<input.value.length){
            console.log("INC");
            for (let i=inputStr.length;i<input.value.length;i++){
                let char=input.value[i];
                let header=document.createElement("H1");
                console.log(header.innerHtml);
                header.innerHTML=char;
                docBody.appendChild(header);
                console.log(input.value);
                input.value="";

            }


        }
        inputStr=input.value;
        console.log("TEST");
    }
    docBody.appendChild(input);

}
//problem3();

// make a button that, when clicked, creates a new
// button, and then deletes the original button.
// every button that is created should have this same behavior.
// put random text inside of each button so you can be sure
// that each button is different.
function randText(){
    let str="";
    let len=Math.floor(Math.random()*10+2);
    let chars=['A','B','C','D','E','F'];
    for (let i=0;i<len;i++){
        let ind=Math.floor(Math.random()*5);
        str+=chars[ind];
    }
    return str;
}

function problem4(){
    function buttonMaker(b){
            console.log("B");
            let newButton=document.createElement("button");
            newButton.innerHTML=randText();

            document.getElementById("page").appendChild(newButton);
            newButton.onclick=function(){
                                      buttonMaker(newButton);
                                  };
            b.remove();
    }
    let button=document.createElement("button");
    button.innerHTML=randText();
    document.getElementById("page").appendChild(button);
    button.onclick=function(){
        buttonMaker(button);
    };
}
//problem4();