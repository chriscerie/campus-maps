import { Route, Switch } from 'react-router-dom';
import MapHeader from './MapHeader';
import LocationHeader from './LocationHeader';
import './index.scss';

function Header() {
  return (
    <Switch>
      <Route exact path="/">
        <MapHeader />
      </Route>
      <Route exact path="/loc">
        <LocationHeader />
      </Route>
    </Switch>
  );
}

export default Header;
