import { Route, Switch } from 'react-router-dom';
import MapHeader from './MapHeader';
import LocationHeader from './LocationHeader';
import './index.scss';

function Header() {
  return (
    <Switch>
      <Route exact path="/" component={MapHeader} />
      <Route path="/" component={LocationHeader} />
    </Switch>
  );
}

export default Header;
