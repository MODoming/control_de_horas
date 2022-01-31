
var admin = {usuario: "Maximiliano", pasword: "admin", tipo: "admin"}
var entradaUsuario = document.querySelector("#usser");
var entradaPasw = document.querySelector("#pasw");
var botonIngresar = document.querySelector("#ingresar");

//document.getElementById("controles").style.display = "none";
botonIngresar.addEventListener("click", function(event){
    event.preventDefault();
    if ((admin.usuario === entradaUsuario.value) && (admin.pasword === entradaPasw.value)){
       if (admin.tipo === "admin"){
            document.getElementById("saludo").innerHTML="Bienvenid@ " + admin.usuario;
            document.getElementById("saludo").style.display = "block";
            document.getElementById("entrada").style.display = "none";
            document.getElementById("titulo2").style.display = "none";
            document.getElementById("controles").style.display = "block";
       } else {
           alert("Esta ingresando un alumno")
       }
    } else {
        alert("Los datos no son correctos");
    }});

