// Sélection des éléments du DOM
const countSpan = document.getElementById('count_beginning');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');
const surpriseBtn = document.getElementById('surprise');
const birthdayText = document.getElementById('birthday-text'); // Sélection de l'élément du DOM pour le texte d'anniversaire

// Initialisation du compteur
let count = 0;

// Fonction pour mettre à jour l'affichage du compteur
function updateCount() {
    countSpan.textContent = count;
}

// Fonction pour incrémenter le compteur
function incrementCount() {
    count++;
    updateCount();
}

// Fonction pour décrémenter le compteur
function decrementCount() {
    count--;
    updateCount();
}

// Fonction pour réinitialiser le compteur
function resetCount() {
    count = 0;
    updateCount();
}

// Fonction pour afficher la surprise
function surprise() {
    count = 19;
    updateCount();
    birthdayText.style.display = 'block';
}

// Événements pour les boutons
incrementBtn.addEventListener('click', incrementCount);
decrementBtn.addEventListener('click', decrementCount);
resetBtn.addEventListener('click', resetCount);
surpriseBtn.addEventListener('click', surprise);
