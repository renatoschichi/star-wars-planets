import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import PlanetDetails from '../pages/PlanetDetails';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('PlanetDetails component', () => {
  it('renders planet details and residents', async () => {
    mockedAxios.get.mockImplementation((url) => {
      if (url.includes('/planets/1')) {
        return Promise.resolve({
          data: {
            name: 'Tatooine',
            residents: ['url/person/1'],
            films: [],
            climate: 'arid',
            gravity: '1',
            population: '200000',
            terrain: 'desert',
          },
        });
      }
      if (url.includes('/person/1')) {
        return Promise.resolve({
          data: {
            name: 'Luke Skywalker',
            hair_color: 'blond',
            eye_color: 'blue',
            gender: 'male',
            species: [],
            vehicles: [],
          },
        });
      }
      return Promise.resolve({ data: {} });
    });

    render(
      <MemoryRouter initialEntries={['/planet/1']}>
        <Routes>
          <Route path="/planet/:id" element={<PlanetDetails />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => expect(screen.getByText('Tatooine')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('Luke Skywalker')).toBeInTheDocument());
  });
});