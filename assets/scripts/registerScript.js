const btnl = document.querySelector("#login") ;
const btnR = document.querySelector("#register")
const toggle = document.querySelector(".toggle-box");
const toggleRight =  document.querySelector(".toggle-right")
const toggleLeft = document.querySelector(".toggle-left")
const regist = document.querySelector(".register-form");
const login = document.querySelector(".login-form");
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

const mq = window.matchMedia("(max-width: 767px)");

if (mq.matches) {
btnl.addEventListener('click' ,()=>{
 toggleRight.classList.remove("toggle-right-P");
 toggleLeft.classList.add("toggle-left-active")
 regist.classList.add("register-form-not-active")
})
}
