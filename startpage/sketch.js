// pants
//nike imaages


// let lolImage;
let manneImage;
let adidasArray =[];
let pumaArray=[];
let championArray=[];
let nikeArray=[];
let currentColor = "";
let screenImagesArray = [];
let mouseXArray = [];
let mouseYArray = [];
let widthArray = [];
let heightArray = [];

function preload() {
    // load images
    manneImage = loadImage("images/whiteboy.png")  
    // lolImage = loadImage("images/lolmanne.png")

  
      for(let i = 0; i < 3; i++){
        let temp = loadImage("images/puma/puma_" + (i) + ".png");
        pumaArray.push(temp);
      }
      for(let i = 0; i < 6; i++){
        let temp = loadImage("images/champion/champion_" + i + ".png")
        championArray.push(temp);
      }
    for(let i = 0; i < 13; i++){
        let temp = loadImage("images/Nike/nike_" + i + ".png")
        nikeArray.push(temp);

    }
}


function setup() {
    createCanvas(2200,700);
    noStroke();

    // change imageMode
    imageMode(CENTER);
      
}

function draw() {
    // paint the background black
    background(0);
//(50,950,100,100)

    image(nikeArray[0], 50, 50, 100, 100);
    image(pumaArray[0], 150,50,100,100);
    image(pumaArray[1], 250,50,100,100)
    image(pumaArray[2],350,50,100,100)
    image(championArray[0],450,50,100,100)
    image(championArray[1],550,50,100,100)
    image(championArray[2],650,50,100,100)
    image(championArray[3],750,50,100,100)
    image(championArray[4],850,50,100,100)
    image(championArray[5],950,50,100,100)
    image(nikeArray[2],1050,50,100,100)
    image(nikeArray[3],1150,50,100,100)
    image(nikeArray[7],1250,50,100,100)
    image(nikeArray[8],1350,50,100,100)
    image(nikeArray[11],1450,50,100,100)
    image(nikeArray[4],1550,50,100,100)
    image(nikeArray[5],1650,50,100,100)
    image(nikeArray[6],1750,50,100,100)
    image(nikeArray[9],1850,50,100,100)
    image(nikeArray[10],1950,50,100,100)
    image(nikeArray[12],2050,50,100,100)

    
    

    
    // draw mannequin box
    image(manneImage, 1100,350,275,275)
   
    

    // draw all images in screenImagesArray
    for (let i = 0; i < screenImagesArray.length; i++) {
        image(screenImagesArray[i], mouseXArray[i], mouseYArray[i], widthArray[i], heightArray[i]);
    }

    // every time the draw loop iterates, check currentPokemon
    // if currentColor is green
    if (currentColor == "green") {
        image(nikeArray[0], mouseX, mouseY, 415, 280);
    }

    // if currentColor is red
    if (currentColor == "red") {
        image(pumaArray[0], mouseX, mouseY, 262, 290);
    }

    // if currentColor is blue
    if (currentColor == "blue") {
        image(pumaArray[1], mouseX, mouseY, 250, 270);
    }
    if(currentColor == "c"){
        image(pumaArray[2], mouseX, mouseY,240,240)
    }
    if(currentColor == "d"){
        image(championArray[0], mouseX, mouseY,250,250)
    }
    if(currentColor == "e"){
        image(championArray[1] , mouseX, mouseY,240,240)
    }
    if(currentColor == "f"){
        image(championArray[2], mouseX, mouseY,240,240)
    }
    if(currentColor == "g"){
        image(championArray[3], mouseX, mouseY,240,250)
    }
    if(currentColor == "h"){
        image(championArray[4], mouseX, mouseY,225,250)
    }
    if(currentColor == "i"){
        image(championArray[5], mouseX, mouseY,240,240)
    }
    if(currentColor == "j"){
        image(nikeArray[2], mouseX, mouseY,410,250)
    }
    if(currentColor == "k"){
        image(nikeArray[3], mouseX, mouseY,340,180)
    }
    if(currentColor == "l"){
        image(nikeArray[7], mouseX, mouseY,240,240)
    }
    if(currentColor == "m"){
        image(nikeArray[8], mouseX, mouseY,380,250)
    }
    if(currentColor == "n"){
        image(nikeArray[11],mouseX, mouseY,250,250)
    }
    if(currentColor == "o"){
        image(nikeArray[4],mouseX,mouseY,415,280)
    }
    if(currentColor == "p"){
        image(nikeArray[5],mouseX,mouseY,415,280)
    }
    if(currentColor == "q"){
        image(nikeArray[6],mouseX,mouseY,415,280)
    }
    if(currentColor == "r"){
        image(nikeArray[9],mouseX,mouseY,415,280)
    }
    if(currentColor == "s"){
        image(nikeArray[10],mouseX,mouseY,415,280)
    }
    if(currentColor == "t"){
        image(nikeArray[12],mouseX,mouseY,415,280)
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
    if (mouseX > 250 && mouseX < 300 && mouseY > 0 && mouseY < 100) {
        currentColor = "blue";
    }
    if (mouseX > 350 && mouseX < 400 && mouseY > 0 && mouseY < 100) {
        currentColor = "c"
    }

    if (mouseX > 450 && mouseX < 500 && mouseY > 0 && mouseY < 100) {
        currentColor = "d"
    }

    if (mouseX > 550 && mouseX < 600 && mouseY > 0 && mouseY < 100) {
        currentColor = "e"
    }

    if (mouseX > 650 && mouseX < 700 && mouseY > 0 && mouseY < 100) {
        currentColor = "f"
    }

    if (mouseX > 750 && mouseX < 800 && mouseY > 0 && mouseY < 100) {
        currentColor = "g"
    }
    if (mouseX > 850 && mouseX < 900 && mouseY > 0 && mouseY < 100) {
        currentColor = "h"
    }

    if (mouseX > 950 && mouseX < 1000 && mouseY > 0 && mouseY < 100) {
        currentColor = "i"
    }

    if (mouseX > 1050 && mouseX < 1100 && mouseY > 0 && mouseY < 100) {
        currentColor = "j"
    }

    if (mouseX > 1150 && mouseX < 1200 && mouseY > 0 && mouseY < 100) {
        currentColor = "k"
    }

    if (mouseX > 1250 && mouseX < 1300 && mouseY > 0 && mouseY < 100) {
        currentColor = "l"
    }

    if (mouseX > 1350 && mouseX < 1400 && mouseY > 0 && mouseY < 100) {
        currentColor = "m"
    }
    if(mouseX > 1450 && mouseX < 1500 && mouseY > 0 && mouseY < 100){
        currentColor = "n"
    }
    if(mouseX > 1550 && mouseX < 1600 && mouseY > 0 && mouseY < 100){
        currentColor = "o"
    }
    if(mouseX > 1650 && mouseX < 1700 && mouseY > 0 && mouseY < 100){
        currentColor = "p"
    }
    if(mouseX > 1750 && mouseX < 1800 && mouseY > 0 && mouseY < 100){
        currentColor = "q"
    }
    if(mouseX > 1850 && mouseX < 1900 && mouseY > 0 && mouseY < 100){
        currentColor = "r"
    }
    if(mouseX > 1950 && mouseX < 2000 && mouseY > 0 && mouseY < 100){
        currentColor = "s"
    }
    if(mouseX > 2050 && mouseX < 2100 && mouseY > 0 && mouseY < 100){
        currentColor = "t"
    }
    
    

    
    // if the user clicks on the canvas
    if (mouseY > 100) {
        mouseXArray.push(mouseX);
        mouseYArray.push(mouseY);
   
        if (currentColor == "green") {
            screenImagesArray.push(nikeArray[0]);
            widthArray.push(415);
            heightArray.push(280);
        }

        if (currentColor == "red") {
            screenImagesArray.push(pumaArray[0]);
            widthArray.push(262);
            heightArray.push(290);
        }
        if (currentColor == "blue"){
            screenImagesArray.push(pumaArray[1])
            widthArray.push(250);
            heightArray.push(270);
        }
        
        if(currentColor == "c") {
            screenImagesArray.push(pumaArray[2]);
            widthArray.push(250);
            heightArray.push(250);
        }
        if(currentColor == "d") {
            screenImagesArray.push(championArray[0]);
            widthArray.push(240);
            heightArray.push(240);
        }
        if(currentColor == "e") {
            screenImagesArray.push(championArray[1]);
            widthArray.push(240);
            heightArray.push(240);
        }
        if(currentColor == "f") {
            screenImagesArray.push(championArray[2]);
            widthArray.push(240);
            heightArray.push(240);
        }
        if(currentColor == "g"){
            screenImagesArray.push(championArray[3]);
            widthArray.push(240);
            heightArray.push(250);
        }
        if(currentColor == "h") {
            screenImagesArray.push(championArray[4]);
            widthArray.push(225);
            heightArray.push(250);
        }
        if(currentColor == "i") {
            screenImagesArray.push(championArray[5]);
            widthArray.push(240);
            heightArray.push(240);
        }
        if(currentColor == "j") {
            screenImagesArray.push(nikeArray[2]);
            widthArray.push(410);
            heightArray.push(250);
        }
        if(currentColor == "k"){
            screenImagesArray.push(nikeArray[3]);
            widthArray.push(340);
            heightArray.push(180);
        }
        if(currentColor == "l"){
            screenImagesArray.push(nikeArray[7]);
            widthArray.push(240);
            heightArray.push(240);
        }
        if(currentColor == "m") {
            screenImagesArray.push(nikeArray[8]);
            widthArray.push(380);
            heightArray.push(250);
        }
        if(currentColor == "n") {
            screenImagesArray.push(nikeArray[11]);
            widthArray.push(250);
            heightArray.push(250);
        }
        if(currentColor == "o") {
            screenImagesArray.push(nikeArray[4]);
            widthArray.push(415);
            heightArray.push(280);
        }
        if(currentColor == "p") {
            screenImagesArray.push(nikeArray[5]);
            widthArray.push(415);
            heightArray.push(280);
        }
        if(currentColor == "q") {
            screenImagesArray.push(nikeArray[6]);
            widthArray.push(415);
            heightArray.push(280);
        }
        if(currentColor == "r") {
            screenImagesArray.push(nikeArray[9]);
            widthArray.push(415);
            heightArray.push(280);
        }
        if(currentColor == "s") {
            screenImagesArray.push(nikeArray[10]);
            widthArray.push(415);
            heightArray.push(280);
        }
        if(currentColor == "t") {
            screenImagesArray.push(nikeArray[12]);
            widthArray.push(415);
            heightArray.push(280);
        }
     
     
        
    }
}

