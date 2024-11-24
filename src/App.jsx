import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Menu from './components/Menu';
import InfoProd from './components/InfoProd';
import Affiche from './components/Affiche';
import Recherche from './components/Recherche';

function App() {
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    const fetchProduits = async () => {
      try {
        const response = await fetch('https://frecison.com/api/produits');
        const data = await response.json();
        setProduits(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des produits:", error);
        setProduits([
          {
            "id": "X0001F",
            "nom": "NUTELLA",
            "description": "Pâte à tartiner aux noisettes et au cacao. À conserver au sec et à l'abri de la chaleur. Contenance : 600 g.",
            "prix": "70",
            "categorie": "Petit déjeuner",
            "image": "nutella.webp"
          },
          {
            "id": "X0001M",
            "nom": "SCHAR",
            "description": "Pain aux noix moelleux sans gluten. Spécialement formulé pour les personnes intolérantes au gluten. Contenance : 300 g.",
            "prix": "40",
            "categorie": "Boulangerie",
            "image": "schar.webp"
          },
          {
            "id": "X0001R",
            "nom": "AIN SAISS",
            "description": "Eau minérale naturelle. Riche en calcium, magnésium, sodium et potassium. Contenance : 1,50 L.",
            "prix": "5",
            "categorie": "Eaux",
            "image": "ain-saiss.webp"
          }
        ]);
      }
    };

    fetchProduits();
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Menu />
        <main className="container mx-auto py-8">
          <Routes>
            <Route path="/" element={<InfoProd />} />
            <Route path="/liste" element={<Affiche produits={produits} />} />
            <Route path="/recherche" element={<Recherche produits={produits} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

