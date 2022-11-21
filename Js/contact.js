document.getElementById("boton").onclick = function (){
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let terms = document.getElementById("terms").checked;

    if (nombre == ""){
        alert("Rellene el nombre");
    }else if(email == ""){
        alert("Rellene el email");
    }else if(terms == false){
        alert("Acepte terminos y condiciones")
    }
    else{
    alert("Enhorabuena " +  nombre +" Formulario Enviado");
}
};



