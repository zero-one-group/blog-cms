import { render } from '@testing-library/react';

import TextAreaField from './text-area-field';

describe('TextAreaField', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TextAreaField />);
    expect(baseElement).toBeTruthy();
  });
});
