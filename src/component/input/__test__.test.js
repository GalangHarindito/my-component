import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from '../../stories/Input.stories'; // import all stories from the stories file

const { Large } = composeStories(stories);

test('Input layout should not be change', () => {
    const { container } = render(<Large />)
    expect(container).toMatchSnapshot()
})

// test('renders primary button with default args', () => {
//   render(<Primary />);
//   const buttonElement = screen.getByText(
//     /Button/i
//   );
//   expect(buttonElement).not.toBeNull();
// });

// test('renders primary button with overriden props', () => {
//   render(<Primary>Button</Primary>); // you can override props and they will get merged with values from the Story's args
//   const buttonElement = screen.getByText(/Button/i);
//   expect(buttonElement).not.toBeNull();
// });