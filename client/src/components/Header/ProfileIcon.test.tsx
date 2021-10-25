import ShallowRenderer from 'react-test-renderer/shallow';
import { Provider } from 'react-redux';
import store from '../../reducers';
import ProfileIcon from './ProfileIcon';

describe('ProfileIcon', () => {
  it('should render successfully', () => {
    const renderer = ShallowRenderer.createRenderer();
    renderer.render(
      <Provider store={store}>
        <ProfileIcon />
      </Provider>
    );
  });
});
