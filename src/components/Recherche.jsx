import { useState } from 'react'

export default function Recherche({ produits }) {
  const [categorie, setCategorie] = useState('')
  const [resultats, setResultats] = useState([])

  const handleRecherche = () => {
    if (!categorie) {
      setResultats([])
      return
    }
    const filteredProduits = produits.filter(
      (produit) => produit.categorie.toLowerCase() === categorie.toLowerCase()
    )
    setResultats(filteredProduits)
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Recherche Par Catégorie</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={categorie}
          onChange={(e) => setCategorie(e.target.value)}
          placeholder="Entrez une catégorie"
          className="flex-grow px-3 py-2 border rounded-md"
        />
        <button 
          onClick={handleRecherche}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Rechercher
        </button>
      </div>
      {resultats.length > 0 ? (
        <div>
          <h3 className="font-semibold mb-2">Résultat:</h3>
          <ul className="space-y-2">
            {resultats.map((produit) => (
              <li key={produit.reference}>
                • {produit.nom} | prix: {produit.prix}dh
              </li>
            ))}
          </ul>
        </div>
      ) : (
        categorie && <p className="text-red-500">aucun produit trouvé</p>
      )}
    </div>
  )
}

