import React from 'react';
import { render } from '@testing-library/react';
import Display from '../components/display';

it('renders correctly', () => {
  const { queryByTestId } = render(<Display />);
  expect(queryByTestId('display')).toBeTruthy();
});
