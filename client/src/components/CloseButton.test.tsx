import ShallowRenderer from 'react-test-renderer/shallow';
import CloseButton from './CloseButton';

describe('CloseButton', () => {
  it('should render successfully', () => {
    const renderer = ShallowRenderer.createRenderer();
    renderer.render(<CloseButton />);
  });
});
