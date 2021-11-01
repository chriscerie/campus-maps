import ShallowRenderer from 'react-test-renderer/shallow';
import BottomPopup from './BottomPopup';

jest.mock('@use-gesture/react', () => ({
  useDrag: jest.fn().mockReturnValue(() => ({})),
}));

describe('BottomPopup', () => {
  it('should render successfully', () => {
    const renderer = ShallowRenderer.createRenderer();
    renderer.render(<BottomPopup />);
  });
});
