
import  jwt from "jsonwebtoken";
export const jwtConfig = {
    secretKey: 'EstaEsUnaPalabraUltraSecreta',
    expiresIn:60*60
};

export const generateToken = (userId) => {
    const token = jwt.sign({ userId:userId }, jwtConfig.secretKey, { expiresIn: jwtConfig.expiresIn });
    return token;
  };