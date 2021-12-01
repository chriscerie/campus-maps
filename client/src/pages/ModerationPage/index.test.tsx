import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../reducers';
import ModerationPage from './index';

describe('ModerationPage', () => {
  it('should render successfully', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <ModerationPage />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
