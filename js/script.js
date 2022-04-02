// Script to make a colapse nav on header
let w = window.innerWidth;
let nav = document.getElementById("headerNav");
if(w<=620){
    nav.style.display="none";
}
window.addEventListener("resize", function () {
    w = window.innerWidth;
    // check width
    if(w<=620){
        nav.style.display="none";
    }
});
