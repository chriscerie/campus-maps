import { useEffect, useState } from 'react';
import './App.scss';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';

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
      {/* <HomePage /> */}
      <DetailPage />
    </div>
  );
}

export default App;
