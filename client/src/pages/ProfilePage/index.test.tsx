import ShallowRenderer from 'react-test-renderer/shallow';
import { Provider } from 'react-redux';
import store from '../../reducers';
import ProfilePage from './index';

describe('ProfilePage', () => {
  it('should render successfully', () => {
    const renderer = ShallowRenderer.createRenderer();
    const tree = renderer.render(
      <Provider store={store}>
        <ProfilePage />
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});
