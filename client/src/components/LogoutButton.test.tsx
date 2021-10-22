import ShallowRenderer from 'react-test-renderer/shallow';
import LogoutButton from './LogoutButton';

describe('LogoutButton', () => {
  it('should render successfully', () => {
    const renderer = ShallowRenderer.createRenderer();
    renderer.render(<LogoutButton />);
  });
});
