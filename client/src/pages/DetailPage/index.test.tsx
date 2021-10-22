import ShallowRenderer from 'react-test-renderer/shallow';
import DetailPage from './index';

describe('DetailPage', () => {
  it('should render successfully', () => {
    const renderer = ShallowRenderer.createRenderer();
    const tree = renderer.render(<DetailPage />);
    expect(tree).toMatchSnapshot();
  });
});
