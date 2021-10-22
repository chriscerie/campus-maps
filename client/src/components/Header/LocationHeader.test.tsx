import ShallowRenderer from 'react-test-renderer/shallow';
import LocationHeader from './LocationHeader';

describe('LocationHeader', () => {
  it('should render successfully', () => {
    const renderer = ShallowRenderer.createRenderer();
    renderer.render(<LocationHeader />);
  });
});
