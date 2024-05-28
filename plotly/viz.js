fetch('data.json')
    .then(response => response.json())
    .then(run_visualization);

function run_visualization(data) {
    // Trier les données par population
    sortByCountryPopulation(data);

    // Je prend les 30 premiers element du tableau
    const top30Countries = data.slice(0, 30);

    // Extraire les noms des pays et leurs populations pour le graphique
    const countries = top30Countries.map(country => country.country).reverse(); // Inverser l'ordre pour avoir les pays avec la plus grande population à droite
    const populations = top30Countries.map(country => country.population).reverse(); // Inverser l'ordre pour correspondre aux noms des pays comme en haut

    // Déterminer les couleurs en fonction de la population (dégradé de vert à rouge)
    const colors = populations.map(population => {
        // Convertir la population en une valeur entre 0 et 1
        const normalizedPopulation = population / Math.max(...populations);
        // Interpoler entre le vert et le rouge en fonction de la population
        const r = Math.floor(255 * normalizedPopulation);
        const g = Math.floor(255 * (1 - normalizedPopulation));
        return `rgb(${r}, ${g}, 0)`; // Utiliser une couleur RVB en fonction de la population
    });

    // Créer les données de trace pour le graphique en barres
    const trace = {
        x: countries, // Noms des pays sur l'axe des x
        y: populations, // Populations sur l'axe des y
        type: 'bar',
        marker: { color: colors } // Utiliser les couleurs déterminées pour chaque barre
    };

    // Options de mise en page pour le graphique
    const layout = {
        title: 'Top 30 Pays avec la Plus Grande Population',
        xaxis: { title: 'Pays'}, // l'axe X
        yaxis: { title: 'Population'},  // L'axe Y
        plot_bgcolor: 'rgba(0, 0, 0, 0)', // Couleur de fond du graphique
    };

    // Créer le graphique en barres avec Plotly
    Plotly.newPlot('bar-chart', [trace], layout);
}

// Fonction pour trier les données par population (du plus grand au plus petit)
function sortByCountryPopulation(data) {
    data.sort((a, b) => b.population - a.population);
}
