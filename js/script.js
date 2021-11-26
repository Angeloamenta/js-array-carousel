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

const containerText = document.querySelector(".container-text");


const containerDx = document.querySelector(".container-dx");

const imgContDx = document.querySelector(".img-container-dx");

// let buttonTop = `<i id="bt-up" class="fa-solid fa-angle-up"></i>`;

// let buttonBottom = `<i id="bt-down" class="fa-solid fa-angle-down"></i>`;

const buttonUp = document.getElementById("bt-up");

const buttonDown = document.getElementById("bt-down");

for (let index = 0; index < items.length; index++) {

    let imgDoc = `<img src="${items[index]}" alt="">`
    

    let titleDoc = `<h2>${title[index]}</h2>`

    let subTitle = `<p>${text[index]}</p>`

    let imgMini = `<img src="${items[index]}" alt="">`


    
    imgContainer.innerHTML += imgDoc;
    containerTitle.innerHTML += titleDoc;
    containerText.innerHTML += subTitle;
    imgContDx.innerHTML += imgMini
}


// containerDx.innerHTML +=buttonTop;
// containerDx.innerHTML +=buttonBottom;

// prendere lista di classi uguali
const imgTrue = document.querySelectorAll(".img-container img");

const imgMiniTrue = document.querySelectorAll(".img-container-dx img")

const titleText = document.querySelectorAll(".container-title-sub h2")

const textOnly = document.querySelectorAll(".container-text p")



// prendere primo ed ultimo elemento
imgTrue[0].classList.add("first", "active");

imgTrue[imgTrue.length -1].classList.add("last");

imgMiniTrue[0].classList.add("first", "active");

imgMiniTrue[imgTrue.length -1].classList.add("last");

titleText[0].classList.add("first", "active");

titleText[title.length -1].classList.add("last");

textOnly[0].classList.add("first", "active");

textOnly[text.length -1].classList.add("last");



buttonDown.addEventListener("click", function (){ 
    const imageActive = document.querySelector('.img-container .active');
  const dotActive = document.querySelector('.img-container-dx .active');
  const titleActive = document.querySelector('.container-title-sub .active');
  const textActive = document.querySelector('.container-text .active');

  let classes = imageActive.classList;
  let last = false;
  for (let index = 0; index < classes.length; index++) {
    console.log(index, classes[index]);
    if (classes[index] == 'last') {
       
      last = true;
    }
  }

  
  if (last == false) {
    imageActive.classList.remove('active');
    dotActive.classList.remove('active');
    titleActive.classList.remove('active');
    textActive.classList.remove('active');
    
    const imgNext = imageActive.nextElementSibling;
    const dotNext = dotActive.nextElementSibling;
    const titleNext = titleActive.nextElementSibling;
    const textNext = textActive.nextElementSibling;
    imgNext.classList.add('active');
    dotNext.classList.add('active');
    titleNext.classList.add('active');
    textNext.classList.add('active');
    buttonUp.classList.add('able');
  } else { 
    buttonDown.classList.remove('able');
  }
});

buttonUp.addEventListener("click", function (){ 
 
    const imageActive = document.querySelector('.img-container .active');
  const dotActive = document.querySelector('.img-container-dx .active');
  const titleActive = document.querySelector('.container-title-sub .active');
  const textActive = document.querySelector('.container-text .active');

  let classes = imageActive.classList;
  let last = false;
  for (let index = 0; index < classes.length; index++) {
    console.log(index, classes[index]);
    if (classes[index] == 'first') {
       
      last = true;
    }
  }

  
  if (last == false) {
    imageActive.classList.remove('active');
    dotActive.classList.remove('active');
    titleActive.classList.remove('active');
    textActive.classList.remove('active');
    
    const imgNext = imageActive.previousElementSibling;
    const dotNext = dotActive.previousElementSibling;
    const titleNext = titleActive.previousElementSibling;
    const textNext = textActive.previousElementSibling;
    imgNext.classList.add('active');
    dotNext.classList.add('active');
    titleNext.classList.add('active');
    textNext.classList.add('active');
    buttonDown.classList.add('able');
  } else { 
    buttonUp.classList.remove('able');
  }

});



