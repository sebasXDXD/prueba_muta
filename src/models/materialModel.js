import { pool } from "../db.js";
export const findMaterialByUserId = async (users_id) => {
    try {
        const [rows] = await pool.query('SELECT m.users_id,m.nombre, m.peso, m.valor FROM materials m JOIN users u ON m.users_id = u.id WHERE u.id = ?', [users_id]);
        return rows; 
    } catch (error) {
        throw error;
    }
};
export const findMaterialById = async (materialId,userId) => {
  console.log(materialId,userId);
    try {
      const [rows] = await pool.query('SELECT id, nombre, peso, valor, users_id FROM materials WHERE id = ? AND users_id = ?', [materialId,userId]);
      return rows[0];
    } catch (error) {
      throw error;
    }
  };

export const createMaterial = async (users_id, nombre, peso, valor) => {
    try {
        const query = 'INSERT INTO materials (users_id, nombre, peso, valor) VALUES (?, ?, ?, ?)';
        const values = [users_id, nombre, peso, valor];
        const [result] = await pool.query(query, values);
        return result.insertId;
    } catch (error) {
        throw error;
    }
};

export const updateMaterial = async (materialId, nombre, peso, valor, userId) => {
    try {
      const query = 'UPDATE materials SET nombre = ?, peso = ?, valor = ? WHERE id = ? AND users_id = ?';
      const values = [nombre, peso, valor, materialId, userId];
      const [result] = await pool.query(query, values);
      return result.affectedRows;
    } catch (error) {
      throw error;
    }
  };
  
  export const deleteMaterial = async (materialId, userId) => {
    try {
      const query = 'DELETE FROM materials WHERE id = ? AND users_id = ?';
      const values = [materialId, userId];
      const [result] = await pool.query(query, values);
      return result.affectedRows;
    } catch (error) {
      throw error;
    }
  };
  