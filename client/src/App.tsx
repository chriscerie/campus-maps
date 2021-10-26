import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/HomePage';
import LocationPage from './pages/LocationPage';
import Header from './components/Header';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from './actions/currentUserActions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentUser());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <HomePage />
        <Switch>
          <Route exact path="/loc" component={LocationPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
