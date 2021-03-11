import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Button from '../components/button';

it("renders correctly", ()=>{
  const {queryByTestId} = render(<Button/>);
  expect(queryByTestId("button")).toBeTruthy();
})

it("updates on change", () => {
  const {queryByTestId} = render(<Button/>);
  const button = queryByTestId("button");
  fireEvent.change(button, {target: {value: "test"}});
  expect(button.value).toBe("test");
})