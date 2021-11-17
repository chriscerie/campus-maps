import ShallowRenderer from 'react-test-renderer/shallow';
import { Provider } from 'react-redux';
import store from '../../reducers';
import ModerationPage from './index';

describe('ProfilePage', () => {
  it('should render successfully', () => {
    const renderer = ShallowRenderer.createRenderer();
    const tree = renderer.render(
      <Provider store={store}>
        <ModerationPage />
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});
