//your JS code here. If required.
const h = document.getElementById("sizeInfo");


function size(){
    const width = window.innerWidth;
    const height =window.innerHeight;
    h.innerText=`Width: ${width} and Height: ${height}`;
}

window.addEventListener("resize",size);