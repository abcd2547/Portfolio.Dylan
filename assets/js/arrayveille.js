console.log("début arrey")

const veillearticles = [
    { titre: "Produit A", prix: 19.99, description: "Un excellent produit pour commencer." },
    { titre: "Produit B", prix: 29.99, description: "Un produit de qualité pour les amateurs." },
    { titre: "Produit C", prix: 39.99, description: "Idéal pour les professionnels." },
    { titre: "Produit D", prix: 49.99, description: "Un produit haut de gamme pour les connaisseurs." },
    { titre: "Produit E", prix: 59.99, description: "Le top du top pour les experts." }
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
        <h6 class="card-subtitle mb-2 text-muted">Prix: ${produit.prix}€</h6>
        <p class="card-text">${produit.description}</p>
      </div>
    </div>
  `;
  
  // Ajoute la carte dans le conteneur "listedupanier"
  listedupanier.insertAdjacentHTML("beforeend", cardHTML);
});