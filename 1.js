function loguear()
{
var user= document.getElementById("usuario").value;
var pass= document.getElementById("pass").value;
if(user=="" && pass==""){
    alert("Usuario y contraseña validos");
    window.location="index.html";
    
} else {
    alert("Intenta de Nuevo");
}
} 


