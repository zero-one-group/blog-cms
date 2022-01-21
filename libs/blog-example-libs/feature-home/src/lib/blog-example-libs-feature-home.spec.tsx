import { render } from '@testing-library/react';

import BlogExampleLibsFeatureHome from './blog-example-libs-feature-home';

describe('BlogExampleLibsFeatureHome', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlogExampleLibsFeatureHome />);
    expect(baseElement).toBeTruthy();
  });
});
