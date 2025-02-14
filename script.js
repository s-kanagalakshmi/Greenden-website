//Declaration
let sideNav=document.getElementById("sideNavbar")
let menuIcon=document.getElementById("menu-icon")
let closeNavbar=document.getElementById("close-nav")
//Main function
menuIcon.addEventListener("click",function(){
    sideNav.style.right=0
})
closeNavbar.addEventListener("click",function(){
    sideNav.style.right="-50%"
})