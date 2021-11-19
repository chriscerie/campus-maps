import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../reducers';
import LocationEditPage from './index';

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual('react-router-dom') as object),
  useParams: jest.fn().mockReturnValue({ id: '1111' }),
}));

describe('LocationEditPage', () => {
  it('should render successfully', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <LocationEditPage />
        </MemoryRouter>
      </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
