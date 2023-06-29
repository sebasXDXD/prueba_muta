import { loginCreate, findUserByUsername } from "../models/loginModel.js";
import helpers from "../lib/helper.js";
import { generateToken } from "../lib/jwtConfig.js"



export const loginController = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Buscar usuario por nombre de usuario en la base de datos
    const user = await findUserByUsername(username);
    if (!user) {
      return res.status(400).json({ message: 'Credenciales inválidas' });
    }

    // Verificar la contraseña del usuario

    const isPasswordValid = await helpers.matchPassword(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Credenciales inválidas' });
    }

    // Generar un token JWT
    const token =  generateToken(user.id);

    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'Error de autenticación', error });
  }
};

export const loginCreateController = async (req, res, next) => {
  try {
    const { username, password, fullname } = req.body;
    const existingUser = await findUserByUsername(username);

    if (existingUser) {
      return res.status(400).json({ message: 'El nombre de usuario ya está en uso' });
    }
    const hashedPassword = await helpers.encryptPassword(password); // Encriptar la contraseña
    const newUser = await loginCreate(username, hashedPassword, fullname);

    return res.status(201).json({ message: 'Usuario creado correctamente', newUser });
  } catch (error) {
    return res.status(500).json({ message: 'Error al guardar', error });
  }
};