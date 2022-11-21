document.getElementById("boton").onclick = function (){
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    if (nombre == ""){
        alert("Rellene el nombre");
    }else if(email == ""){
        alert("Rellene el email");
    }
    else{
    alert("Enhorabuena " +  nombre +" Formulario Enviado");
}
};



