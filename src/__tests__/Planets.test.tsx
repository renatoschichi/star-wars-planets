import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import { MemoryRouter } from 'react-router-dom';
import Planets from '../pages/Planets';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Planets component', () => {
  it('renders planets from API', async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: {
        results: [
          { name: 'Tatooine', climate: 'arid', population: '200000', url: 'url/1/' },
        ],
      },
    });

    render(
      <MemoryRouter>
        <Planets />
      </MemoryRouter>
    );

    await waitFor(() => expect(screen.getByText('Tatooine')).toBeInTheDocument());
  });
});