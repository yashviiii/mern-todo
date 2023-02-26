import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.json('Unauthorized');
  }
  return jwt.verify(token,'aabbccdd', (err, decoded) => {
    if (err) {
      return res.json('Unauthorized, invalid token');
    }
    req.user = decoded;
    return next();
  });
};
