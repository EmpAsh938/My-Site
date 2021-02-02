const about = document.querySelector('.details');
const scroll = document.querySelector('.scroll');
const sublist = document.querySelectorAll('.sublist');
const listCategory = document.querySelectorAll('.list-category');
const submit = document.querySelector('.submit');
const form = document.querySelector('form');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelector('.menu-links');
const close = document.querySelector('.close');
const nav = document.querySelector('nav');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.close-modal');


// Skills listing
listCategory.forEach(list => {
    list.addEventListener('click', (e) => {
    if (e.currentTarget.dataset.list === "1") {
        if (!sublist[0].classList.contains('active-height')){
            sublist[0].classList.add('active-height')
        } else {
            sublist[0].classList.remove('active-height')
        }
    } else if (e.currentTarget.dataset.list === "2") {
        if (!sublist[1].classList.contains('active-height')){
            sublist[1].classList.add('active-height')
        } else {
            sublist[1].classList.remove('active-height')
        }
    } else if (e.currentTarget.dataset.list === "3") {
        if (!sublist[2].classList.contains('active-height')){
            sublist[2].classList.add('active-height')
        } else {
            sublist[2].classList.remove('active-height')
        }
    }

})});


// top to bottom button
window.addEventListener('scroll', toggle);

function toggle(){
    const actualHeight = (window.innerHeight + window.scrollY);
    const bottom = about.offsetTop + about.offsetHeight;
    if (actualHeight > bottom) {
        scroll.classList.add('show');
    } else {
        scroll.classList.remove('show');
    }
}

// Message Form
submit.addEventListener('click', submitMessage);
form[0].addEventListener('submit', submitMessage);
function submitMessage(e){
    // alert('Currently not available!')
    e.preventDefault();
    modal.classList.add('modal-active');

}

modalClose.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('modal-active');
})

// Side Menu
menu.addEventListener('click', menuToggle);
close.addEventListener('click', menuToggle)

function menuToggle(){
    if (!menuLinks.classList.contains('menu-active')) {
        menuLinks.classList.add('menu-active');
    } else {
        menuLinks.classList.remove('menu-active');
    }
}

// navbar
window.addEventListener('scroll', e => {
    if (scrollY > nav.getBoundingClientRect().height / 2){
        nav.classList.add('menubar-active');
    } else {
        nav.classList.remove('menubar-active');
    }
})