import { Route, Switch } from 'react-router-dom';
import MapHeader from './MapHeader';
import LocationHeader from './LocationHeader';
import { useSelector } from 'react-redux';
import type { RootState } from '../../reducers';
import './index.scss';

function Header() {
  const currentUser = useSelector((state: RootState) => state.currentUser);

  return (
    <Switch>
      <Route exact path="/">
        <MapHeader currentUser={currentUser} />
      </Route>
      <Route exact path="/loc">
        <LocationHeader currentUser={currentUser} />
      </Route>
    </Switch>
  );
}

export default Header;
