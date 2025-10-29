import { useEffect, useState } from 'react';
import axios from 'axios';
import PlanetCard from '../components/PlanetCard';
import Loader from '../components/Loader';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';

interface Planet {
  name: string;
  climate: string;
  population: string;
  url: string;
};

export default function Planets() {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchPlanets = async () => {
      setLoading(true);
      const response = await axios.get(`https://swapi.dev/api/planets/?page=${page}`);
      setPlanets(response.data.results);
      setLoading(false);
    }
    fetchPlanets();
  }, [page]);

  const filteredPlanets = planets.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <SearchBar value={search} onChange={setSearch} />

        {loading ? (
          <Loader />
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {filteredPlanets.map((planet) => {
              const id = planet.url.split('/').filter(Boolean).pop()
              return (
                <PlanetCard
                  key={id}
                  id={Number(id)}
                  name={planet.name}
                  climate={planet.climate}
                  population={planet.population}
                />
              )
            })}
          </div>
        )}

        <div className="flex justify-center mt-10">
          <Pagination
            current={page}
            totalPages={6}
            onChange={setPage}
          />
        </div>
      </div>
    </div>
  )
}