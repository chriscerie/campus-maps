import ShallowRenderer from 'react-test-renderer/shallow';
import { Provider } from 'react-redux';
import store from '../../reducers';
import RoomPage from './index';

jest.mock('react-router-dom', () => ({
  __esModule: true,
  useParams: jest.fn().mockReturnValue({
    id: '1',
  }),
}));

describe('LocationPage', () => {
  it('should render successfully', () => {
    const renderer = ShallowRenderer.createRenderer();
    const tree = renderer.render(
      <Provider store={store}>
        <RoomPage />
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});
