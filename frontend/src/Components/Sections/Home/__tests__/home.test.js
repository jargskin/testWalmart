import React from "react"
import ReactDom from 'react-dom';
import "babel-polyfill"
import { render } from '@testing-library/react';

import Home from "../index"

test("Render without crashing", () => {
  const div = document.createElement('div');
  ReactDom.render(<Home></Home>, div);
})
it("render button correctly", () => {
  const {getByTestId} = render(<Home title="Testing"></Home>);
  expect(getByTestId('h1').textContent).toBe('Testing');

})