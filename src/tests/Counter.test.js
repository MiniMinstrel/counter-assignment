import { fireEvent, render, screen } from '@testing-library/react'; // import necessary react testing library helpers here
import Counter from '../components/Counter'; // import the Counter component here

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const message = screen.getByText("Counter");
  expect(message).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const zero = screen.getByTestId("count");
  expect(zero).toHaveTextContent("0");
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const increment = screen.getByTestId("count");
  fireEvent.click(screen.getByText("+"));
  expect(increment).toHaveTextContent("1");
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const decrement = screen.getByTestId("count");
  fireEvent.click(screen.getByText("-"));
  expect(decrement).toHaveTextContent("1");
});
