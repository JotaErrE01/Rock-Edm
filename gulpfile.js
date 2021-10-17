const { parallel, src, dest } = require("gulp");
const imagemin = require( 'gulp-imagemin' );
const webp = require('gulp-webp');
const gulpAvif = require('gulp-avif');
// const cache = require('gulp-cache');

//formato webp
function imageWebp( done ) {

    const options = {
        quality: 50 // va de 0 a 100
    }

    src( 'public/img/**/*.{jpg, png}' )
        .pipe( webp( options ) )
        .pipe( dest( 'src/assets/img' ) )
    done();
}

//minificar imagenes jpg, png
function imageMin( done ) {

    const opciones = {
        optimizationLevel: 3,
    }

	src( 'public/img/**/*.{jpg, png}' )
		.pipe( imagemin( opciones ) )
		.pipe(dest('public/assets/images'))
    done();
}

//formato avif
function imageAvif ( done ){
    src('public/img/**/*.{jpg, png}')
        .pipe(gulpAvif({ quality: 50 }))
        .pipe(dest('public/assets/images'));
    done();
};

exports.image = parallel( imageMin, imageWebp, imageAvif );
// exports.image = imageMin;