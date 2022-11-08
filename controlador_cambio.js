let etiquetaImagen=document.getElementById("fotografia");
let etiquetaTitulo=document.getElementById("titulo")
let etiquetaParrafo=document.getElementById("parrafo")
let etiquetaMenu=document.getElementById("menu")
let etiquetaFondo=document.getElementById("fondo")
let etiquetaAudio=document.getElementById("audio")

let etiquetaBoton=document.getElementById("boton")
etiquetaBoton.addEventListener("click",function(evento){
    etiquetaImagen.src="./img/img1.jpg";
    etiquetaTitulo.textContent="Capitulo 1"
    etiquetaParrafo.textContent="De la mano de su creador, Masami Kurumada, nace en 1986 el primer volumen del manga shonen1 de Los Caballeros del Zodíaco (Saint Seiya), publicado en la revista Shonen Jump. Las productoras Bandai y Toei Animation, casi instantáneamente, lanzaron la adaptación animada en Japón de la famosa saga del Santuario. El éxito no tardó en propagarse en Occidente, así que durante las tres décadas siguientes el universo expandido de Los Caballeros… crece exponencialmente: secuelas, precuelas, spin-offs y numerosas películas basadas en los personajes (esta sería la sexta)."
    etiquetaMenu.classList.add("color")
    etiquetaFondo.classList.add("fondo")
    etiquetaAudio.src="./audio/audio1.mp3"
})