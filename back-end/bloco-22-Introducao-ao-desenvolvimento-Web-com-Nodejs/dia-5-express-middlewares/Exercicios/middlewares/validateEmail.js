const validateEmail = (req, res, next) => {
  const { email } = req.body;
  if(!email) return res.status(401).json({ message: 'missing fields!'});
  next();
};

module.exports = { validateEmail };