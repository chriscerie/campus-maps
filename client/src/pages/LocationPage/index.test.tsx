import ShallowRenderer from 'react-test-renderer/shallow';
import LocationPage from './index';

describe('LocationPage', () => {
  it('should render successfully', () => {
    const renderer = ShallowRenderer.createRenderer();
    const tree = renderer.render(<LocationPage />);
    expect(tree).toMatchSnapshot();
  });
});
