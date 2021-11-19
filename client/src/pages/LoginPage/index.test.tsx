import ShallowRenderer from 'react-test-renderer/shallow';
import { Provider } from 'react-redux';
import store from '../../reducers';
import LoginPage from './index';

describe('LoginPage', () => {
  it('should render successfully', () => {
    const renderer = ShallowRenderer.createRenderer();
    const tree = renderer.render(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});
