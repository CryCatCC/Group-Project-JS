burger = document.getElementById("burger");
nav_menu = document.getElementsByClassName("nav_menu")[0];
dropbtn = document.getElementsByClassName("dropbtn")[0];
burger.addEventListener("click",()=>{
    burger.classList.toggle("on");
    nav_menu.classList.toggle("burgered");
    ddc = document.getElementsByClassName("dropdown-content")[0];
    ddc.classList.toggle("normal");
})
dropbtn.addEventListener("click",()=>{
    ddc = document.getElementsByClassName("dropdown-content")[0];
    ddc.classList.toggle("show");
    ddc.classList.toggle("normal");
})