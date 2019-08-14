// pants
//nike imaages



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
    manneImage = loadImage("images/manne2.png")   
    for (let i = 0; i < 3; i++) {
        let temp = loadImage("images/Adidas/adidas_" + i + ".png");
        adidasArray.push(temp);
      }
      for(let i = 1; i < 4; i++){
        let temp = loadImage("images/puma/puma_" + i + ".png");
        pumaArray.push(temp);
      }
      for(let i = 0; i < 9; i++){
        let temp = loadImage("images/champion/champion_" + i + ".png")
        championArray.push(temp);
      }
    // for(let i = 0; i < 53; i++){
    //     let temp = loadImage("images/Nike/nike_" + i + ".png")
    //     nikeArray.push(temp);

    // }
}


function setup() {
    createCanvas(2000, 1000);
    noStroke();

    // change imageMode
    imageMode(CENTER);
      
}

function draw() {
    // paint the background black
    background(0);

    // fill(0, 255, 0);
    // rect(0, 0, 50, 50);
    image(adidasArray[0], 50, 50, 100, 100);
    image(adidasArray[1], 150,50,100,100);
   image(adidasArray[2], 250,50,100,100)
    image(pumaArray[1],350,50,100,100)
    image(pumaArray[2],450,50,100,100)
    image(championArray[0],550,50,100,100)
    image(championArray[1],650,50,100,100)
    image(championArray[2],750,50,100,100)
    image(championArray[3],850,50,100,100)
    image(championArray[4],950,50,100,100)
    image(championArray[5],1050,50,100,100)
    image(championArray[6],1150,50,100,100)
    image(championArray[7],1250,50,100,100)
    image(championArray[8],1350,50,100,100)
    // image(nikeArray[5],1450,50,100,100)
    // image(nikeArray[6],1550,50,100,100)
    // image(nikeArray[7],1650,50,100,100)
    // image(nikeArray[9],1750,50,100,100)
    // image(nikeArray[11],1850,50,100,100)
    // image(nikeArray[12],1950,50,100,100)
    // image(nikeArray[13],2050,50,100,100)
    // image(nikeArray[14],2150,50,100,100)
    // image(nikeArray[16],2250,50,100,100)
    // image(nikeArray[20],2350,50,100,100)
    // image(nikeArray[21],2450,50,100,100)
    // image(nikeArray[24],2550,50,100,100)
    // image(nikeArray[25],2650,50,100,100)
    

    
    // draw mannequin box
    image(manneImage, 800,700,900,1000)
    

    // draw all images in screenImagesArray
    for (let i = 0; i < screenImagesArray.length; i++) {
        image(screenImagesArray[i], mouseXArray[i], mouseYArray[i], widthArray[i], heightArray[i]);
    }

    // every time the draw loop iterates, check currentPokemon
    // if currentColor is green
    if (currentColor == "green") {
        image(adidasArray[0], mouseX, mouseY, 250, 250);
    }

    // if currentColor is red
    if (currentColor == "red") {
        image(adidasArray[1], mouseX, mouseY, 262, 250);
    }

    // if currentColor is blue
    if (currentColor == "blue") {
        image(adidasArray[2], mouseX, mouseY, 250, 250);
    }
    if(currentColor == "rgb(252, 98, 3)"){
        image(pumaArray[1], mouseX, mouseY,250,250)
    }
    if(currentColor == "rgb(252, 157, 3)"){
        image(pumaArray[2], mouseX, mouseY,250,250)
    }
    if(currentColor == "rgb(252, 223, 3)"){
        image(championArray[0] , mouseX, mouseY,250,250)
    }
    if(currentColor == "rgb(252, 252, 3)"){
        image(championArray[1], mouseX, mouseY,250,250)
    }
    if(currentColor == "rgb(140, 252, 3)"){
        image(championArray[2], mouseX, mouseY,250,250)
    }
    if(currentColor == "rgb(61, 252, 3)"){
        image(championArray[3], mouseX, mouseY,250,250)
    }
    if(currentColor == "rgb(3, 252, 177)"){
        image(championArray[4], mouseX, mouseY,250,250)
    }
    if(currentColor == "rgb(3, 252, 240)"){
        image(championArray[5], mouseX, mouseY,250,250)
    }
    if(currentColor == "rgb(3, 198, 252)"){
        image(championArray[6], mouseX, mouseY,250,250)
    }
    if(currentColor == "rgb(3, 115, 252)"){
        image(championArray[7], mouseX, mouseY,250,250)
    }
    if(currentColor == "rgb(3, 24, 252)"){
        image(championArray[8], mouseX, mouseY,270,250)
    }
    if(currentColor == "rgb(132, 3, 252)"){
        image(nikeArray[5], mouseX, mouseY,250,250)
    }
    if(currentColor == "rgb(186, 3, 252)"){
        image(nikeArray[6], mouseX, mouseY,250,250)
    }
    if(currentColor == "rgb(252, 3, 240)"){
        image(nikeArray[7], mouseX, mouseY,250,250)
    }
    if(currentColor == "rgb(252, 3, 103)"){
        image(nikeArray[9], mouseX, mouseY,250,250)
    }
    if(currentColor == "black"){
        image(nikeArray[11], mouseX, mouseY,250,250)
    }
    if(currentColor == "white"){
        image(nikeArray[12],mouseX,mouseY,250,250)
    }
    if(currentColor == "yellow"){
        image(nikeArray[13],mouseX,mouseY,250,250)
    }
    if(currentColor == "orange"){
        image(nikeArray[14],mouseX,mouseY,250,250)
    }
    if(currentColor == "brown"){
        image(nikeArray[16],mouseX,mouseY,250,250)
    }
    if(currentColor == "pink"){
        image(nikeArray[20],mouseX,mouseY,250,250)
    }
    if(currentColor == "purple"){
        image(nikeArray[21],mouseX,mouseY,250,250)
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
        currentColor = "rgb(252, 98, 3)"
    }

    if (mouseX > 450 && mouseX < 500 && mouseY > 0 && mouseY < 100) {
        currentColor = "rgb(252, 157, 3)"
    }

    if (mouseX > 550 && mouseX < 600 && mouseY > 0 && mouseY < 100) {
        currentColor = "rgb(252, 223, 3)"
    }

    if (mouseX > 650 && mouseX < 700 && mouseY > 0 && mouseY < 100) {
        currentColor = "rgb(252, 252, 3)"
    }

    if (mouseX > 750 && mouseX < 800 && mouseY > 0 && mouseY < 100) {
        currentColor = "rgb(140, 252, 3)"
    }
    if (mouseX > 850 && mouseX < 900 && mouseY > 0 && mouseY < 100) {
        currentColor = "rgb(61, 252, 3)"
    }

    if (mouseX > 950 && mouseX < 1000 && mouseY > 0 && mouseY < 100) {
        currentColor = "rgb(3, 252, 177)"
    }

    if (mouseX > 1050 && mouseX < 1100 && mouseY > 0 && mouseY < 100) {
        currentColor = "rgb(3, 252, 240)"
    }

    if (mouseX > 1150 && mouseX < 1200 && mouseY > 0 && mouseY < 100) {
        currentColor = "rgb(3, 198, 252)"
    }

    if (mouseX > 1250 && mouseX < 1300 && mouseY > 0 && mouseY < 100) {
        currentColor = "rgb(3, 115, 252)"
    }

    if (mouseX > 1350 && mouseX < 1400 && mouseY > 0 && mouseY < 100) {
        currentColor = "rgb(3, 24, 252)"
    }

    if (mouseX > 1450 && mouseX < 1500 && mouseY > 0 && mouseY < 100) {
        currentColor = "rgb(132, 3, 252)"
    }

    if (mouseX > 1550 && mouseX < 1600 && mouseY > 0 && mouseY < 100) {
        currentColor = "rgb(186, 3, 252)"
    }

    if (mouseX > 1650 && mouseX < 1700 && mouseY > 0 && mouseY < 100) {
        currentColor = "rgb(252, 3, 240)"
    }

    if (mouseX > 1750 && mouseX < 1800 && mouseY > 0 && mouseY < 100) {
        currentColor = "rgb(252, 3, 103)"
    }
    if (mouseX > 1850 && mouseX < 1900 && mouseY > 0 && mouseY < 100) {
        currentColor = "black"
    }
    if (mouseX > 1950 && mouseX < 2000 && mouseY > 0 && mouseY < 100) {
        currentColor = "white"
    }
    if (mouseX > 2050 && mouseX < 2100 && mouseY > 0 && mouseY < 100) {
        currentColor = "yellow"
    }
    if (mouseX > 2150 && mouseX < 2200 && mouseY > 0 && mouseY < 100) {
        currentColor = "orange"
    }
    if (mouseX > 2250 && mouseX < 2300 && mouseY > 0 && mouseY < 100) {
        currentColor = "brown"
    }
    if (mouseX > 2350 && mouseX < 2400 && mouseY > 0 && mouseY < 100) {
        currentColor = "pink"
    }
    if (mouseX > 2450 && mouseX < 2500 && mouseY > 0 && mouseY < 100) {
        currentColor = "purple"
    }

    
    // if the user clicks on the canvas
    if (mouseY > 100) {
        mouseXArray.push(mouseX);
        mouseYArray.push(mouseY);
   
        if (currentColor == "green") {
            screenImagesArray.push(adidasArray[0]);
            widthArray.push(250);
            heightArray.push(250);
        }

        if (currentColor == "red") {
            screenImagesArray.push(adidasArray[1]);
            widthArray.push(262);
            heightArray.push(250);
        }
        if (currentColor == "blue"){
            screenImagesArray.push(adidasArray[2])
            widthArray.push(250);
            heightArray.push(250);
        }
        
        if(currentColor == "rgb(252, 98, 3)") {
            screenImagesArray.push(pumaArray[1]);
            widthArray.push(250);
            heightArray.push(250);
        }
        if(currentColor == "rgb(252, 157, 3)") {
            screenImagesArray.push(pumaArray[2]);
            widthArray.push(250);
            heightArray.push(250);
        }
        if(currentColor == "rgb(252, 223, 3)") {
            screenImagesArray.push(championArray[0]);
            widthArray.push(250);
            heightArray.push(250);
        }
        if(currentColor == "rgb(252, 252, 3)") {
            screenImagesArray.push(championArray[1]);
            widthArray.push(250);
            heightArray.push(250);
        }
        if(currentColor == "rgb(140, 252, 3)"){
            screenImagesArray.push(championArray[2]);
            widthArray.push(250);
            heightArray.push(250);
        }
        if(currentColor == "rgb(61, 252, 3)") {
            screenImagesArray.push(championArray[3]);
            widthArray.push(250);
            heightArray.push(250);
        }
        if(currentColor == "rgb(3, 252, 177)") {
            screenImagesArray.push(championArray[4]);
            widthArray.push(250);
            heightArray.push(250);
        }
        if(currentColor == "rgb(3, 252, 240)") {
            screenImagesArray.push(championArray[5]);
            widthArray.push(250);
            heightArray.push(250);
        }
        if(currentColor == "rgb(3, 198, 252)"){
            screenImagesArray.push(championArray[6]);
            widthArray.push(250);
            heightArray.push(250);
        }
        if(currentColor == "rgb(3, 115, 252)"){
            screenImagesArray.push(championArray[7]);
            widthArray.push(250);
            heightArray.push(250);
        }
        if(currentColor == "rgb(3, 24, 252)") {
            screenImagesArray.push(championArray[8]);
            widthArray.push(270);
            heightArray.push(250);
        }
        if(currentColor == "rgb(132, 3, 252)") {
            screenImagesArray.push(nikeArray[5]);
            widthArray.push(250);
            heightArray.push(250);
        }
        if(currentColor == "rgb(186, 3, 252)"){
            screenImagesArray.push(nikeArray[6]);
            widthArray.push(250);
            heightArray.push(250);
        }
        if(currentColor == "rgb(252, 3, 240)") {
            screenImagesArray.push(nikeArray[7]);
            widthArray.push(250);
            heightArray.push(250);
        }
        if(currentColor == "rgb(252, 3, 103)") {
            screenImagesArray.push(nikeArray[9]);
            widthArray.push(250);
            heightArray.push(250);
        }
        if(currentColor == "black") {
            screenImagesArray.push(nikeArray[11]);widthArray.push(250);
            heightArray.push(250);
        }
        if(currentColor == "white") {
            screenImagesArray.push(nikeArray[12]);
            widthArray.push(250);
            heightArray.push(250);
        }
        if(currentColor == "yellow") {
            screenImagesArray.push(nikeArray[13]);
            widthArray.push(250);
            heightArray.push(250);
        }
        if(currentColor == "orange") {
            screenImagesArray.push(nikeArray[14]);
            widthArray.push(250);
            heightArray.push(250);
        }
        if(currentColor == "brown") {
            screenImagesArray.push(nikeArray[16]);
            widthArray.push(250);
            heightArray.push(250);
        }
        if(currentColor == "pink") {
            screenImagesArray.push(nikeArray[20]);
            widthArray.push(250);
            heightArray.push(250);
        }
        if(currentColor == "purple") {
            screenImagesArray.push(nikeArray[21]);
            widthArray.push(250);
            heightArray.push(250);
        }
     
        
    }
}

