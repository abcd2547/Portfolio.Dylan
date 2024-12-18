console.log("début arrey")

const veillearticles = [
    { titre: "connexion 5G", description: "une exellente rapidité" },
    { titre: "licence", description: "les opérateurs doivent obtenir plusieurs licence" },
    { titre: "surveillance", description: "Les antennes sont surveillées régulièrement" },
    { titre: "consommateurs", description: "avantage de la 5G et comment en bénéficier" },
  ];
  // Sélectionne l'élément avec l'ID "listedupanier" pour insérer les produits
const listedupanier = document.getElementById("listedupanier");

// Parcourt le tableau de produits et génère des cartes Bootstrap pour chaque produit
veillearticles.forEach(produit => {
  // Crée une div de type "card" pour chaque produit
  const cardHTML = `
    <div class="card mb-3" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${produit.titre}</h5>
        <p class="card-text">${produit.description}</p>
      </div>
    </div>
  `;
  
  // Ajoute la carte dans le conteneur "listedupanier"
  listedupanier.insertAdjacentHTML("beforeend", cardHTML);
});