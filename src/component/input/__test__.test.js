import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from '../../stories/Input.stories';
import { Input } from './Input'; // import all stories from the stories file

const { Large, Medium } = composeStories(stories);

test('Make sure input UI does not change unexpectedly', () => {
    const { container } = render(<Large />)
    expect(container).toMatchSnapshot()
}) 

test('renders large input with default args', () => {
  render(<Large />);
  const inputPlaceholder = screen.getByPlaceholderText(
    /Input Name/i
  );
  const inputLabel = screen.getByLabelText(
    /Label Text/i
  )

  expect(inputPlaceholder).toHaveAttribute('placeholder', 'Input Name');
  expect(inputLabel).not.toBeNull();
});

test('renders input display value', () => {
  const onChange = jest.fn()

  render(<Input onChange={onChange} />);

  const inputValue = screen.getByDisplayValue('');
  fireEvent.change(inputValue, { target: { value: "Test Input" } });

  expect(onChange).toHaveBeenCalled()
});

test('Input should show validation', () => {
  render(<Large error='error' />);

  const errorDisplay = screen.findByText(
    "error"
  );

  waitFor(() => expect(errorDisplay).toBeInTheDocument());
});

test('Make sure input UI does not change unexpectedly', () => {
  const { container } = render(<Medium />)
  expect(container).toMatchSnapshot()
}) 

test('renders large input with default args', () => {
render(<Medium />);
const inputPlaceholder = screen.getByPlaceholderText(
  /Input Name/i
);
const inputLabel = screen.getByLabelText(
  /Label Text/i
)

expect(inputPlaceholder).toHaveAttribute('placeholder', 'Input Name');
expect(inputLabel).not.toBeNull();
});