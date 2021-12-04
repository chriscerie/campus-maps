import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../../reducers';
import Submission from './Submission';

describe('Submission', () => {
  it('should render successfully', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MemoryRouter>
            <Submission
              submission={{
                _id: '_id',
                author_id: 'author_id',
                id: 'id',
                name: 'name',
                type: 'type',
                description: 'description',
                address1: 'address1',
                address2: 'address2',
                city: 'city',
                state: 'state',
                zip_code: 'zip_code',
                rooms: [],
                __v: '__v',
              }}
              resetSubmissions={() => {}}
            />
          </MemoryRouter>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
