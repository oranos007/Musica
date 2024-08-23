
const closeButton=document.querySelector(".close-button");
const collaps=document.getElementById("navbar");
const toggleButton=document.querySelector(".toggle-button");


closeButton.addEventListener("click",function(){
  collaps.style.display="none"
  toggleButton.style.display="flex"
    
  })

toggleButton.addEventListener("click",function(){
  collaps.style.display="flex"
  toggleButton.style.display="none"
    
  })


// preloader
var loader=document.getElementById("preloader");
window.addEventListener("load",function(){
  loader.style.display="none";
})



