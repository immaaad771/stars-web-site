const header = document.querySelector("header");

window.addEventListener ("scroll" , function (){
    header.classList.toggle ("sticky", window.scrollY > 0);
});

// document.getElementById('heart').onclick = function(){
//     document.getElementById('heart').replaceWith = <a href="#" id="heart"><i class='bx bxs-heart'></i></a>  ; 
// }