//your JS code here. If required.



function size(){
   const width = window.innerWidth;
const height = window.innerHeight;
const sizeInfoDiv = document.getElementById("sizeInfo");

sizeInfoDiv.innerText = `Width: ${width} and Height: ${height}`;
}

window.addEventListener("resize",size);