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
//Search Function
let inputString = document.getElementById("searchId");
let containerId = document.getElementById("containerId");
let list = containerId.querySelectorAll("div");

inputString.addEventListener("keyup", function (event) {
    let getInput = event.target.value.toUpperCase();
    list.forEach(item => {
        let productName=item.querySelector("h1").textContent
        if (productName.toUpperCase().indexOf(getInput) < 0) {
            item.style.display = "none";
        } else {
            item.style.display = "block";
        }
    });
})