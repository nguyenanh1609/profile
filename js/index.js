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
    document.getElementById('icon-avatar').style.display = "none"
    document.getElementById('img-avatar').style.display = "block"
}
function showan() {

    document.getElementById('icon-avatar').style.display = "block"
    document.getElementById('img-avatar').style.display = "none"
}

function onmouseout() {
    
}