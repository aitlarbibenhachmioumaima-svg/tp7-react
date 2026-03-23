import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('incrémente le compteur lorsqu’on clique', () => {
  render(<Counter />);
  const button = screen.getByText('Ajouter');
  fireEvent.click(button);
  expect(screen.getByText('Compteur actuel : 1')).toBeInTheDocument();
});