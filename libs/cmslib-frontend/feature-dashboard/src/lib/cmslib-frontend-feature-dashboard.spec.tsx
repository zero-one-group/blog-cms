import { render } from '@testing-library/react';

import CmslibFrontendFeatureDashboard from './cmslib-frontend-feature-dashboard';

describe('CmslibFrontendFeatureDashboard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CmslibFrontendFeatureDashboard />);
    expect(baseElement).toBeTruthy();
  });
});
