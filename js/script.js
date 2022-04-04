// Script to make a colapse nav on header
let w = window.innerWidth;
let colapseButton = document.getElementById("colapse");
if(w>620){
    onResize();
}
function onResize(){
    let ulNav = document.getElementById("ulNav");
    let navItems = document.getElementsByClassName("navItem");
    let loginButton = document.getElementById("loginButton");
    if(w>620){
        // hide the menu button, show the elements inline
        colapseButton.style.display="none";
        document.getElementById("break").classList='';
        loginButton.classList.add("loginBig");
        ulNav.classList.add("ulBig");
        for (var i = 0; i < navItems.length; i++ ) {
            navItems[i].classList.add("navBig");
        }
    }else{
        colapseButton.style.display="block";
        document.getElementById("break").classList='break';
        loginButton.classList.remove("loginBig");
        ulNav.classList.remove("ulBig");
        for (var i = 0; i < navItems.length; i++ ) {
            navItems[i].classList.remove("navBig");
        }
    }
}

window.addEventListener("resize", function () {
    w = window.innerWidth;
    onResize();
});
function colapse(){
    let content = document.getElementById("ulNav");
    // ty w3schools
    if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    
}
