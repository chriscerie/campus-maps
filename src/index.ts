import express from 'express';
import * as path from 'path';

const app = express();
const port = process.env.PORT || 5000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/express_backend', (_, res) => {
  res.send({ express: 'EXPRESS BACKEND IS CONNECTED TO REACT' });
});

// Send all other requests back to React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + 'client/build/index.html'));
});

app.listen(port, () => console.log(`Running on port ${port}`));
