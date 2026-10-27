document.addEventListener('DOMContentLoaded'), () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menuLinks = document.querySelectorAll('meny a')
    if (menuToggle && menuLinks.length > 0) {
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.ariaChecked = false;
            });
        });
    }
};

