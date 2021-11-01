import ShallowRenderer from 'react-test-renderer/shallow';
import BottomPopup from './BottomPopup';

describe('BottomPopup', () => {
  it('should render successfully', () => {
    const renderer = ShallowRenderer.createRenderer();
    renderer.render(<BottomPopup />);
  });
});
