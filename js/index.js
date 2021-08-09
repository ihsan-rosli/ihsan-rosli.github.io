const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')
/* simpan class html dalam var */

navToggle.addEventListener('click', () => { 
    /* apa tindakan akan kita buat kat var tu */

    document.body.classList.toggle('nav-open');
    /* bila tindakan dibuat, css ni akan aktif */ //sdfkjsdk
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
        /* bila tindakan dibuat, css ni akan disable */
    })
})