// Crear una lista de contactos
let listaDeContactos = ["Joel Fernandez", "Ricardo Perez", "Arley Benites"];

// Añadir un nuevo contacto
function agregarContacto(nombreApellido) {
  listaDeContactos.push(nombreApellido);
}

// Borrar un contacto
function borrarContacto(nombreApellido) {
  const index = listaDeContactos.indexOf(nombreApellido);
  if (index !== -1) {
    listaDeContactos.splice(index, 1);
  } else {
    console.log("El contacto no existe en la lista");
  }
}

// Imprimir en consola
function imprimirContactos() {
  if (listaDeContactos.length === 0) {
    console.log("La lista de contactos está vacía.");
  } else {
    console.log("Lista de contactos:");
    listaDeContactos.forEach((contacto) => {
      console.log(contacto);
    });
  }
}