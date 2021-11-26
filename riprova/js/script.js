// / Consegna:
// Dati tre array contenenti:
//  - una lista ordinata di 5 immagini,
//  - una lista ordinata dei relativi 5 luoghi e
//  - una lista di 5 news,
// creare un carosello come nella foto allegata.
// MILESTONE 1
// Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo l’immagine grande a sinistra e le thumbnails sulla destra in modo da poter stilare lo slider; avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull’aspetto logico.
// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal. Al termine di questa fase ci ritroveremo con lo stesso slider, ma costruito dinamicamente attraverso JavaScript.
// MILESTONE 3
// Al click dell’utente sulle frecce verso l’alto o verso il basso, l’immagine attiva diventa visibile in formato grande a sinistra e nel suo angolo in basso a destra dovranno essere aggiunti i relativi:
//  - titolo e
//  - testo.
// Allo stesso tempo nelle miniature l’immagine attiva dovrà apparire in evidenza rispetto alle altre.

const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

const itemsSx = document.querySelector(".items-sx");
const itemSub = document.querySelector(".items-sx");
const buttonNext = document.querySelector(".slider-dx .next");

const buttonPrev = document.querySelector(".slider-dx .prev");

console.log(buttonNext, buttonPrev);

buttonNext.addEventListener ("click",function() {
    // devo cercare gli elementi con actvie ma prima devo crarli su js

    const itemSxActive = document.querySelector(".slider-sx .items-sx.active");

    const itemDxActive = document.querySelector(".slider-dx .active");

    // rimuovere la classe active e...

    itemSxActive.classList.remove("active");
    itemDxActive.classList.remove("active");

    // ...passarla a quello successivo
    let imgActive = itemSxActive.nextElementSibling;
    let imgDxActive = itemDxActive.nextElementSibling;
    
    imgActive.classList.add("active");
    imgDxActive.classList.add("active");
    
    // adesso è possibile scorrere le immagini verso il basso
});