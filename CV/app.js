window.addEventListener('load', function(){
    const body = document.querySelector('#item');
    body.style.display = 'none';

    var send = document.getElementById("ouvrir");

    send.addEventListener("click", function(){
        const boite =document.getElementById("mise");

        body.style.display = 'block';
        boite.style.display = 'none';
        boite.style.pointerEvents = 'none'; 

    })
    
});
const tete = document.querySelector(".tete"),
Experience = document.querySelector(".Experience"), 
Competence = document.querySelector('.competence'), 
interet = document.querySelector(".interete");
var voir = document.querySelector("#voir");
var voir1 = document.querySelector("#voir1");
var voir2 = document.querySelector("#voir2");



// Premier click 
voir.addEventListener('click', function(){
Experience.classList.add("show");
voir.style.opacity = '0';
voir.style.display = 'none';
}, true);
//deuxieme click
voir1.addEventListener('click', function(){
Competence.classList.add("show");
voir1.style.opacity = '0';
voir1.style.display = 'none';  
}, true);
voir2.addEventListener('click', function(){
interet.classList.add("show");
voir2.style.opacity = '0';
voir2.style.display = 'none';  
}, true);
