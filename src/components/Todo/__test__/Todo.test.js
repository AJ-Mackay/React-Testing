import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo';

// Arrange - Act - Assert

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
  const buttonElement = screen.getByRole('button', { name: /add/i });
  tasks.forEach((task) => {
    fireEvent.change(inputElement, {
      target: { value: task },
    });
    fireEvent.click(buttonElement);
  });
};

describe('Todo', () => {
  it('should render input element', () => {
    render(<MockTodo />);
    addTask(['Learn Integration Testing']);
    const divElement = screen.getByText(/learn integration testing/i);
    expect(divElement).toBeInTheDocument();
  });

  it('should render multiple items', () => {
    render(<MockTodo />);
    addTask(['Learn Integration Testing', 'Pet my Cat', 'Wash my Hands']);
    const divElements = screen.getAllByTestId('task-container');
    expect(divElements.length).toBe(3);
  });

  it('should not have completed class when initially rendered', () => {
    render(<MockTodo />);
    addTask(['Learn Integration Testing']);
    const divElement = screen.getByText(/learn integration testing/i);
    expect(divElement).not.toHaveClass('todo-item-active');
  });

  it('should not have completed class when clicked', () => {
    render(<MockTodo />);
    addTask(['Learn Integration Testing']);
    const divElement = screen.getByText(/learn integration testing/i);
    fireEvent.click(divElement);
    expect(divElement).toHaveClass('todo-item-active');
  });
});
