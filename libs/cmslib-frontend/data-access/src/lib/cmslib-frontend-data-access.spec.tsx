import { render } from '@testing-library/react';

import CmslibFrontendDataAccess from './cmslib-frontend-data-access';

describe('CmslibFrontendDataAccess', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CmslibFrontendDataAccess />);
    expect(baseElement).toBeTruthy();
  });
});
