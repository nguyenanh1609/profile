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
let home=document.getElementById('home').offsetTop
let about=document.getElementById('about').offsetTop
let hocvan=document.getElementById('hoc-van').offsetTop
let ngonngu=document.getElementById('ngonngu').offsetTop
let thanhtich=document.getElementById('thanhtich').offsetTop
let contact=document.getElementById('contact').offsetTop

let body=document.body.offsetHeight
console.log(home);console.log(about);
console.log(hocvan);console.log(ngonngu);
console.log(thanhtich);


console.log(contact);
console.log(body);
let x=0;
console.log(document.body.scrollTop);
console.log(document.documentElement.scrollTop)


document.getElementById("home-cham").style.background="var(--vang)"


window.onscroll= function(){
    if( document.documentElement.scrollTop <=930 )
    {
        document.getElementById("home-cham").style.background="var(--vang)"
        document.getElementById("infor-cham").style.background="0"
        document.getElementById("ho-van-cham").style.background="0"
        document.getElementById("ngonngu-cham").style.background="0"
        document.getElementById("thanh-tich-cham").style.background="0"
        document.getElementById("lien-he-cham").style.background="0"
        // document.getElementById("Copyrights").style.color="blue"
    }
    else if(document.documentElement.scrollTop <=1870)
    {
        document.getElementById("home-cham").style.background="0"
        document.getElementById("infor-cham").style.background="var(--vang)"
        document.getElementById("ho-van-cham").style.background="0"
        document.getElementById("ngonngu-cham").style.background="0"
        document.getElementById("thanh-tich-cham").style.background="0"
        document.getElementById("lien-he-cham").style.background="0"
        // document.getElementById("Copyrights").style.color="#fff"
    }
    else if(document.documentElement.scrollTop <=2800)
    {
        document.getElementById("home-cham").style.background="0"
        document.getElementById("infor-cham").style.background="0"
        document.getElementById("ho-van-cham").style.background="var(--vang)"
        document.getElementById("ngonngu-cham").style.background="0"
        document.getElementById("thanh-tich-cham").style.background="0"
        document.getElementById("lien-he-cham").style.background="0"
        // document.getElementById("Copyrights").style.color="#FF8151"
    }
    else if(document.documentElement.scrollTop <=3730)
    {
        document.getElementById("home-cham").style.background="0"
        document.getElementById("infor-cham").style.background="0"
        document.getElementById("ho-van-cham").style.background="0"
        document.getElementById("ngonngu-cham").style.background="var(--vang)"
        document.getElementById("thanh-tich-cham").style.background="0"
        document.getElementById("lien-he-cham").style.background="0"
        // document.getElementById("Copyrights").style.color="#0082FF"
    }
    else if(document.documentElement.scrollTop <=4660)
    {
        document.getElementById("home-cham").style.background="0"
        document.getElementById("infor-cham").style.background="0"
        document.getElementById("ho-van-cham").style.background="0"
        document.getElementById("ngonngu-cham").style.background="0"
        document.getElementById("thanh-tich-cham").style.background="var(--vang)"
        document.getElementById("lien-he-cham").style.background="0"
        // document.getElementById("Copyrights").style.color="#3CFF00"
    }
    else if(document.documentElement.scrollTop >4660)
    {
        document.getElementById("home-cham").style.background="0"
        document.getElementById("infor-cham").style.background="0"
        document.getElementById("ho-van-cham").style.background="0"
        document.getElementById("ngonngu-cham").style.background="0"
        document.getElementById("thanh-tich-cham").style.background="0"
        document.getElementById("lien-he-cham").style.background="var(--vang)"
        // document.getElementById("Copyrights").style.color="red"
    }

}