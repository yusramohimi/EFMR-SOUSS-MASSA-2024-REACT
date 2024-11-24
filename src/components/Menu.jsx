import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex gap-6 max-w-4xl mx-auto">
        <li>
          <Link to="/" className="hover:text-gray-300">
            Gestion Produits
          </Link>
        </li>
        <li>
          <Link to="/recherche" className="hover:text-gray-300">
            Recherche
          </Link>
        </li>
        <li>
          <Link to="/liste" className="hover:text-gray-300">
            Liste Produits
          </Link>
        </li>
      </ul>
    </nav>
  )
}
