import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../reducers';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('should render successfully', () => {
    renderer.create(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
  });
});
