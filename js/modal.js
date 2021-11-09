const abrirPlaza = document.querySelector(".targetPlaza");
const modalPlazas = document.querySelector(".mPlaza");
const cerrarPlaza = document.querySelector(".modalBoton");


abrirPlaza.addEventListener("click", () => {
    modalPlazas.classList.add("abrirModal");
});

cerrarPlaza.addEventListener("click", () => {
    modalPlazas.classList.remove("abrirModal");
});

const abrirEscuela = document.querySelector(".targetEscuela");
const modalEscuela = document.querySelector(".mEscuela");
const cerrarEscuela = document.querySelector(".modalBoton2");


abrirEscuela.addEventListener("click", () => {
    modalEscuela.classList.add("abrirModal");
});

cerrarEscuela.addEventListener("click", () => {
    modalEscuela.classList.remove("abrirModal");
});

//MODAL IGLESIA
const abrirIglesia = document.querySelector(".targetIglesia");
const modalIglesia = document.querySelector(".mIglesia");
const cerrarIglesia = document.querySelector(".bIglesia");


abrirIglesia.addEventListener("click", () => {
    modalIglesia.classList.add("abrirModal");
});

cerrarIglesia.addEventListener("click", () => {
    modalIglesia.classList.remove("abrirModal");
});


//MODAL CINES
const abrirCine = document.querySelector(".targetCine");
const modalCine = document.querySelector(".mCine");
const cerrarCine = document.querySelector(".bCine");


abrirCine.addEventListener("click", () => {
    modalCine.classList.add("abrirModal");
});

cerrarCine.addEventListener("click", () => {
    modalCine.classList.remove("abrirModal");
});


//MODAL UNIVERSIDAD
const abrirUni = document.querySelector(".targetUni");
const modalUni = document.querySelector(".mUni");
const cerrarUni = document.querySelector(".bUni");


abrirUni.addEventListener("click", () => {
    modalUni.classList.add("abrirModal");
});

cerrarUni.addEventListener("click", () => {
    modalUni.classList.remove("abrirModal");
});


//MODAL LUGARES
const abrirLugar = document.querySelector(".targetLugar");
const modalLugar = document.querySelector(".mLugar");
const cerrarLugar = document.querySelector(".bLugar");


abrirLugar.addEventListener("click", () => {
    modalLugar.classList.add("abrirModal");
});

cerrarLugar.addEventListener("click", () => {
    modalLugar.classList.remove("abrirModal");
});