// import images from '../assets/images/thumb';
const imgs = require.context('/public/imagesMin', true);


const crearGaleria = () => {
    const $galeria = document.querySelector( '.galeria-imagenes' );
    
    for (let i = 1; i < 13; i++) {
        const imagen = document.createElement( 'picture' );
        imagen.innerHTML = `
            <source srcset="assets/images/thumb/${i}.avif"" type="image/avif">
            <source srcset="assets/images/thumb/${i}.webp" type="image/webp">
            <img loading="lazy" width="200" height="300" src="assets/images/thumb/${i}.jpg" alt="Imagen Galeria">
        `;   
        $galeria.appendChild( imagen );   
    } 


    
    const imagen = document.createElement( 'picture' );
    // const imagenprueba = imgs( './imagen_vocalista' );
    // console.log( imagenprueba + '.avif' );
    const $prueba = document.querySelector( '.sobre-festival' );
    imagen.innerHTML = `
        <source srcset="${ imgs( './1.avif' ) }" type="image/avif">
        <source srcset="${ imgs( './imagen_vocalista.webp' ) }" type="image/webp">
        <img loading="lazy" width="200" height="300" src="${ imgs( './imagen_vocalista.jpg' ) }" alt="Imagen Galeria">
    `;   

    $prueba.appendChild(imagen);

    


}

const iniciarApp = () => {
    crearGaleria();
}


document.addEventListener( 'DOMContentLoaded', () => {
    iniciarApp();
} );