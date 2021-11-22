import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../reducers';
import PhotoPopup from './PhotoPopup';

describe('WriteReviewPage', () => {
  it('should render successfully', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MemoryRouter>
            <PhotoPopup
              photos={[]}
              index={0}
              setIndex={() => {}}
              onClose={() => {}}
            />
          </MemoryRouter>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
