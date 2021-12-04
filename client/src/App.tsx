import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from './reducers';
import { setCurrentUser } from './actions/currentUserActions';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import LocationPage from './pages/LocationPage';
import PhotosPage from './pages/PhotosPage';
import LocationEditPage from './pages/LocationEditPage';
import WriteReviewPage from './pages/WriteReviewPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import AboutPage from './pages/AboutPage';
import ModerationPage from './pages/ModerationPage';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.scss';

function App() {
  const currentUser = useSelector((state: RootState) => state.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentUser());
  }, [dispatch]);

  return currentUser != null ? (
    <BrowserRouter>
      <div className="App">
        <Header />
        <HomePage />

        <Switch>
          <Route exact path="/login">
            {currentUser ? <Redirect to="/" /> : <LoginPage />}
          </Route>
          <Route exact path="/loc/:id" component={LocationPage} />
          <Route exact path="/loc/:id/photos" component={PhotosPage} />
          <Route exact path="/loc-edit/:id">
            {currentUser ? <LocationEditPage /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/write-review/:id" component={WriteReviewPage}>
            {currentUser ? <WriteReviewPage /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/profile" component={ProfilePage}>
            {currentUser ? <ProfilePage /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/settings" component={SettingsPage}>
            {currentUser ? <SettingsPage /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/moderation" component={ModerationPage}>
            {currentUser ? <ModerationPage /> : <Redirect to="/login" />}
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/" />
          <Route component={Footer} />
        </Switch>
      </div>
    </BrowserRouter>
  ) : null;
}

export default App;
