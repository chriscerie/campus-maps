import ShallowRenderer from 'react-test-renderer/shallow';
import HomePage from './index';

describe('HomePage', () => {
  it('should render successfully', () => {
    const renderer = ShallowRenderer.createRenderer();
    const tree = renderer.render(<HomePage />);
    expect(tree).toMatchSnapshot();
  });
});
