import ShallowRenderer from 'react-test-renderer/shallow';
import { Provider } from 'react-redux';
import store from '../../reducers';
import WriteReviewPage from './index';

describe('WriteReviewPage', () => {
  it('should render successfully', () => {
    const renderer = ShallowRenderer.createRenderer();
    const tree = renderer.render(
      <Provider store={store}>
        <WriteReviewPage />
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});
