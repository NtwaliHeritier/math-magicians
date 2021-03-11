import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Button from '../components/button';

it("renders correctly", ()=>{
  const {queryByTestId} = render(<Button/>);
  expect(queryByTestId("button")).toBeTruthy();
})