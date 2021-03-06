import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from '../AddInput';

// Arrange - Act - Assert

const mockedSetTodo = jest.fn();

describe('AddInput', () => {
  it('should render input element', () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
  });

  it('should render the new value', () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
    fireEvent.change(inputElement, {
      target: { value: 'Go Grocery Shopping' },
    });
    expect(inputElement.value).toBe('Go Grocery Shopping');
  });

  it('should have an empty input after button click', () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
    const buttonElement = screen.getByRole('button', { name: /add/i });
    fireEvent.change(inputElement, {
      target: { value: 'Go Grocery Shopping' },
    });
    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe('');
  });
});
