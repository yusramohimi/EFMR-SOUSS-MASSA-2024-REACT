export default function Affiche({ produits }) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Liste des produits</h2>
      <div className="grid gap-4">
        <div className="grid grid-cols-6 font-semibold bg-gray-100 p-4 rounded">
          <div>Référence</div>
          <div>Nom Produit</div>
          <div>Description</div>
          <div>Prix</div>
          <div>Catégorie</div>
          <div>Image</div>
        </div>
        {produits.map((produit) => (
          <div key={produit.id} className="grid grid-cols-6 border-b p-4">
            <div>{produit.id}</div>
            <div>{produit.nom}</div>
            <div>{produit.description}</div>
            <div>{produit.prix}</div>
            <div>{produit.categorie}</div>
            <div>
              {produit.image && (
                <img src={produit.image} alt={produit.nom} className="w-12 h-12 object-cover rounded" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

