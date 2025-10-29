import { Planet } from "@/types/types";

describe('Types', () => {
  it('should create a valid Planet object', () => {
    const planet: Planet = {
      name: 'Tatooine',
      rotation_period: '23',
      orbital_period: '304',
      diameter: '10465',
      climate: 'arid',
      gravity: '1 standard',
      terrain: 'desert',
      surface_water: '1',
      population: '200000',
      residents: [],
      films: [],
      url: 'https://swapi.dev/api/planets/1/',
    };
    expect(planet.name).toBe('Tatooine');
    expect(planet.residents).toHaveLength(0);
  });
});