import { render, screen, fireEvent } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from '../../stories/Button.stories';
import { Button } from './Button';

const { Large, Medium, Small } = composeStories(stories);

test('Button layout should not change', () => {
    const { container } = render(<Large />)
    expect(container).toMatchSnapshot()
})

test('Button layout should not change', () => {
    const { container } = render(<Medium />)
    expect(container).toMatchSnapshot()
})

test('Button layout should not change', () => {
  const { container } = render(<Small />)
  expect(container).toMatchSnapshot()
})

test('renders Large button with default args', () => {
  render(<Large />);
  const buttonElement = screen.getByText(
    /Button/i
  );
  expect(buttonElement).not.toBeNull();
});

test('renders primary button with overriden props', () => {
  render(<Large>Button</Large>); // you can override props and they will get merged with values from the Story's args
  const buttonElement = screen.getByText(/Button/i);
  expect(buttonElement).not.toBeNull();
});

test('renders button on change mode', () => {
  const onClick = jest.fn()

  render(<Button onClick={onClick} label='button' />)
  const label = screen.getByText(/button/i)
  const button = screen.getByRole('button')
  fireEvent.click(button)

  expect(label).not.toBeNull()
  expect(onClick).toHaveBeenCalled()
})

// test('renders secondary button with default args', () => {
//     render(<Secondary />);
//     const buttonElement = screen.getByText(
//       /Button/i
//     );
//     expect(buttonElement).not.toBeNull();
//   });
  
//   test('renders primary button with overriden props', () => {
//     render(<Secondary>Button</Secondary>); // you can override props and they will get merged with values from the Story's args
//     const buttonElement = screen.getByText(/Button/i);
//     expect(buttonElement).not.toBeNull();
//   });