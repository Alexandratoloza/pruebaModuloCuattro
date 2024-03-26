class Animal {
    constructor(nombre, edad, comentarios, imagen, sonido) {
        this._nombre = nombre;
        this._edad = edad;
        this._comentarios = comentarios;
        this._imagen = imagen;
        this._sonido = sonido;
    }

    // Getter y Setter para el nombre
    get nombre() {
        return this._nombre;
    }
    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }

    // Getter y Setter para la edad
    get edad() {
        return this._edad;
    }
    set edad(nuevaEdad) {
        this._edad = nuevaEdad;
    }

    // Getter y Setter para los comentarios
    get comentarios() {
        return this._comentarios;
    }
    set comentarios(nuevosComentarios) {
        this._comentarios = nuevosComentarios;
    }

    // Getter y Setter para la imagen
    get imagen() {
        return this._imagen;
    }
    set imagen(nuevaImagen) {
        this._imagen = nuevaImagen;
    }

    // Getter y Setter para el sonido
    get sonido() {
        return this._sonido;
    }
    set sonido(nuevoSonido) {
        this._sonido = nuevoSonido;
    }
};



// Función para cargar los datos del archivo JSON
async function cargarDatosAnimales() {
    try {
        const response = await fetch('animales.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al cargar los datos de los animales:', error);
        return [];
    }
}

// Función autoejecutable IIFE para cargar los datos de los animales al inicio
(async () => {
    const data = await cargarDatosAnimales();
    // Si se cargan los datos correctamente, puedes hacer uso de ellos aquí
    console.log(data);
})();

// Función para registrar un nuevo animal
async function registrarAnimal() {
    // Obtener valores del formulario
    const nombreAnimal = document.getElementById('listaAnimal').value;
    const edadAnimal = document.getElementById('edadAnimal').value;
    const comentariosAnimal = document.getElementById('comentarios').value;

    // Cargar datos de animales
    const data = await cargarDatosAnimales();

    // Encontrar el animal seleccionado en los datos
    const animalSeleccionado = data.find(animal => animal.name === nombreAnimal);

    // Crear instancia del animal seleccionado
    if (animalSeleccionado) {
        const nuevoAnimal = new Animal(nombreAnimal, edadAnimal, comentariosAnimal, `assets/imgs/${animalSeleccionado.imagen}`, `assets/sounds/${animalSeleccionado.sonido}`);
        // Agregar el nuevo animal a la tabla
        agregarAnimalATabla(nuevoAnimal);
        // Mostrar imagen en la vista previa
        mostrarImagen(nuevoAnimal.imagen);
        // Mostrar comentarios del animal
        mostrarComentarios(nuevoAnimal.comentarios);
    } else {
        console.error('Animal no encontrado en los datos.');
    }
  

}

// Función para agregar un animal a la tabla
function agregarAnimalATabla(animal) {
    const tabla = document.getElementById('registrarAnimales');
    const nuevoElemento = document.createElement('div');
    nuevoElemento.classList.add('animal-card');
    nuevoElemento.innerHTML = `
      <div class="animal-img">
        <img src="${animal.imagen}" alt="${animal.nombre}" />
      </div>
      <div class="animal-info">
        <h3>${animal.nombre}</h3>
        <p><strong>Edad:</strong> ${animal.edad}</p>
        <p><strong>Comentarios:</strong> ${animal.comentarios} </p>
        <audio controls>
          <source src="${animal.sonido}" type="audio/mp3">
        </audio>
      </div>
    `;
    tabla.appendChild(nuevoElemento);
}

// Función para mostrar la imagen en la vista previa
function mostrarImagen(rutaImagen) {
    const preview = document.getElementById("preview");
    // Limpiar el contenido previo de la vista previa
    preview.innerHTML = "";
    // Crear un elemento de imagen
    const imagen = document.createElement("img");
    // Establecer la ruta de la imagen como la fuente del elemento de imagen
    imagen.src = rutaImagen;
    // Establecer clases para el estilo si es necesario
    imagen.classList.add("img-fluid");
    // Agregar la imagen a la vista previa
    preview.appendChild(imagen);
}


document.getElementById('BtnRegistrar').addEventListener('click', registrarAnimal);
