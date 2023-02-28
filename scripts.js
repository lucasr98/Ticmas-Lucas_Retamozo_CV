const buttonList = document.querySelector(".button-list");
const section = document.querySelectorAll(".section");
const footerSection = document.querySelectorAll(".footer-section");
let switchMenu = false;
let switchMenu2 = false;

window.addEventListener("click", (e)=>{
    const target = e.target;
    if(switchMenu2 === false){
        if(target.id === "menu"){
            menuDesplegable()
        }
        else if(target.classList.contains("button-list__item")){
            switchMenu = false;
            menuDesplegable();
        }
        else{
            switchMenu = true;
            menuDesplegable();
        }
    }
})

window.addEventListener("load", onResize);

window.addEventListener("resize", onResize);

function menuDesplegable(){
    if(switchMenu === false){
        buttonList.style.display = "flex";
        switchMenu = !switchMenu;
    }
    else{
        buttonList.style.display = "none";
        switchMenu = !switchMenu;
    }
}

const callback = (entries)=>{
    for(const entry of entries){
        if(entry.isIntersecting){
            entry.target.style.opacity = "1"
        }
        else{
            entry.target.style.opacity = "0"
        }
    }
}

function onResize(){
    if(window.innerWidth >= 1080){
        switchMenu2 = true;
        switchMenu = true;
        menuDesplegable();
    }
    else{
        switchMenu2 = false;
    }
}

const options = {
    rootMargin: '200px',
    threshold: 1.0
}

const observer = new IntersectionObserver(callback, options);

section.forEach(seccion=>{
    observer.observe(seccion);
})

footerSection.forEach(seccion=>{
    observer.observe(seccion);
})