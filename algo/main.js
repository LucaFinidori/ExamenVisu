function twoSum(array, target) {
    const map = new Map();
    
    // Parcourir le tableau
    for (let i = 0; i < array.length; i++) {
        const complement = target - array[i];
        
        // Vérifier si le complément existe dans la map
        if (map.has(complement)) {
            // Si oui, retourner les indices
            return [map.get(complement), i];
        }
        
        // Si le complément n'existe pas, enregistrer l'index courant dans la map
        map.set(array[i], i);
    }
    
    // Si aucune paire n'est trouvée, retourner du vide
    return [];
}

//Avec les exemple du cours
const array = [3, 2, 4];
const target = 6;
const indices = twoSum(array, target);
console.log(indices); // Cela devrait afficher [0, 2] SI on lance en LIVE

