//meny//
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
//åpne-prosjeter//
function apneModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function lukkModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}   