import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from '../../stories/Button.stories'; // import all stories from the stories file

const { Primary, Secondary } = composeStories(stories);

test('Button layut should not change', () => {
    const { container } = render(<Primary />)
    expect(container).toMatchSnapshot()
})

test('Button layut should not change', () => {
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