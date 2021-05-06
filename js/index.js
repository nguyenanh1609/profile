function btnbar() {
    document.getElementById('menu-sub').style.transform = "translateX(0%)"
    document.getElementById("click-clear").style.display = "block"
    document.getElementById("menu-bar").style.display = "none"

}
function btnclose() {
    document.getElementById('menu-sub').style.transform = "translateX(110%)"
    document.getElementById("click-clear").style.display = "none"
    document.getElementById("menu-bar").style.display = "block"

}
function showhien() {
    document.getElementById('show-avatar').style.display = "block"
}
function showan() {
    document.getElementById('show-avatar').style.display = "none"
}



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop >=20 && document.documentElement.scrollTop > 20) {
        document.getElementById("home-cham").style.color="var(--vang)"
    } else {
    }
}

var x= screen.availHeight
console.log(x)