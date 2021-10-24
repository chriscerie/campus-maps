import ShallowRenderer from 'react-test-renderer/shallow';
import { Provider } from 'react-redux';
import store from '../../reducers';
import MapHeader from './LocationHeader';

describe('MapHeader', () => {
  it('should render successfully', () => {
    const renderer = ShallowRenderer.createRenderer();
    renderer.render(
      <Provider store={store}>
        <MapHeader />
      </Provider>
    );
  });
});
