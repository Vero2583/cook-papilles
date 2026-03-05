// Sélection des éléments
const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');

// Affichage / masquage via le bouton
menuBtn.addEventListener('click', (event) => {
  event.stopPropagation(); // empêche le clic d'être propagé au document
  sidebar.classList.tXoggle('active');
});

// Gestion du clic à l’extérieur de la sidebar
document.addEventListener('click', (event) => {
  const isClickInsideSidebar = sidebar.contains(event.target);
  const isClickOnButton = menuBtn.contains(event.target);

// Si le clic n'est ni sur la sidebar, ni sur le bouton, on la ferme
  if (!isClickInsideSidebar && !isClickOnButton) {
    sidebar.classList.remove('active');
  }
});

// button dark 
const darkBtn = document.getElementById('dark')
const body = document.querySelector('body')

darkBtn.addEventListener('click', () => {
   document.body.classList.toggle('dark')
})

