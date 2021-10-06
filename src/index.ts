import express from 'express';

const app = express();
const port = 5000;

app.get('/express_backend', (_, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.listen(port, () => console.log(`Running on port ${port}`));
