// Consegna:
// Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
// MILESTONE 1
// Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
// Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
// Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
// MILESTONE 3
// Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
// BONUS 1:
// Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.
// BONUS 2:
// Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
// Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.


const path = "./assets/consegna/img/"

let images = [
    '01.webp',//0
    '02.webp',//1
    '03.webp',//2
    '04.webp',//3
    '05.webp'//4

]

const imaginePrincipale = document.querySelector('.items');
const imaginiThumbs = document.querySelector('.thumbs')

console.log( imaginiThumbs, imaginePrincipale)

for( let i = 0; i < images.length; i++){

    imaginePrincipale.innerHTML += `
    <div class="item">
        <img src="${path}${images[i]}" alt="">
    </div>
    `

    imaginiThumbs.innerHTML += `
    <div class="thumb">
        <img src="${path}${images[i]}" alt="">
    </div>
    `
}

let active = 0
imaginePrincipale.getElementsByClassName('item')[active].classList.add('active')
imaginiThumbs.getElementsByClassName('thumb') [active].classList.add('active')

const prev = document.querySelector('.prev')
prev.addEventListener('click', function(){

    if(active = 0){
        active = images.length - 1
    }else{
        active--;
    }

    document.querySelector('.item .active').classList.remove('active')
    imaginePrincipale.getElementsByClassName('item')[active].classList.add('active')

    document.querySelector('.thumb .active').classList.remove('active')
    imaginePrincipale.getElementsByClassName('thumb')[active].classList.add('active')



})