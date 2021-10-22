import ShallowRenderer from 'react-test-renderer/shallow';
import MapHeader from './LocationHeader';

describe('MapHeader', () => {
  it('should render successfully', () => {
    const renderer = ShallowRenderer.createRenderer();
    renderer.render(<MapHeader />);
  });
});
