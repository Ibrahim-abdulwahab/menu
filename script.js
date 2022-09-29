const all=document.getElementById("all");
const allbreakfast=document.getElementById("allbreakfast");
const alllunch=document.getElementById("alllunch");
const allshakes=document.getElementById("allshakes");
const alldinner=document.getElementById("alldinner");

const breakfasts=document.getElementsByClassName("breakfast");
const lunches=document.getElementsByClassName("lunch");
const shakes=document.getElementsByClassName("shake");
const dinners=document.getElementsByClassName("dinner");
const allitems=document.getElementsByClassName("meal");

const show=()=>{
    for (let i=0; i<allitems.length;i++){
        allitems[i].setAttribute("visibility", "true")
    }
}

all.addEventListener("click",show)

const showBreakfast=()=>{
    for (let i=0; i<allitems.length;i++){
        allitems[i].setAttribute("visibility", "false")
    }
    for (let i=0; i<breakfasts.length;i++){
        breakfasts[i].setAttribute("visibility", "true")
    }
}

allbreakfast.addEventListener("click",showBreakfast)

const showLunch = ()=>{
    for (let i=0; i<allitems.length;i++){
        allitems[i].setAttribute("visibility", "false")
    }
   for (let i=0; i<lunches.length;i++){
        lunches[i].setAttribute("visibility", "true")
    }
}

 alllunch.addEventListener("click",showLunch)

const showShakes = ()=>{
    for (let i=0; i<allitems.length;i++){
        allitems[i].setAttribute("visibility", "false")
    }
   for (let i=0; i<shakes.length;i++){
        shakes[i].setAttribute("visibility", "true")
    }
}

allshakes.addEventListener("click",showShakes)

const showDinner = ()=>{
    for (let i=0; i<allitems.length;i++){
        allitems[i].setAttribute("visibility", "false")
    }
   for (let i=0; i<dinners.length;i++){
        dinners[i].setAttribute("visibility", "true")
    }
}
alldinner.addEventListener("click",showDinner)