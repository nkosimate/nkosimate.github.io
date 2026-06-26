import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('navigates to the projects page from the home page', async () => {
  render(<App />);

  await userEvent.click(screen.getByRole('link', { name: /more/i }));

  expect(screen.getByRole('heading', { name: /projects/i, level: 1 })).toBeInTheDocument();
});
