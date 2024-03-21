export class Animales {
    #name
    #imagen
    #edad
    #comentarios
    #sonido
    
    constructor(name, imagen, edad, comentarios, sonido) {
        this.#name = name;
        this.#imagen = imagen;
        this.#edad = edad;
        this.#comentarios = comentarios;
        this.#sonido = sonido;


    }

    get name() {
        return this.#name
    }

    get imagen() {
        return this.#imagen
    }

    get edad (){
        return this.#edad
    }
    get comentarios(){
        return this.#comentarios
    }
    get sonido(){
        return this.#sonido
    }

    set name(newName) {
        this.#name = newName
    }

    set imagen(newImagen) {
        this.#imagen = newImagen
    }
    set edad (newEdad){
        this.#edad = newEdad
    }
    set comentarios (newComentarios){
        this.#comentarios = newComentarios
    }
    set sonido  (newSonido){
        this.#sonido = newSonido
    }


    reproducirSonido() {
        const audio = new Audio(this.sonido);
        audio.play();
    }
    pintarHTML() {
        console.log('estoy pintando al personaje')
    }
};


class Leon extends Animales {
    constructor (name, edad, comentarios, imagen, sonido){
        super (name, edad, comentarios, imagen, sonido);
    }
    pintarHTML(elemento) {
        console.log(`Estoy pintando al ${this.name}`)
        elemento.innerHTML += `<li> ${this.name} <img src"${this.imagen}"</li>`

    }
}

class Lobo extends Animales {
    constructor (name, edad, comentarios, imagen, sonido){
        super (name, edad, comentarios, imagen, sonido);
    }
    
    pintarHTML(elemento) {
        console.log(`Estoy pintando al ${this.name}`)
        elemento.innerHTML += `<li> ${this.name} <img src"${this.imagen}"</li>`

    }
}
class Oso extends Animales {
    constructor (name, edad, comentarios, imagen, sonido){
        super (name, edad, comentarios, imagen, sonido);
    }
    pintarHTML(elemento) {
        console.log(`Estoy pintando al ${this.name}`)
        elemento.innerHTML += `<li> ${this.name} <img src"${this.imagen}"</li>`

    }
}

class Serpiente extends Animales {
    constructor (name, edad, comentarios, imagen, sonido){
        super (name, edad, comentarios, imagen, sonido);
    }
    pintarHTML(elemento) {
        console.log(`Estoy pintando al ${this.name}`)
        elemento.innerHTML += `<li> ${this.name} <img src"${this.imagen}"</li>`

    }
}
class Aguila extends Animales {
    constructor (name, edad, comentarios, imagen, sonido){
        super (name, edad, comentarios, imagen, sonido);
    }
    pintarHTML(elemento) {
        console.log(`Estoy pintando al ${this.name}`)
        elemento.innerHTML += `<li> ${this.name} <img src"${this.imagen}"</li>`

    }
};
// Array
let animales = [];

let animalSeleccionado;

export async function imagenes (){
    try{
        const imagenes = await new Promise (resolve => {
            setTimeout (( ) => {
                resolve({
                    Leon: 'assets/imgs/leon.png',
                    Lobo: 'assets/imgs/Lobo.jpg',
                    Oso: 'assets/imgs/Oso.jpg',
                    Serpiente: 'assets/imgs/Serpiente.jpg',
                    aguila: 'assets/imgs/Aguila.png',

                });
            }, 1000);
        });
        return imagenes;

    } catch (e){
        console.e('error', error);
        throw error;

    }

}
(async () => {

    try {
        const response = await fetch("animales.json")
        //console.log(response)
        if (response.ok === false) {

            throw {
                codigo: 404,
                mensaje: "No esta en el listado"
            }
        }
        const data = await response.json()
        animales = data
        console.log(data)
    } catch (e) {
        console.log(e)
    }
})();





const btnRegistrar = document.querySelector('#btnRegistrar')
const formControl = document.querySelector("#formControl")
const lisTanimal = document.querySelector("#lisTanimal")
const edadAnimal = document.querySelector("#edadAnimal")
const comentarios = document.querySelector("#comentarios")
const player = document.querySelector("#comentarios")
const exampleModal = document.querySelector("#exampleModal")




btnRegistrar.addEventListener('click', async (evento) => {
    evento.preventDefault()
    console.log('me estas procesando')
    console.log(lisTanimal.value)
    //console.log(edadAnimal.value)
    //console.log(comentarios.value)
   console.log(animales) // array
    let AnimalEncontrado = animales.find((item) => item.name.toLowerCase() === lisTanimal.value.toLowerCase());
    

    //console.log(AnimalEncontrado)

    switch (lisTanimal.value) {
        case "Leon":
            animalSeleccionado = new Leon (AnimalEncontrado.name, AnimalEncontrado.imagen)
            animalSeleccionado.pintarHTML(lisTanimal);
            break
        case "Lobo":
            animalSeleccionado = new Lobo(AnimalEncontrado.name, AnimalEncontrado.imagen)
            animalSeleccionado.pintarHTML(lisTanimal);
            
            break
        case "Oso":
            animalSeleccionado= new Oso(AnimalEncontrado.name, AnimalEncontrado.imagen)
            
            animalSeleccionado.pintarHTML(lisTanimal);
            
            break
        case "Serpiente":
            animalSeleccionado= new Serpiente(AnimalEncontrado.name, AnimalEncontrado.imagen)
            animalSeleccionado.pintarHTML(lisTanimal);
            
            break
        case "Aguila":
            animalSeleccionado = new Aguila(AnimalEncontrado.name, AnimalEncontrado.imagen)
            animalSeleccionado.pintarHTML(lisTanimal);
            
            break
    }
    
    animalSeleccionado.reproducirSonido ();

    lisTanimal.value = '';
    edadAnimal.value = '';
    comentarios.value = '';

    const fila = document.createElement ('div');
    fila.classList.add('animal-row');
    fila.innerHTML =  
    `<div class="animal-cell">${animales.name}</div>`
    `<div class="animal-cell">${animales.edad}</div>`
    `<div class="animal-cell">${animales.comentarios}</div>`
   ` <div class="animal-cell"><img src="${animales.imagen}" alt="${animales.nombre}" class="animal-image"></div>`;


tablaAnimales.appendChild(fila);
{

}// else {
   // alert ('Complete los datos del animal')
//} //catch (e){
  //  console.log ('error', error)
//}
    

});

// imagen del animal 
document.addEventListener ('click', async (event) => {
    const target = event.target; 
    if(target.classList.contains('animales-imagen')){
        const animalName = target.alt;

        console.log('Detalle del animal:', animalName);

    }
});

document.addEventListener('click', async (event) => {
    const target = event.target;
    if(target.id === 'btnAudio'){
        const audioSrc = target.dataset.audioSrc;
        
    }
})


