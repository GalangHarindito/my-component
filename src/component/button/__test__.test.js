import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from '../../stories/Button.stories';
import { Button } from './Button';
import userEvent from '@testing-library/user-event'

const { Primary, Secondary } = composeStories(stories);

test('Button layut should not change', () => {
    const { container } = render(<Primary />)
    expect(container).toMatchSnapshot()
})

test('Button layout should not change', () => {
    const { container } = render(<Secondary />)
    expect(container).toMatchSnapshot()
})

test('renders primary button with default args', () => {
  render(<Primary />);
  const buttonElement = screen.getByText(
    /Button/i
  );
  expect(buttonElement).not.toBeNull();
});

test('renders primary button with overriden props', () => {
  render(<Primary>Button</Primary>); // you can override props and they will get merged with values from the Story's args
  const buttonElement = screen.getByText(/Button/i);
  expect(buttonElement).not.toBeNull();
});

test('renders button on click event', () => {
  const onChangeSpy = jest.fn()

  render(<Button onChange={onChangeSpy} label='label' />)
  const label = screen.getByText(/label/i)
  const button = screen.getByRole('button')
  userEvent.click(button)

  expect(label).not.toBeNull()
  expect(onChangeSpy).not.toHaveBeenCalled()
})

test('renders secondary button with default args', () => {
    render(<Secondary />);
    const buttonElement = screen.getByText(
      /Button/i
    );
    expect(buttonElement).not.toBeNull();
  });
  
  test('renders primary button with overriden props', () => {
    render(<Secondary>Button</Secondary>); // you can override props and they will get merged with values from the Story's args
    const buttonElement = screen.getByText(/Button/i);
    expect(buttonElement).not.toBeNull();
  });