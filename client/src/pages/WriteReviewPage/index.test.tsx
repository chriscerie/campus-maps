import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../reducers';
import WriteReviewPage from './index';

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as object),
  useParams: jest.fn().mockReturnValue({ id: '1111' }),
}));

describe('WriteReviewPage', () => {
  it('should render successfully', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MemoryRouter>
            <WriteReviewPage />
          </MemoryRouter>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
