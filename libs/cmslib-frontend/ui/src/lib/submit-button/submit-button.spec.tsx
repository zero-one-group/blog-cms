import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect'
import SubmitButton from './submit-button';

describe('SubmitButton', () => {
  it('should render successfully', () => {
    const label = 'Alias';
    const { baseElement } = render(<SubmitButton buttonLabel={label}/>);
    expect(screen.getByTestId('button-label')).toHaveTextContent(label);
    expect(baseElement).toBeTruthy();
  });
});
