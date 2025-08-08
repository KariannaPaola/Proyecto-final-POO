const btnEnviar=document.getElementById("btnEnviar");
const divPadre=document.getElementById("divPadre");
const nuevaTareaRegex=  /^[a-zA-Z0-9 ]+$/;

var tareas=[]

function agregarTarea(){
  const inputUser=document.getElementById("inputUser").value
  if(inputUser==""){
    alert("El campo no debe estar vacio")
  }
  else if(nuevaTareaRegex.test(inputUser)==false){
    alert("Ingrese una tarea válida")
  }
  else
    tareas.push(inputUser)
    mostrarTarea()
}

function eliminar(index){
  tareas.splice(index, 1);
  mostrarTarea()
}

function mostrarTarea(){
  divPadre.textContent=""
  for(let tarea of tareas){
    console.log(tareas)
    const nuevaTarea = document.createElement("p");
    nuevaTarea.innerHTML =`<input type="checkbox"> ${tarea} <button onclick="eliminar(${tareas.indexOf(tarea)})"><i class="fa-solid fa-trash"></i></button>`; 
    nuevaTarea.classList.add('centrado')
    divPadre.appendChild(nuevaTarea);
  }
}

