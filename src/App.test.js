import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the title', () => {
  render(<App />);
  const titleElement = screen.getByText("Ask your question");
  expect(titleElement).toBeInTheDocument();
});

