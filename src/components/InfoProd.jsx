import { useState } from 'react'

export default function InfoProd() {
  const [produit, setProduit] = useState({
    reference: '',
    nom: '',
    categorie: '',
    description: '',
    prix: '',
    image: ''
  })
  const [showInfo, setShowInfo] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowInfo(true)
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Gestion des produits</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Référence:</label>
            <input
              type="text"
              value={produit.reference}
              onChange={(e) => setProduit({...produit, reference: e.target.value})}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Nom Produit:</label>
            <input
              type="text"
              value={produit.nom}
              onChange={(e) => setProduit({...produit, nom: e.target.value})}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Catégorie Produit:</label>
            <select
              value={produit.categorie}
              onChange={(e) => setProduit({...produit, categorie: e.target.value})}
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="">Sélectionnez une catégorie</option>
              <option value="Petit déjeuner">Petit déjeuner</option>
              <option value="Boulangerie">Boulangerie</option>
              <option value="Eaux">Eaux</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Description:</label>
            <textarea
              value={produit.description}
              onChange={(e) => setProduit({...produit, description: e.target.value})}
              className="w-full px-3 py-2 border rounded-md h-24"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Prix:</label>
            <input
              type="number"
              value={produit.prix}
              onChange={(e) => setProduit({...produit, prix: e.target.value})}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Image Produit:</label>
            <input
              type="file"
              onChange={(e) => {
                if (e.target.files?.[0]) {
                  setProduit({...produit, image: URL.createObjectURL(e.target.files[0])})
                }
              }}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
            Valider
          </button>
        </form>

        {showInfo && (
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Information Produit :</h3>
            <ul className="space-y-2">
              <li>• Référence Produit: {produit.reference}</li>
              <li>• nom: {produit.nom}</li>
              <li>• Catégorie: {produit.categorie}</li>
              <li>• Prix: {produit.prix} DH</li>
            </ul>
            {produit.image && (
              <div className="mt-4">
                <img src={produit.image} alt={produit.nom} className="rounded-lg max-w-full h-auto" />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

