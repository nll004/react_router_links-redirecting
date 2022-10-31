import { render } from '@testing-library/react';
import App from './App';
import DogList from './DogList';

test('renders App component', () => {
  render(<App />);
});

test('renders Dog component', () => {
  render(<DogList />);
});
