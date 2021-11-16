import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';
import { BrowserRouter } from 'react-router-dom';

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

// Arrange - Act - Assert

it('should render the correct amount of incomplete tasks', () => {
  render(<MockTodoFooter numberOfIncompleteTasks={5} />);
  const paragraphElement = screen.getByText(/5 tasks left/i);
  expect(paragraphElement).toBeInTheDocument();
});

it('should render "task" when the number of incomplete tasks is one', () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).toBeInTheDocument();
});

it('should return "true"', () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).toBeTruthy();
});

it('should not be visable to the user', () => {
  render(<MockTodoFooter numberOfIncompleteTasks={7} />);
  const paragraphElement = screen.getByText(/7 tasks left/i);
  expect(paragraphElement).not.toBeVisible();
});

it('should contain <p>', () => {
  render(<MockTodoFooter numberOfIncompleteTasks={13} />);
  const paragraphElement = screen.getByText(/13 tasks left/i);
  expect(paragraphElement).toContainHTML('p');
});

it('should contain text content', () => {
  render(<MockTodoFooter numberOfIncompleteTasks={6} />);
  const paragraphElement = screen.getByText(/6 tasks left/i);
  expect(paragraphElement).toHaveTextContent('6 tasks left');
});

it('should find by TestId', () => {
  render(<MockTodoFooter numberOfIncompleteTasks={8} />);
  const paragraphElement = screen.getByTestId('para');
  expect(paragraphElement).toBeInTheDocument();
});

it('should have Text Content', () => {
  render(<MockTodoFooter numberOfIncompleteTasks={2} />);
  const paragraphElement = screen.getByTestId('para');
  expect(paragraphElement.textContent).toBe('2 tasks left');
});
