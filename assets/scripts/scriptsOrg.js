
const filterBtn =document.querySelector(".filter-btn")
const options = document.querySelector(".options");

filterBtn.addEventListener("click", (e)=>{
     e.preventDefault();
 options.classList.toggle("options-not-active")
})
