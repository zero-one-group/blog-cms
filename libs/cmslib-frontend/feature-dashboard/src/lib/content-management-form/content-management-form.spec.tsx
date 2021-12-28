import { render } from '@testing-library/react';

import ContentManagementForm from './content-management-form';

describe('ContentManagementForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContentManagementForm />);
    expect(baseElement).toBeTruthy();
  });
});
