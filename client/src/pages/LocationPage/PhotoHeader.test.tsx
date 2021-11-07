import ShallowRenderer from 'react-test-renderer/shallow';
import PhotoHeader from './PhotoHeader';

describe('PhotoHeader', () => {
  it('should render successfully', () => {
    const renderer = ShallowRenderer.createRenderer();
    const tree = renderer.render(<PhotoHeader name="name" type="type" />);
    expect(tree).toMatchSnapshot();
  });
});
