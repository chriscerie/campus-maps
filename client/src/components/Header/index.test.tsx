import ShallowRenderer from 'react-test-renderer/shallow';
import Header from './index';

describe('Header', () => {
  it('should render successfully', () => {
    const renderer = ShallowRenderer.createRenderer();
    renderer.render(<Header />);
  });
});
