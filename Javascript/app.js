const header = document.querySelector("header");
const section = document.querySelector("section");
const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector(".navbar a");
const navBar = document.querySelector(".navbar")
const btnx = document.querySelector("bx-x");


window.addEventListener('scroll', function(){
    header.classList.toggle("sticky", window.scrollY > 0);
});

window.addEventListener('scroll', function(){
    if(window.scrollY > 0){
    menuIcon.style.color = 'black';
    }else{
        menuIcon.style.color = 'White';
    }
});
menuIcon.addEventListener('click',function(){
     menuIcon.classList.toggle('bx-x');
     navBar.classList.toggle('open');
     btnx.style.color = 'white';     
});
window.addEventListener('scroll',function(){
    menuIcon.classList.remove('bx-x');
    navBar.classList.remove('open');
});
