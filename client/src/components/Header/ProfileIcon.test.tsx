import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../reducers';
import ProfileIcon from './ProfileIcon';

describe('ProfileIcon', () => {
  it('should render successfully', () => {
    renderer.create(
      <Provider store={store}>
        <ProfileIcon />
      </Provider>
    );
  });
});
