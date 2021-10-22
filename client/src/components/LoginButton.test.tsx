import ShallowRenderer from 'react-test-renderer/shallow';
import LoginButton from './LoginButton';

describe('LoginButton', () => {
  it('should render successfully', () => {
    const renderer = ShallowRenderer.createRenderer();
    renderer.render(<LoginButton />);
  });
});
