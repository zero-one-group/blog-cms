import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect'

import InputField from './input-field';

describe('InputField', () => {
  it('should render successfully', () => {
    const label = 'Alias';
    const { baseElement } = render(
        <InputField label={label} type="text" />
    );
    expect(screen.getByTestId('field-title')).toHaveTextContent(label);
    expect(baseElement).toBeTruthy();
  });
});
