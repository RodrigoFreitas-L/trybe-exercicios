const express = require('express');
const rescue = require('express-rescue');
const generateToken = require('./middlewares/generateToken');
const { validateInfos } = require('./middlewares/validateInfos');
const { validateInfosSaleDate } = require('./middlewares/validateInfosSaleDate');
const { validateInfosWarrantyPeriod } = require('./middlewares/validateInfosWarrantyPeriod');
const { validateProductName } = require('./middlewares/validateProductName');
const { validateEmail } = require('./middlewares/validateEmail');
const { validateUsername } = require('./middlewares/validateUsername');
const { validatePassword } = require('./middlewares/validatePassword');
const { validatePhone } = require('./middlewares/validatePhone');
const { authMiddleware } = require('./middlewares/authMiddleware');

const app = express();
app.use(express.json());

app.post('/sales', authMiddleware, validateProductName, validateInfos, validateInfosSaleDate, validateInfosWarrantyPeriod, (req, res) => {
  res.status(200).json({ message: 'Sale created successfully!' });
});

app.post('/signup', validateEmail, validateUsername, validatePassword, validatePhone, (req, res) => {
  res.status(200).json({ message: `Seu token é ${generateToken()}` });
});

app.listen(3001, () => {
  console.log('App ouvindo na porta 3001');
});