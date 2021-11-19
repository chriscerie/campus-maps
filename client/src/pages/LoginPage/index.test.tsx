import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../reducers';
import LoginPage from './index';

describe('LoginPage', () => {
  it('should render successfully', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
