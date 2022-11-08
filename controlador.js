//contolando etiquetas con el DOM

//1. Almacensr en memoria es decir crear una variable
//la etiqueta que quiero controlar

let etiquetaImagen=document.getElementById("fotografia");
//console.log(etiquetaImagen);
//2 controlar etiquetas
//2.1 Controlar es cambiar la fuente (SRC) de una etiqueta
etiquetaImagen.src="./img/img1.jpg";

//2.2 Controlar es cambiar el contenido de texto de una etiqueta
let etiquetaTitulo=document.getElementById("titulo")
etiquetaTitulo.textContent="Historia"

//2.3 controlar es agregar estilos

etiquetaTitulo.classList.add("fuente","alineado")
//2.4 controlar es remover estilos
let etiquetaParrafo=document.getElementById("parrafo")
etiquetaParrafo.classList.remove("text-danger")

//2.5 controlar es detectar eventos

let etiquetaBoton=document.getElementById("boton")
etiquetaBoton.addEventListener("click",function(evento){
    alert("estamos haciendo clic")
})