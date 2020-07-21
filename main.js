// ARRAY VISUALIZER

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let myArray = [];
for (let n = 0; n < 100; n++) {
    myArray.push(300);
}


// Main Program Loop
requestAnimationFrame(draw);

function draw() {
    // Logic
    let barWidth = cnv.width / myArray.length;

    // Drawing
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    // Draw Bar Graph
    ctx.fillStyle = "orange";
    ctx.strokeStyle = "grey";
    for (let i = 0; i < myArray.length; i++) {
        ctx.fillRect(i * barWidth, cnv.height - myArray[i], barWidth, myArray[i]);
        ctx.strokeRect(i * barWidth, cnv.height - myArray[i], barWidth, myArray[i]);
    }


    // Request another Animation Frame
    requestAnimationFrame(draw);
}
// Event Listener
document.addEventListener("keydown", keydownhandler);
// Event Function
function keydownhandler(event) {

    if (event.code == "Space") { // When Space is pressed
        for (let i = 0; i < myArray.length; i++) {
            myArray[i] += Math.randomDec(-5, 5);
        }
    } else if (event.code == "KeyR") { // When R is pressed
        
        myArray = [];
        for (let n = 0; n < 100; n++) {
            myArray.push(300);
        }
    }
}