import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../reducers';
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
    const tree = renderer
      .create(
        <Provider store={store}>
          <Map />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
