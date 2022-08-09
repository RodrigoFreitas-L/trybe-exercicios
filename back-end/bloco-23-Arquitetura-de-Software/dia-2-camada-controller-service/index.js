const express = require('express');
const rescue = require('express-rescue');
const app = express();
const port = 3000;
const cepController = require('./controllers/cepController');
const errorMiddleware = require('./middlewares/error');

app.use(express.json());


app.get('/ping', async (req, res) => {
  res.status(200).json({ message: 'pong!' });
});

app.get('/cep/:cep', rescue(cepController.getCep));

app.post('/cep', rescue(cepController.postCep));
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
