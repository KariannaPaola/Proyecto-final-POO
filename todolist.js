const btnEliminar= document.getElementsByClassName("btnEliminar")
const tarea=document.getElementById("tarea")
const btnAgregar= document.getElementById("btnAgregar")
const divCompleto=document.getElementById("divCompleto")

const padre=document.getElementById("padre")

btnAgregar.addEventListener("click", () => {
  const inputTarea=document.getElementById("inputUsuario").value
  const nuevaTarea= document.createElement('div');
  nuevaTarea.innerHTML=divCompleto.innerHTML + inputTarea;
  padre.appendChild(nuevaTarea);
});

btnEliminar[0].addEventListener("click", () => {
  console.log("hola")
});




