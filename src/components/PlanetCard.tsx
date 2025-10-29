import { Link } from 'react-router-dom';

interface PlanetCardProps {
  name: string;
  climate: string;
  population: string;
  id: number;
};

export default function PlanetCard({ name, climate, population, id }: PlanetCardProps) {
  return (
    <Link
      to={`/planet/${id}`}
      className="block bg-gray-900 hover:bg-gray-800 border border-gray-800 rounded-xl p-5 transition-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-500/10"
    >
      <h3 className="text-xl font-bold text-yellow-400 mb-2">{name}</h3>
      <p className="text-gray-300"><strong>Climate:</strong> {climate}</p>
      <p className="text-gray-300"><strong>Population:</strong> {population}</p>
    </Link>
  )
}