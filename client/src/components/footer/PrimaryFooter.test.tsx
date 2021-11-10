import ShallowRenderer from 'react-test-renderer/shallow';
import { Provider } from 'react-redux';
import store from '../../reducers';
import PrimaryFooter from './PrimaryFooter';

describe('PrimaryFooter', () => {
  it('should render successfully', () => {
    const renderer = ShallowRenderer.createRenderer();
    renderer.render(
      <Provider store={store}>
        <PrimaryFooter />
      </Provider>
    );
  });
});
