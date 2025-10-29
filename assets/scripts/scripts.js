const btnl = document.querySelector("#login") ;
const btnR = document.querySelector("#register")
const toggle = document.querySelector(".toggle-box");
const toggleRight =  document.querySelector(".toggle-right")
const toggleLeft = document.querySelector(".toggle-left")
 btnl.addEventListener('click' ,()=>{
    toggle.classList.remove("toggle-box")
    toggle.classList.add("toggle-box-active")
    toggleRight.classList.remove("toggle-right");
    toggleLeft.classList.add("toggle-left-active")
})
 btnR.addEventListener('click' ,()=>{
    toggle.classList.remove("toggle-box-active")
    toggle.classList.add("toggle-box")
    toggleRight.style.display = "none";
    toggleLeft.style.display = "block";
})

