import { render } from '@testing-library/react';

import HeroSlider from './hero-slider';

describe('HeroSlider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeroSlider />);
    expect(baseElement).toBeTruthy();
  });
});
