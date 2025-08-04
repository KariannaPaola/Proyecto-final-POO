var contactos=[
  { nombre: "ana lopez", telefono: "+584143417985"},
  { nombre: "carlos oropeza", telefono: "+584143487245"},
  { nombre: "maría barile", telefono: "+584143457975"},
  { nombre: "juan guerrero", telefono: "+584143419585"},
  { nombre: "diego chirinos", telefono: "+584143413687"},
  { nombre: "ana ortega", telefono: "+584143415005"}
]

const btnBuscar= document.querySelector("#btnBuscar")

btnBuscar.addEventListener("click", () => {
  const nombreIngresado= document.querySelector("#nombreIngresado").value.toLowerCase()
  if(nombreIngresado===""){
    alert("Debes ingresar un nombre o apellido")
    return
  }
  let contactosFiltrados = contactos.filter((contacto) => contacto.nombre.includes(nombreIngresado))
  if(contactosFiltrados.length===0)
    console.log("No hay coincidencaas ")
  else if (contactosFiltrados.length>=1)
    for(let contacto of contactosFiltrados)
    console.log(contacto.nombre + " " + contacto.telefono)
  }
);







