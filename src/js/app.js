// import images from '../assets/images/thumb';
const imgs = require.context('/public/imagesMin/thumb', true);
const imgsGrande = require.context('/public/imagesMin/grande', true);


const crearGaleria = () => {
    const $galeria = document.querySelector( '.galeria-imagenes' );
    
    for (let i = 1; i < 13; i++) {
        const imagen = document.createElement( 'picture' );
        imagen.innerHTML = `
            <source srcset="${ imgs( `./${i}.avif` ) }" type="image/avif">
            <source srcset="${ imgs( `./${i}.webp` ) }" type="image/webp">
            <img loading="lazy" width="200" height="300" src="${ imgs( `./${i}.jpg` ) }" alt="Imagen Galeria">
        `;

        imagen.onclick = () => {
            mostrarImagen( i );
        }

        $galeria.appendChild( imagen );   
    }    
}

const mostrarImagen = ( index ) => {
    
    const imagen = document.createElement( 'picture' );
        imagen.innerHTML = `
            <source srcset="${ imgsGrande( `./${index}.avif` ) }" type="image/avif">
            <source srcset="${ imgsGrande( `./${index}.webp` ) }" type="image/webp">
            <img loading="lazy" width="200" height="300" src="${ imgsGrande( `./${index}.jpg` ) }" alt="Imagen Galeria">
        `;

    // crear elemento
    const overlay = document.createElement( 'div' );
    overlay.appendChild( imagen );
    overlay.classList.add('overlay-galeria');

    overlay.onclick = () => {
        overlay.remove();
        $body.classList.remove('fijar-body');
    }

    // boton para cerrar ventana modal
    const cerrarModal = document.createElement('p');
    cerrarModal.textContent = 'X';
    cerrarModal.classList.add('btn-cerrar');

    const $body = document.querySelector( 'body' );

    cerrarModal.onclick = () => {
        overlay.remove();
        $body.classList.remove('fijar-body');
    }

    overlay.appendChild(cerrarModal);

    //añadirlo al html
    $body.appendChild( overlay );
    $body.classList.add('fijar-body');
}

//fijar barra de navegacion al dar scroll
const navegacionFija = () => {
    const $barra = document.querySelector('.header');
    const $sobreFestival = document.querySelector('.sobre-festival');

    window.addEventListener('scroll', () => {
        if($sobreFestival.getBoundingClientRect().top < 0){
            $barra.classList.add('fijo');
            document.body.classList.add('body-scroll');
        }else{
            $barra.classList.remove('fijo');
            document.body.classList.remove('body-scroll');
        }
    });
}

const iniciarApp = () => {
    crearGaleria();
    navegacionFija();
}


document.addEventListener( 'DOMContentLoaded', () => {
    iniciarApp();
} );