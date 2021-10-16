import { useEffect, useState } from 'react';
import './App.scss';
import HomePage from './pages/HomePage';
import Login from './components/Login';
import Logout from './components/Logout';

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
    <div className="App">
      <Login />
      <Logout />
      <header className="App-header">
        <p>{data.data}</p>
      </header>
      <HomePage />
    </div>
  );
}

export default App;
