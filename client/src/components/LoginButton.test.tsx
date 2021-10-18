import { render } from '@testing-library/react';
import LoginButton from './LoginButton';

describe('LoginButton', () => {
  it('should render successfully', () => {
    render(<LoginButton />);
  });
});
