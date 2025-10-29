import axios from 'axios';
import * as swapi from '../services/swapi';
import { Planet } from '../types/types';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('SWAPI functions', () => {
  afterEach(() => jest.clearAllMocks());

  it('getPlanets should normalize unknown fields', async () => {
    const apiResponse = {
      data: {
        count: 1,
        next: null,
        previous: null,
        results: [{
          name: 'UnknownPlanet',
          rotation_period: '24',
          orbital_period: '365',
          diameter: 'unknown',
          climate: 'unknown',
          gravity: '1 standard',
          terrain: 'unknown',
          surface_water: 'unknown',
          population: 'unknown',
          residents: [],
          films: [],
          url: 'url',
        }],
      },
    };
    mockedAxios.get.mockResolvedValueOnce(apiResponse);

    const result = await swapi.getPlanets();
    const planet = result.results[0];

    expect(planet.diameter).toBe('Not measured');
    expect(planet.climate).toBe('Unspecified climate');
    expect(planet.terrain).toBe('Unspecified terrain');
    expect(planet.population).toBe('Not available');
  });

  it('getPlanetById should return normalized planet', async () => {
    const planetData: Planet = {
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
      url: 'url',
    };
    mockedAxios.get.mockResolvedValueOnce({ data: planetData });
    const result = await swapi.getPlanetById('1');
    expect(result.name).toBe('Tatooine');
  });
});