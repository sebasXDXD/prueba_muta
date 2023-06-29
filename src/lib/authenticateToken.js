import jwt from 'jsonwebtoken';
import { jwtConfig } from "./jwtConfig.js";

export const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token no proporcionado' });
  }

  const tokenWithoutBearer = token.replace('Bearer ', '');
  try {
    const decoded = jwt.verify(tokenWithoutBearer, jwtConfig.secretKey);

    // Obtener el header, payload y secret del token
    const header = jwt.decode(tokenWithoutBearer, { complete: true }).header;
    const payload = jwt.decode(tokenWithoutBearer, { complete: true }).payload;
    const secret = jwtConfig.secretKey;

    // Obtener el userId del payload
    const userId = decoded.userId;

    req.header = header;
    req.payload = payload;
    req.secret = secret;
    req.userId = userId;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: 'Token inválido' });
  }
};