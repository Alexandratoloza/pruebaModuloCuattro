class Animal {
    constructor(nombre, edad, comentarios, imagen, sonido) {
        this._nombre = nombre;
        this._edad = edad;
        this._comentarios = comentarios;
        this._imagen = imagen;
        this._sonido = sonido;
    }

   
    get nombre() {
        return this._nombre;
    }
    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }

   
    get edad() {
        return this._edad;
    }
    set edad(nuevaEdad) {
        this._edad = nuevaEdad;
    }

    
    get comentarios() {
        return this._comentarios;
    }
    set comentarios(nuevosComentarios) {
        this._comentarios = nuevosComentarios;
    }

    
    get imagen() {
        return this._imagen;
    }
    set imagen(nuevaImagen) {
        this._imagen = nuevaImagen;
    }

   
    get sonido() {
        return this._sonido;
    }
    set sonido(nuevoSonido) {
        this._sonido = nuevoSonido;
    }
};


async function cargarDatosAnimales() {
    try {
        const response = await fetch('animales.json');
        const data = await response.json();
        return data;
    } catch (error) {
        return [];
    }
}

(async () => {
    const data = await cargarDatosAnimales();
    //console.log(data);
})();


async function registrarAnimal() {
    const nombreAnimal = document.getElementById('listaAnimal').value;
    const edadAnimal = document.getElementById('edadAnimal').value;
    const comentariosAnimal = document.getElementById('comentarios').value;

   
    const data = await cargarDatosAnimales();
    const animalSeleccionado = data.find(animal => animal.name === nombreAnimal);

    if (animalSeleccionado) {
        const nuevoAnimal = new Animal(nombreAnimal, edadAnimal, comentariosAnimal, `assets/imgs/${animalSeleccionado.imagen}`, `assets/sounds/${animalSeleccionado.sonido}`);
        agregarAnimalATabla(nuevoAnimal);
        mostrarImagen(nuevoAnimal.imagen);
      mostrarComentarios(nuevoAnimal.comentarios);
    } else {
        console.error('Animal no encontrado en los datos.');
    }
  

}

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


function mostrarImagen(rutaImagen) {
    const preview = document.getElementById("preview");
   
    preview.innerHTML = "";
   
    const imagen = document.createElement("img");
    imagen.src = rutaImagen;
    imagen.classList.add("img-fluid");
    preview.appendChild(imagen);
}


document.getElementById('BtnRegistrar').addEventListener('click', registrarAnimal);
