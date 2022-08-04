const links = document.querySelectorAll('.nav-link');
const section = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    section.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= ((sectionTop - sectionHeight) + 200)) {
            current = section.getAttribute('id');
        }
    })
    links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') == `#${current}`) {
            link.classList.add('active');
        }
    })
})