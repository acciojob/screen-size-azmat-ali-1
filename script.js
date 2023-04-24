//your JS code here. If required.



function size(){
   const width = window.innerWidth;
const height = window.innerHeight;
const sizeInfoDiv = document.getElementById("sizeInfo");

const sizeInfoH1 = document.createElement("h1");
sizeInfoH1.innerText = `Width: ${width} Height: ${height}`;

sizeInfoDiv.appendChild(sizeInfoH1);
}

window.addEventListener("resize",size);