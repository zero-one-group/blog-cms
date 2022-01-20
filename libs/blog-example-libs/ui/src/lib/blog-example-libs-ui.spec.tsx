import { render } from '@testing-library/react';

import BlogExampleLibsUi from './blog-example-libs-ui';

describe('BlogExampleLibsUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlogExampleLibsUi />);
    expect(baseElement).toBeTruthy();
  });
});
