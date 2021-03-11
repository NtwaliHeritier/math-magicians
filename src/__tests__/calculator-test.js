import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Calculator from '../components/calculator';

it("renders correctly", ()=>{
  const {queryByTestId} = render(<Calculator/>);
  expect(queryByTestId("calculator")).toBeTruthy();
})