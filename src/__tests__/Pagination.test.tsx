import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from '../components/Pagination';

describe('Pagination', () => {
  it('calls onChange when buttons are clicked', () => {
    const handleChange = jest.fn();
    render(<Pagination current={2} totalPages={3} onChange={handleChange} />);

    fireEvent.click(screen.getByText('‹'));
    expect(handleChange).toHaveBeenCalledWith(1);

    fireEvent.click(screen.getByText('›'));
    expect(handleChange).toHaveBeenCalledWith(3);

    fireEvent.click(screen.getByText('1'));
    expect(handleChange).toHaveBeenCalledWith(1);
  });
});