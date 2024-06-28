import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from '../../stories/Select.stories';
import { SelectInput } from './select'; // import all stories from the stories file

const { Select } = composeStories(stories);

test('Make sure input UI does not change unexpectedly', () => {
    const { container } = render(<Select />)
    expect(container).toMatchSnapshot()
}) 