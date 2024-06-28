import { render } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from '../../stories/Loader.stories';// import all stories from the stories file

const { Large, Medium, Small } = composeStories(stories);

test('Make sure input UI does not change unexpectedly', () => {
    const { container } = render(<Large />)
    expect(container).toMatchSnapshot()
})

test('Make sure input UI does not change unexpectedly', () => {
    const { container } = render(<Medium />)
    expect(container).toMatchSnapshot()
})

test('Make sure input UI does not change unexpectedly', () => {
    const { container } = render(<Small />)
    expect(container).toMatchSnapshot()
})