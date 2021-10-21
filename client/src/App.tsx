import { useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import Header from './components/Header';

// Fetching the GET route from the Express server which matches the GET route from server.js
const callBackendAPI = async () => {
  const response = await fetch('/express_backend');
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message);
  }
  return body;
};

function App() {
  const [data, setData] = useState<{ data: string }>({
    data: 'Waiting for data.',
  });

  useEffect(() => {
    callBackendAPI()
      .then((res) => setData({ data: res.message }))
      .catch((err) => console.log(err));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/detail" component={DetailPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
