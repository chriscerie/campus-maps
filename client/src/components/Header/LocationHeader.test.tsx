import ShallowRenderer from 'react-test-renderer/shallow';
import { Provider } from 'react-redux';
import store from '../../reducers';
import LocationHeader from './LocationHeader';

describe('LocationHeader', () => {
  it('should render successfully', () => {
    const renderer = ShallowRenderer.createRenderer();
    renderer.render(
      <Provider store={store}>
        <LocationHeader />
      </Provider>
    );
  });
});
