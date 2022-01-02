// feuille javascript faite main 
//(inspiré de tutoriels sur internet mais pas de copié collé)

const sep = document.querySelector('.separateur');
const div = document.querySelector('.carousel');
const boxone = document.querySelector('.boxinfo-1');
const boxtwo = document.querySelector('.boxinfo-2');
const boxthree = document.querySelector('.boxinfo-3');
const boxfour = document.querySelector('.boxinfo-4');
const linkone = document.querySelector('.pres-1');
const linktwo = document.querySelector('.pres-2');
const linkthree = document.querySelector('.pres-3');
const cloudone = document.querySelector('.nuage-1');
const cloudtwo = document.querySelector('.nuage-2');
const cloudthree = document.querySelector('.nuage-3');
const cloudfour = document.querySelector('.nuage-4');
const littlecloud = document.querySelectorAll('div.small');
const carte = document.querySelector('.map');
const mapinfo1 = document.querySelector('.explication-map');
const mapinfo2 = document.querySelector('.adresse');


let hauteur = div.clientHeight;
let hauteur2 = 1650;
let hauteur3 = 2900;

window.addEventListener('scroll', () => {

    console.log(hauteur3);

    if(window.scrollY > hauteur) {
        sep.classList.add('scroll');
    }
    else {
        sep.classList.remove('scroll');
    }

    if(window.scrollY > (hauteur - 300)) {
        boxone.classList.add('scroll');
    }

    if(window.scrollY > hauteur - 150) {
        boxtwo.classList.add('scroll');
    }

    if(window.scrollY > hauteur) {
        boxthree.classList.add('scroll');
    }

    if(window.scrollY > hauteur + 100) {
        boxfour.classList.add('scroll');
    }

    if(window.scrollY > hauteur + 350) {
        linkone.classList.add('scroll');
        linktwo.classList.add('scroll');
        linkthree.classList.add('scroll');
    }

    if(window.scrollY > hauteur2) {
        cloudone.classList.add('scroll');
    }
    
    if(window.scrollY > hauteur2 + 200) {
        cloudtwo.classList.add('scroll');
    }
    
    if(window.scrollY > hauteur2 + 400) {
        cloudthree.classList.add('scroll');
        for(let i = 0; i < littlecloud.length; i ++) {
            littlecloud[i].classList.add('scroll');
        }
    }

    if(window.scrollY > hauteur2 + 600) {
        cloudfour.classList.add('scroll');
    }

    if(window.scrollY > hauteur3 - 300) {
        mapinfo1.classList.add('scroll');
    }

    if(window.scrollY > hauteur3 - 100) {
        mapinfo2.classList.add('scroll');
    }

    if(window.scrollY > hauteur3) {
        carte.classList.add('scroll');
    }
    else {
        carte.classList.remove('scroll');
    }
    
})