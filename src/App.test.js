import { render, screen } from '@testing-library/react';
import App from './App';
import Dogs from './Dogs';

test('renders App component', () => {
  render(<App />);
});

test('renders Dog component', () => {
  render(<Dogs />);
});
