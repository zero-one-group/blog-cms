import { render } from '@testing-library/react';

import CmslibFrontendFeatureLogin from './cmslib-frontend-feature-login';

describe('CmslibFrontendFeatureLogin', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CmslibFrontendFeatureLogin />);
    expect(baseElement).toBeTruthy();
  });
});
