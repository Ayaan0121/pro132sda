img="";
status="";
function preload() {
    img=loadImage('cr7.png');
}

function setup() {
    canvas=createCanvas(640,420);
    canvas.center();
//cordinates for canvas use this 'canvas.position(x,y);'
objectDetector=ml5.objectDetector('cocossd' , modelLoaded);
document.getElementById("status").innerHTML="Status: Dectecing Objects";
}

function modelLoaded() {
    console.log("Model Loaded!");
    //change status
    status=true;
    objectDetector.detect(img,gotResults);
}

function gotResults(error , results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
    }
}

function draw() {
  //placing  image in canvas
    image(img,0 , 0 , 640 , 420);
     //for dog identify
    noFill();
    stroke("#0000FF");
    rect(155 , 30 ,160 ,380 );
    fill("#0000FF");
    text("Person", 158 , 42);
    //for cat identify
    noFill();
    stroke("#FF0000");
    rect(115, 324 , 75 , 70);  
    fill("#FF0000");
    text("Ball", 120 , 337);
   
    
}