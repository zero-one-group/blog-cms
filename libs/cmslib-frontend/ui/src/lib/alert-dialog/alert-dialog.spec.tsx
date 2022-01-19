import { render } from '@testing-library/react';

import AlertDialog from './alert-dialog';

describe('AlertDialog', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AlertDialog />);
    expect(baseElement).toBeTruthy();
  });
});
