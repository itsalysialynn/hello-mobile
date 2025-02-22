import React from 'react';
import {render} from '@testing-library/react-native';
import HelloWorld from './HelloWorld';

test('displays Hello World text', () => {
  const {getByText} = render(<HelloWorld />);
  expect(getByText('Hello World!')).toBeTruthy();
});
