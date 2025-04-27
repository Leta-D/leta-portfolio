
function boo(){
    document.getElementById("topNavigator1").style.textDecorationLine = "none";
    document.getElementById("topNavigator2").style.textDecorationLine = "none";
    document.getElementById("topNavigator3").style.textDecorationLine = "none";
    document.getElementById("topNavigator4").style.textDecorationLine = "none";
}
function navigators(elementId){
    boo();
    let lee = document.getElementById(elementId);
    lee.style.textDecorationLine = "overline";
}

function hamburger(){
    // const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show');
}
