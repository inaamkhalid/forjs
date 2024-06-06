
var change = document.querySelector("div");
var Lbtn = document.querySelector(".Large");
var Sbtn = document.querySelector(".Small");

console.log(Sbtn);
function largeSize(){
    change.classList.add("large");
    change.classList.remove("small");
}

function smallSize(){
    change.classList.add("small");
    change.classList.remove("large");
}

Lbtn.onclick=largeSize;
Sbtn.onclick=smallSize;