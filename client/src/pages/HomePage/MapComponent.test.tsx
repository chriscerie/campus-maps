import ShallowRenderer from 'react-test-renderer/shallow';
import Map from './MapComponent';

describe('MapComponent', () => {
  it('should render successfully', () => {
    const renderer = ShallowRenderer.createRenderer();
    const tree = renderer.render(<Map />);
    expect(tree).toMatchSnapshot();
  });
});
