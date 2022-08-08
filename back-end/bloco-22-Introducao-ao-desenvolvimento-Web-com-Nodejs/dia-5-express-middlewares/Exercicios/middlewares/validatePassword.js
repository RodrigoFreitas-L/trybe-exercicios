const validatePassword = (req, res, next) => {
  const { password } = req.body;
  if(!password) return res.status(401).json({ message: 'missing fields!' });
  
  next();
};

module.exports = { validatePassword };