const navToggle = document.getElementById('nav-toggle');
const navList = document.getElementById('nav-list');

if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
        const isOpen = navList.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });
}