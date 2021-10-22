import { Route, Switch } from 'react-router-dom';
import MapHeader from './MapHeader';
import LocationHeader from './LocationHeader';

function Header() {
  return (
    <Switch>
      <Route exact path="/" component={MapHeader} />
      <Route exact path="/loc" component={LocationHeader} />
    </Switch>
  );
}

export default Header;
