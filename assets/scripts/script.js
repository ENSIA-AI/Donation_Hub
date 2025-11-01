const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        const overlay = document.getElementById('overlay');

        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            overlay.classList.toggle('active');
        });

        overlay.addEventListener('click', () => {
            navMenu.classList.remove('active');
            overlay.classList.remove('active');
        });