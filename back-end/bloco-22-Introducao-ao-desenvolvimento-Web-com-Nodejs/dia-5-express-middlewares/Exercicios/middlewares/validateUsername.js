const validateUsername = (req, res, next) => {
  const { username } = req.body;
  if(!username) return res.status(401).json({ message: 'missing fields!' });

  next();
};

module.exports = { validateUsername };