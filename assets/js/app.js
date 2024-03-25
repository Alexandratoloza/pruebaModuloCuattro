// Clase Animal
class Animal {
    constructor(nombre, edad, comentarios, imagen, Audio) {
        this.nombre = nombre;
        this.edad = edad;
        this.comentarios = comentarios;
        this.imagen = imagen;
        this.Audio =Audio;
    }
}

// Clase Leon
class Leon extends Animal {
    constructor(nombre, edad, comentarios, imagen, Audio) {
        super(nombre, edad, comentarios, imagen,Audio);
        this.imagen = 'assets/imgs/leon.png'; // Ruta de la imagen del león
        this.Audio = 'assets/sounds/Rugido.mp3'
    }
}

// Clase Lobo
class Lobo extends Animal {
    constructor(nombre, edad, comentarios, imagen, Audio) {
        super(nombre, edad, comentarios, imagen, Audio);
        this.imagen = 'assets/imgs/Lobo.jpg';
        this.Audio = 'assets/sounds/Aullido.mp3';
    }
}

// Clase Oso
class Oso extends Animal {
    constructor(nombre, edad, comentarios, imagen, Audio) {
        super(nombre, edad, comentarios, imagen, Audio);
        this.imagen = 'assets/imgs/Oso.jpg';
        this.Audio = 'assets/sounds/Gruñido.mp3';
    }
}

// Clase Serpiente
class Serpiente extends Animal {
    constructor(nombre, edad, comentarios, imagen, Audio) {
        super(nombre, edad, comentarios, imagen, Audio);
        this.imagen = 'assets/imgs/Serpiente.jpg';
        this.Audio = 'assets/sounds/Siseo.mp3';
    }
}

// Clase Aguila
class Aguila extends Animal {
    constructor(nombre, edad, comentarios, imagen, Audio) {
        super(nombre, edad, comentarios, imagen, Audio);
        this.imagen = 'assets/imgs/Aguila.png';
        this.Audio = 'assets/sounds/Chillido.mp3';
    }
}

// Función autoejecutable IIFE
(async () => {
    // Realizar consulta asíncrona para obtener las imágenes correspondientes a los animales
    try {
        const response = await fetch('animales.json');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error al obtener las imágenes:', error);
    }
})();

// Función para registrar un nuevo animal
function registrarAnimal() {
    // Obtener valores del formulario
    const nombreAnimal = document.getElementById('listaAnimal').value;
    const edadAnimal = document.getElementById('edadAnimal').value;
    const comentariosAnimal = document.getElementById('comentarios').value;
   
    // Crear instancia del animal seleccionado
    let nuevoAnimal;
    switch (nombreAnimal) {
        case 'Leon':
            nuevoAnimal = new Leon(nombreAnimal, edadAnimal, comentariosAnimal,  '' );
            break;
        case 'Lobo':
            nuevoAnimal = new Lobo(nombreAnimal, edadAnimal, comentariosAnimal, '');
            break;
        case 'Oso':
            nuevoAnimal = new Oso(nombreAnimal, edadAnimal, comentariosAnimal, '');
            break;
        case 'Serpiente':
            nuevoAnimal = new Serpiente(nombreAnimal, edadAnimal, comentariosAnimal,  '');
            break;
        case 'Aguila':
            nuevoAnimal = new Aguila(nombreAnimal, edadAnimal, comentariosAnimal, '');
            break;
        default:
            console.error('Animal no válido');
    }
    // Agregar el nuevo animal a la tabla
    agregarAnimalATabla(nuevoAnimal);
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
        <p><strong>Comentarios:</strong> ${animal.comentarios}</p>
        <p><strong>sonido:</strong> ${animal.sonido}</p>
      </div>
    `;
    tabla.appendChild(nuevoElemento);
}

// Evento click del botón "Agregar"
document.getElementById('BtnRegistrar').addEventListener('click', () => {



});





