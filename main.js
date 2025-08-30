document.querySelector(".Iniciar_Sesion button").addEventListener("click", function(){
    cambiarTexto();

})

function cambiarTexto() {
    document.querySelector(".Iniciar_Sesion button").innerText = "Cerrar sesión";
}



document.querySelector(".agregar_btn button").addEventListener("click", function(){
    desaparecerButton();

})

function desaparecerButton(){
    document.querySelector(".agregar_btn button").style.display = "none";

}

document.querySelectorAll(".meGusta_btn button").forEach(function(boton){
    boton.addEventListener("click", function(){
        meGustaPostAlarm(boton);
    });
});


function meGustaPostAlarm(boton){
    
    let titulo = boton.closest("div").parentElement.querySelector("h2").innerText;

    
    alert(titulo + " was liked");

    
    let textoActual = boton.innerText;
    let numeroLikes = parseInt(textoActual); 

    
    numeroLikes++;

    
    boton.innerText = numeroLikes + " me gusta";
}
