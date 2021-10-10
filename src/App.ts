import express from 'express';
import * as path from 'path';

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/express_backend', (_, res) => {
  res.send({ express: 'EXPRESS BACKEND IS CONNECTED TO REACT' });
});

// Send all other requests back to React
app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

export default app;
