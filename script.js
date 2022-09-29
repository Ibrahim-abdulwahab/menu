const all=document.getElementById("all");
const allbreakfast=document.getElementById("allbreakfast");
const alllunch=document.getElementById("alllunch");
const allshakes=document.getElementById("allshakes");
const alldinner=document.getElementById("alldinner");

const breakfast3=document.getElementById("breakfast3");
const lunch1=document.getElementById("lunch1");
const shake3=document.getElementById("shake3");
const breakfast1=document.getElementById("breakfast1");
const lunch2=document.getElementById("lunch2");
const shake1=document.getElementById("shake1");
const breakfast2=document.getElementById("breakfast2");
const lunch3=document.getElementById("lunch3");
const shake2=document.getElementById("shake2");
const dinner=document.getElementById("dinner");

const show=()=>{
    breakfast3.className="meal";
    lunch1.className="meal";
    shake3.className="meal";
    breakfast1.className="meal";
    lunch2.className="meal";
    shake1.className="meal";
    breakfast2.className="meal";
    lunch3.className="meal";
    shake2.className="meal";
    dinner.className="meal";
}

all.addEventListener("click",show)

const showBreakfast=()=>{
    lunch1.className="none";
    shake3.className="none";
    lunch2.className="none";
    shake1.className="none";
    lunch3.className="none";
    shake2.className="none";
    dinner.className="none";
    breakfast1.className="meal";
    breakfast2.className="meal";
    breakfast3.className="meal";
}

allbreakfast.addEventListener("click",showBreakfast)

const showLunch = ()=>{
    breakfast3.className="none";
    shake3.className="none";
    breakfast1.className="none";
    shake1.className="none";
    breakfast2.className="none";
    shake2.className="none";
    dinner.className="none";
    lunch1.className="meal";
    lunch2.className="meal";
    lunch3.className="meal";
}

alllunch.addEventListener("click",showLunch)

const showShakes = ()=>{
    breakfast3.className="none";
    shake3.className="meal";
    breakfast1.className="none";
    shake1.className="meal";
    breakfast2.className="none";
    shake2.className="meal";
    dinner.className="none";
    lunch1.className="none";
    lunch2.className="none";
    lunch3.className="none";
}

allshakes.addEventListener("click",showShakes)

const showDinner = ()=>{
    breakfast3.className="none";
    shake3.className="none";
    breakfast1.className="none";
    shake1.className="none";
    breakfast2.className="none";
    shake2.className="none";
    dinner.className="meal";
    lunch1.className="none";
    lunch2.className="none";
    lunch3.className="none";
}
alldinner.addEventListener("click",showDinner)