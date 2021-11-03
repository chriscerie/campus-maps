import ShallowRenderer from 'react-test-renderer/shallow';
import { Provider } from 'react-redux';
import store from './reducers';
import App from './App';

describe('App', () => {
  it('should render successfully', () => {
    const renderer = ShallowRenderer.createRenderer();
    const tree = renderer.render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(tree).toMatchSnapshot();
    renderer.unmount();
  });
});
