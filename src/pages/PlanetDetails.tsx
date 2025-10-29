import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/Loader';
import PersonCard from '../components/PersonCard';
import { Person, Planet } from '@/types/types';

export default function PlanetDetails() {
  const { id } = useParams();
  const [planet, setPlanet] = useState<Planet | null>(null);
  const [residents, setResidents] = useState<Person[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlanet = async () => {
      const res = await axios.get(`https://swapi.dev/api/planets/${id}/`);
      setPlanet(res.data);

      const residentData = await Promise.all(
        res.data.residents.map(async (url: string) => {
          const personRes = await axios.get(url);
          return personRes.data;
        })
      )
      setResidents(residentData);
      setLoading(false);
    };

    fetchPlanet();
  }, [id]);

  if (loading || !planet) return <Loader />;

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/"
          className="inline-block mb-6 text-yellow-400 hover:text-yellow-300 transition-colors"
        >
          ← Back to planets
        </Link>

        <h1 className="text-4xl font-bold text-yellow-400 mb-4">{planet.name}</h1>

        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 bg-gray-900 p-6 rounded-xl border border-gray-800">
          <div><strong>Climate:</strong> {planet.climate}</div>
          <div><strong>Gravity:</strong> {planet.gravity}</div>
          <div><strong>Population:</strong> {planet.population}</div>
          <div><strong>Terrain:</strong> {planet.terrain}</div>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Films</h3>
          <ul className="list-disc list-inside text-gray-300">
            {planet.films.map((film, i) => (
              <li key={i}>{film}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-4">Residents</h3>
          {residents.length === 0 ? (
            <p className="text-gray-400 italic">No known residents.</p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              {residents.map((person, i) => (
                <PersonCard
                  key={i}
                  name={person.name}
                  hair={person.hair_color}  
                  eyes={person.eye_color} 
                  gender={person.gender}
                  species={person.species} 
                  vehicles={[]}     
                />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}