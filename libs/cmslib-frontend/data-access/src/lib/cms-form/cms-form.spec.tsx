import { render } from '@testing-library/react';

import CmsForm from './cms-form';

describe('CmsForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CmsForm />);
    expect(baseElement).toBeTruthy();
  });
});
