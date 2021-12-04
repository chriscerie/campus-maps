import ShallowRenderer from 'react-test-renderer/shallow';
import { Provider } from 'react-redux';
import store from '../../reducers';
import AboutPage from './index';

describe('AboutPage', () => {
  it('should render successfully', () => {
    const renderer = ShallowRenderer.createRenderer();
    const tree = renderer.render(
      <Provider store={store}>
        <AboutPage />
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});
