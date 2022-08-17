const about = document.querySelector('.details');
const scroll = document.querySelector('.scroll');
const sublist = document.querySelectorAll('.sublist');
const listCategory = document.querySelectorAll('.list-category');
const submit = document.querySelector('.submit');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelector('.menu-links');
const close = document.querySelector('.close');
const nav = document.querySelector('nav');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.close-modal');
const cname = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const form = document.getElementById('message-form');

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
    }  else if (e.currentTarget.dataset.list === "4") {
        if (!sublist[3].classList.contains('active-height')){
            sublist[3].classList.add('active-height')
        } else {
            sublist[3].classList.remove('active-height')
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
form.addEventListener('submit', submitMessage);
function submitMessage(e){
    // alert('Currently not available!')
    e.preventDefault();
    let cname_value = cname.value;
    let email_value = email.value;
    let message_value = message.value;
    if(!cname_value || !email_value || !message_value) {
        alert('Empty Fields');
        return;
    }
    const formData = new FormData(form);
    fetch('https://formspree.io/f/myyvyozr', {
        method: 'post',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {

        if(response.ok) {
            alert("Thanks for your submisssion");
            form.reset();
        } else {
            alert("Oops! There was a problem submiiting your form.");
        }
    }).catch(error => {
        alert("Oops! There was a problem submiiting your form.");
    })
}

modalClose.addEventListener('click', () => {
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