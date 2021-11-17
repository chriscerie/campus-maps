import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/HomePage';
import LocationPage from './pages/LocationPage';
import LocationEditPage from './pages/LocationEditPage';
import WriteReviewPage from './pages/WriteReviewPage';
import ProfilePage from './pages/ProfilePage';
import ModerationPage from './pages/ModerationPage';
import Header from './components/Header';
import Footer from './components/Footer';
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
          <Route exact path="/loc/:id" component={LocationPage} />
          <Route exact path="/loc-edit/:id" component={LocationEditPage} />
          <Route exact path="/write-review/:id" component={WriteReviewPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/moderation" component={ModerationPage} />
        </Switch>

        <Switch>
          <Route exact path="/" />
          <Route component={Footer} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
