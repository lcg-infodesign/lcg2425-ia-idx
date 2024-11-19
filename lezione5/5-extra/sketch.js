let catImage;
let otherImage;
//Remember to include the appropriate file extension
// (.gif, .jpg, .png, or .svg) when you load the image.
// Also, be sure that the image name is typed exactly
// as it appears in the file, including the case of the
// letters.
//taken from "Make: Getting Started with p5.js" book
function preload(){
  catImage = loadImage("../assets/cat-pixabay-bw.jpg");
  otherImage = loadImage("../assets/cat-pixabay.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Hide the cursor and replace it with a picture of
  // a paintbrush.
  noCursor();
  cursor("../assets/artist-pixabay.png", 20, -10);
  image(catImage,0,0);

}
// function draw() {
//   // copy(otherImage, mouseX, mouseY, 20, 20, mouseX, mouseY, 20, 20);
// }


function mouseDragged() {
  copy(otherImage, mouseX, mouseY, 20, 20, mouseX, mouseY, 20, 20);
}

// https://p5js.org/examples/imported-media-copy-image-data/