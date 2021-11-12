import ShallowRenderer from 'react-test-renderer/shallow';
import { Provider } from 'react-redux';
import store from '../../reducers';
import LocationEditPage from './index';

describe('LocationEditPage', () => {
  it('should render successfully', () => {
    const renderer = ShallowRenderer.createRenderer();
    const tree = renderer.render(
      <Provider store={store}>
        <LocationEditPage />
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});
