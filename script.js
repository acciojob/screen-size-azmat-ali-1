//your JS code here. If required.
const h = document.getElementById("sizeInfo");
size();

function size(){
    const width = window.innerWidth;
    const height =window.innerHeight;
    h.children[0].textContent=`Width : ${width} and Height: ${height}`;
}

window.addEventListener("resize",size);