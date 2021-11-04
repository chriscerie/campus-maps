import ShallowRenderer from 'react-test-renderer/shallow';
import { Provider } from 'react-redux';
import store from '../../reducers';
import SideNav from './SideNav';

describe('SideNav', () => {
  it('should render successfully', () => {
    const renderer = ShallowRenderer.createRenderer();
    renderer.render(
      <Provider store={store}>
        <SideNav onClick={() => {}} />
      </Provider>
    );
  });
});
