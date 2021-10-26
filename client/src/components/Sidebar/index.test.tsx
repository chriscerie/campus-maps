import ShallowRenderer from 'react-test-renderer/shallow';
import { Provider } from 'react-redux';
import store from '../../reducers';
import Sidebar from './index';

describe('Sidebar', () => {
  it('should render successfully', () => {
    const renderer = ShallowRenderer.createRenderer();
    renderer.render(
      <Provider store={store}>
        <Sidebar />
      </Provider>
    );
  });
});
