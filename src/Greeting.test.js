import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('affiche correctement le nom', () => {
  render(<Greeting name="Alice" />);
  expect(screen.getByText('Bonjour Alice !')).toBeInTheDocument();
});