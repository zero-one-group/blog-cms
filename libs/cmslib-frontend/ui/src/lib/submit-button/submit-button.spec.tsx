import { render } from '@testing-library/react';

import SubmitButton from './submit-button';

describe('SubmitButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SubmitButton />);
    expect(baseElement).toBeTruthy();
  });
});
