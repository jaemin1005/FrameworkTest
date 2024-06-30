import { render, screen, fireEvent } from '@testing-library/react';
import HomePage from '../pages/test';

describe("TEST",() => {
  it("안녕", () => {
    render(<HomePage />);
    expect(screen.getByText('HI')).toBeInTheDocument()
  })
})