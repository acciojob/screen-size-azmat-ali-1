//your JS code here. If required.

size();

function size(){
   const Width = window.innerWidth;
const Height = window.innerHeight;
const sizeInfoDiv = document.getElementById("sizeInfo");

sizeInfoDiv.innerText = `Width: ${Width} and Height: ${Height}`;
}

window.addEventListener("resize",size);