import { render, screen } from '@testing-library/react';
import Header from '../Header';

// Arrange - Act - Assert

it('should render same text passed into title prop', () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

// // it('should detect a header', () => {
// //     render(<Header title="Cats" />);
// //     const headingElement = screen.getByRole("heading");
// //     expect(headingElement).toBeInTheDocument();
// // });

// // FIND BY

// it('should find the header (async)', async () => {
//     render(<Header title="Cats" />);
//     const headingElement = await screen.findByText(/cats/i);
//     expect(headingElement).toBeInTheDocument();
// });

// // QUERY BY

// it('should query the header', () => {
//     render(<Header title="Cats" />);
//     const headingElement = screen.queryByText(/dogs/i);
//     expect(headingElement).not.toBeInTheDocument();
// });

// // GET ALL BY

// it('should detect the headers', () => {
//     render(<Header title="My Header" />);
//     const headingElements = screen.getAllByRole("heading");
//     expect(headingElements.length).toBe(2);
// });