const toggleButton = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}
