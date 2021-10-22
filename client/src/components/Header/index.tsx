import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MapHeader from './MapHeader';
import LocationHeader from './LocationHeader';

function Header() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MapHeader} />
        <Route path="/loc" component={LocationHeader} />
      </Switch>
    </BrowserRouter>
  );
}

export default Header;
