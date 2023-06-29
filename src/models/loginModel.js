
import { pool } from "../db.js";
export const findUserByUsername = async (username) => {
    try {
        const [rows] = await pool.query('SELECT id,username,password,fullname FROM users WHERE username = ?', [username]);
        return rows[0]; 
    } catch (error) {
        throw error;
    }
};

export const loginCreate = async (username, password, fullname) => {
    try {
        const [rows] = await pool.query(
            "INSERT INTO users (username,password,fullname) VALUES (?,?,?)",
            [username, password, fullname]
        );
        return { id: rows.insertId, username, password, fullname };
    } catch (error) {
        throw error;
    }
};

