import axios from 'axios';
import { Planet, Person, Film, Species, Vehicle } from '@/types/types';

const API_BASE_URL = 'https://swapi.dev/api';

interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export const getPlanets = async (page: number = 1): Promise<PaginatedResponse<Planet>> => {
  try {
    const response = await axios.get<PaginatedResponse<Planet>>(`${API_BASE_URL}/planets/?page=${page}`);

    const normalizedResults = response.data.results.map((planet) => ({
      ...planet,
      population: planet.population === 'unknown' ? 'Not available' : planet.population,
      climate: planet.climate === 'unknown' ? 'Unspecified climate' : planet.climate,
      terrain: planet.terrain === 'unknown' ? 'Unspecified terrain' : planet.terrain,
      diameter: planet.diameter === 'unknown' ? 'Not measured' : `${planet.diameter} km`,
    }));

    return {
      ...response.data,
      results: normalizedResults,
    }
  } catch (error) {
    console.error('Failed to fetch planets:', error);
    throw new Error('Unable to load planets at the moment. Please try again later.');
  }
}

export const getPlanetById = async (id: string): Promise<Planet> => {
  try {
    const response = await axios.get<Planet>(`${API_BASE_URL}/planets/${id}/`);
    const planet = response.data;
    return {
      ...planet,
      population: planet.population === 'unknown' ? 'Not available' : planet.population,
      climate: planet.climate === 'unknown' ? 'Unspecified climate' : planet.climate,
      terrain: planet.terrain === 'unknown' ? 'Unspecified terrain' : planet.terrain,
      diameter: planet.diameter === 'unknown' ? 'Not measured' : `${planet.diameter} km`,
    }
  } catch (error) {
    console.error('Failed to fetch planet:', error);
    throw new Error('Unable to load planet details.');
  }
}

export const getPersonByUrl = async (url: string): Promise<Person> => {
  const response = await axios.get<Person>(url);
  return response.data;
}

export const getFilmByUrl = async (url: string): Promise<Film> => {
  const response = await axios.get<Film>(url);
  return response.data;
}

export const getSpeciesByUrl = async (url: string): Promise<Species> => {
  const response = await axios.get<Species>(url);
  return response.data;
}

export const getVehicleByUrl = async (url: string): Promise<Vehicle> => {
  const response = await axios.get<Vehicle>(url);
  return response.data;
}