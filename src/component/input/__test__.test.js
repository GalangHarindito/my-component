import { render, screen, fireEvent } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from '../../stories/Input.stories';
import { Input } from './Input'; // import all stories from the stories file

const { Large } = composeStories(stories);

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
  render(<Input />);
  const inputValue = screen.getByDisplayValue('');
  fireEvent.change(inputValue, { target: { value: "Test Input" } });
});