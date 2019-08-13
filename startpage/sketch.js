
let manneImage;
let adidasArray;
let pumaArray;
let championArray;
let currentColor = "";
let screenImagesArray = [];
let mouseXArray = [];
let mouseYArray = [];


function setup() {
    createCanvas(1500, 700);
    noStroke();

    // change imageMode
    imageMode(CENTER);

    // load images

    manneImage = loadImage("images/manneImage.png")   
    for (let i = 0; i < 6; i++) {
        let temp = loadImage("images/adidas/adidas_" + i + ".png");
        adidasArray.push(temp);
      }
      for(let i = 0; i < 4; i++){
        let temp = loadImage("images/puma/puma_" + i + ".png");
        pumaArray.push(temp);
      }
      for(let i = 0; i < 9; i++){
        let temp = loadImage("images/champion/champion_" + i + ".png")
        championArray.push(temp);
      }
}

function draw() {
    // paint the background black
    background(0);

    // draw a green box
    fill(0, 255, 0);
    rect(0, 0, 100, 100);

    // draw a red box
    fill(255, 0, 0);
    rect(100, 0, 100, 100);

    // draw a blue box
    fill(0, 0, 255);
    rect(200, 0, 100, 100);

    // draw mannequin box
    image(manneImage, 400,250)

    // draw all images in screenImagesArray
    for (let i = 0; i < screenImagesArray.length; i++) {
        image(screenImagesArray[i], mouseXArray[i], mouseYArray[i], 150, 150);
    }

    // every time the draw loop iterates, check currentPokemon
    // if currentColor is green
    if (currentColor == "green") {
        image(bulbasaurImage, mouseX, mouseY, 250, 250);
    }

    // if currentColor is red
    if (currentColor == "red") {
        image(charmanderImage, mouseX, mouseY, 250, 250);
    }

    // if currentColor is blue
    if (currentColor == "blue") {
        image(squirtleImage, mouseX, mouseY, 250, 250);
    }
}

function mouseClicked() {
    // check if one of the boxes are clicked
    // if the green box is clicked
    if (mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseY < 100) {
        currentColor = "green";
    }

    // if the red box is clicked
    if (mouseX > 100 && mouseX < 200 && mouseY > 0 && mouseY < 100) {
        currentColor = "red";
    }
    
    // if the blue box is clicked
    if (mouseX > 200 && mouseX < 300 && mouseY > 0 && mouseY < 100) {
        currentColor = "blue";
    }

    // if the user clicks on the canvas
    if (mouseY > 100) {
        // add info to the arrays
        // if currentColor is green
        if (currentColor == "green") {
            screenImagesArray.push(bulbasaurImage);
        }

        // if currentColor is red
        if (currentColor == "red") {
            screenImagesArray.push(charmanderImage);
        }

        // if currentColor is blue
        if (currentColor == "blue") {
            screenImagesArray.push(squirtleImage);
        }
        
        mouseXArray.push(mouseX);
        mouseYArray.push(mouseY);
    }
}

