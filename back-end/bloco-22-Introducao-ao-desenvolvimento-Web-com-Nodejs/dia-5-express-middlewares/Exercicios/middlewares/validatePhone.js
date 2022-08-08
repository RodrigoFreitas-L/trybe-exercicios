const validatePhone = (req, res, next) => {
  const { phone } = req.body;
  if(!phone) return res.status(401).json({ message: 'missing fields!' });

  next();
};

module.exports = { validatePhone };