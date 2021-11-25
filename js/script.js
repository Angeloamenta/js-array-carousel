// Consegna:
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

const slider = document.querySelector(".slider");
const containerSx = document.querySelector (".container-dx");
const imgContainer = document.querySelector(".img-container");

const containerTitle = document.querySelector(".container-title-sub");

const containerDx = document.querySelector(".container-dx");

const imgContDx = document.querySelector(".img-container-dx");

const buttonUp = document.querySelector(".container-dx .fa-angle-up");

const buttonDown = document.querySelector(".container-dx .fa-angle-down");

for (let index = 0; index < items.length; index++) {
    let imgDoc = `<img src="${items[index]}" alt="">`
    console.log(imgDoc);

    let titleDoc = `<h2>${title[index]}</h2>`

    let subTitle = `<p>${text[index]}</p>`

    let imgMini = `<img src="${items[index]}" alt="">`


    
    imgContainer.innerHTML += imgDoc;
    containerTitle.innerHTML += titleDoc;
    containerTitle.innerHTML += subTitle;
    imgContDx.innerHTML += imgMini
}

let buttonTop = `<i class="fa-solid fa-angle-up"></i>`;

let buttonBottom = `<i class="fa-solid fa-angle-down"></i>`;

containerDx.innerHTML +=buttonTop;
containerDx.innerHTML +=buttonBottom;

// prendere lista di classi uguali
const imgTrue = document.querySelectorAll(".img-container img");

const imgMiniTrue = document.querySelectorAll(".img-container-dx img")

// prendere primo ed ultimo elemento
imgTrue[0].classList.add("first", "active");

imgTrue[imgTrue.length -1].classList.add("last");
