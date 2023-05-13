const sections = document.querySelectorAll('section');

sections.forEach(section => {
    let x = 0;
    let y = 0;
    let xSpeed = Math.random() * 2 - 1; // generate random x speed between -1 and 1
    let ySpeed = Math.random() * 2 - 1; // generate random y speed between -1 and 1

    function animate() {
        x += xSpeed;
        y += ySpeed;

        // check if section hits the edges of the screen
        if (x + section.offsetWidth > window.innerWidth || x < 0) {
            xSpeed = -xSpeed;
        }
        if (y + section.offsetHeight > window.innerHeight || y < 0) {
            ySpeed = -ySpeed;
        }

        section.style.transform = `translate(${x}px, ${y}px)`;
        requestAnimationFrame(animate);
    }

    animate();
});

// prevent zooming on mobile devices
document.addEventListener('touchmove', function (event) {
    event.preventDefault();
}, { passive: false });
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const href = link.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView({ block: 'center', behavior: 'smooth' });
    });
});
