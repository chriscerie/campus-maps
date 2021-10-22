import ShallowRenderer from 'react-test-renderer/shallow';
import Map from './MapComponent';

jest.mock('react-router-dom', () => ({
  __esModule: true,
  useLocation: jest.fn().mockReturnValue({
    pathname: '/',
    search: '',
    hash: '',
    state: null,
    key: '',
  }),
}));

describe('MapComponent', () => {
  it('should render successfully', () => {
    const renderer = ShallowRenderer.createRenderer();
    const tree = renderer.render(<Map />);
    expect(tree).toMatchSnapshot();
  });
});
