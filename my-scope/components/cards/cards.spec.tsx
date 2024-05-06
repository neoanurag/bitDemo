import React from 'react';
import { render } from '@testing-library/react-native';
import { BasicCards } from './cards.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicCards />);
  const rendered = getByText('hello from Cards');
  expect(rendered).toBeTruthy();
});
