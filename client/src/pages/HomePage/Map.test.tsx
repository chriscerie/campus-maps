import ShallowRenderer from 'react-test-renderer/shallow';
import Map from './Map';

describe('Map', () => {
  it('should render successfully', () => {
    const renderer = ShallowRenderer.createRenderer();
    const tree = renderer.render(<Map />);
    expect(tree).toMatchSnapshot();
  });
});
