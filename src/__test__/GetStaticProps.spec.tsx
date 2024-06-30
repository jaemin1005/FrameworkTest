import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {PropsPage} from '../pages/GetStaticProps'; // 중괄호 없이 default import

// global.fetch = jest.fn(() =>
//   Promise.resolve({
//     json: () => Promise.resolve({ message: 'Hello World' }),
//   })
// ) as jest.Mock;

describe('getStaticProps and HomePage integration', () => {
  it('should render the data correctly', async () => {
    const props = {
      data: "안녕",
    };
    render(<PropsPage {...props} />); // 올바르게 HomePage를 render
    expect(screen.getByText('Data')).toBeInTheDocument();
    expect(screen.getByText('안녕')).toBeInTheDocument();
  });
});