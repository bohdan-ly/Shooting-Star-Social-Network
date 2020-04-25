import React from 'react';
import { render } from '@testing-library/react';
import ShootingStarApp from './App';

test('renders learn react link', () => {
  const { getByText } = render(<ShootingStarApp />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
