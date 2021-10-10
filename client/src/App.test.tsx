import renderer from 'react-test-renderer';
import App from './App';

describe('App', () => {
  it('should render successfully', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
