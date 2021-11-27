// / Consegna:
// // Dati tre array contenenti:
// //  - una lista ordinata di 5 immagini,
// //  - una lista ordinata dei relativi 5 luoghi e
// //  - una lista di 5 news,
// // creare un carosello come nella foto allegata.
// // MILESTONE 1
// // Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo l’immagine grande a sinistra e le thumbnails sulla destra in modo da poter stilare lo slider; avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull’aspetto logico.
// // MILESTONE 2
// // Adesso rimuoviamo tutto il markup statico e inseriamo le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal. Al termine di questa fase ci ritroveremo con lo stesso slider, ma costruito dinamicamente attraverso JavaScript.
// // MILESTONE 3
// // Al click dell’utente sulle frecce verso l’alto o verso il basso, l’immagine attiva diventa visibile in formato grande a sinistra e nel suo angolo in basso a destra dovranno essere aggiunti i relativi:
// //  - titolo e
// //  - testo.
// // Allo stesso tempo nelle miniature l’immagine attiva dovrà apparire in evidenza rispetto alle altre.

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
     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',     'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
 ]

const itemsSx = document.querySelector(".slider-sx");
 const itemsDx = document.querySelector(".slider-dx")



// creo gli elementi 
for (let i = 0; i < items.length; i++) {
    

    //se sono al primo elemento aggiungo classe first e active
    let classElement = '';
    if (i == 0) {
        classElement = "first active";
    } else if (i == items.length - 1) { //se sono nell'ultimo aggiungo classe last
        classElement = "last";
    }
    
    let tag= 
    `<div class="items-sx ${classElement}">
        <img src="${items[i]}" alt="">
    <div class="text">
        <h2>${title[i]}</h2>
        <p>${text[i]}</p>
    </div>`;
    
    let thumbs = `
    <div class="thumb ${classElement}">
                    <img src="${items[i]}" alt="">
                </div>
    `
    itemsSx.innerHTML += tag;
    itemsDx.innerHTML += thumbs;

}
const buttonNext = document.querySelector(".slider-dx .next");
const buttonPrev = document.querySelector(".slider-dx .prev");




buttonNext.addEventListener ("click",function() {
    // devo cercare gli elementi con actvie ma prima devo crarli su js
    
    const itemSxActive = document.querySelector(".slider-sx .items-sx.active");

    const itemDxActive = document.querySelector(".slider-dx .thumb.active");


    // questo punto è da ripassare in quanto mi ha fatto perdere troppo tempo
    // creo listClasses per poter vedere le classi di quell'elemento
    // last false è un valore boolean quindi vero o falso che servirà dopo da inserire nell'if.
    // dopo faccio un for che gira per tutte le classi presenti in quell'elemento, quindi .lenght
    // a seguire ogni giro di listClasses verrà controllato per vedere se è last, in quel caso si entra nell'else
    let listClasses = itemSxActive.classList;
    let last = false;
    console.log(listClasses);
    for (let i = 0; i < listClasses.length; i++) {
        if (listClasses[i] == "last") {
            last = true;
        }
    }
   

   
if (last == false) {
    // rimuovere la classe active e...
    itemSxActive.classList.remove("active");
    // ...passarla a quello successivo
    let imgActive = itemSxActive.nextElementSibling;
    imgActive.classList.add("active"); 
} 

// let listClassesDx = itemDxActive.classList.contains('last');
let listClassesDx = itemDxActive.classList;
for (let i = 0; i < listClasses.length; i++) {
    if (listClassesDx[i] == "last") {
        last = true
    }
}
if (last == false) {
    itemDxActive.classList.remove("active");
    let imgDxActive = itemDxActive.nextElementSibling;
    imgDxActive.classList.add("active");

}


    // adesso è possibile scorrere le immagini verso il basso
});


buttonPrev.addEventListener ("click",function() {
    // devo cercare gli elementi con actvie ma prima devo crarli su js
    
    const itemSxActive = document.querySelector(".slider-sx .items-sx.active");

    const itemDxActive = document.querySelector(".slider-dx .thumb.active");
    
   
    // questo punto è da ripassare in quanto mi ha fatto perdere troppo tempo
    // creo listClasses per poter vedere le classi di quell'elemento
    // last false è un valore boolean quindi vero o falso che servirà dopo da inserire nell'if.
    // dopo faccio un for che gira per tutte le classi presenti in quell'elemento, quindi .lenght
    // a seguire ogni giro di listClasses verrà controllato per vedere se è last, in quel caso si entra nell'else
    let listClasses = itemSxActive.classList;
    let first = false;
    console.log(listClasses);
    for (let i = 0; i < listClasses.length; i++) { 
        // fai il giro di listClasses, se trovi first last diventa true altrimenti non fare nulla
        if (listClasses[i] == "first") {
            first = true;
        }
    }
   
// se last diventa true fai quello che c'e scitto altrimenti non fare nulla
   
if (first == false) {
    // rimuovere la classe active e... 
    itemSxActive.classList.remove("active");
    // ...passarla a quello successivo
    let imgActive = itemSxActive.previousElementSibling;
    imgActive.classList.add("active");
    
   
} 


// let listClassesDx = itemDxActive.classList.contains('last');
let listClassesDx = itemDxActive.classList;
for (let i = 0; i < listClasses.length; i++) {
    if (listClassesDx[i] == "first") {
        first = true
    }
}
if (first == false) {
    itemDxActive.classList.remove("active");
    let imgDxActive = itemDxActive.previousElementSibling;
    imgDxActive.classList.add("active");
} 


 
console.log(first);
    // adesso è possibile scorrere le immagini verso l alto
});