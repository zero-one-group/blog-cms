import { render } from '@testing-library/react';

import CmslibFrontendUi from './cmslib-frontend-ui';

describe('CmslibFrontendUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CmslibFrontendUi />);
    expect(baseElement).toBeTruthy();
  });
});
