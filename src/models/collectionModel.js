import { pool } from "../db.js";

export const findCollectionByUserId = async (userId) => {
  try {
    const query = 'SELECT c.id, c.material_id, c.quantity_collected, c.collection_date, c.user_id, user_id FROM collections c JOIN users u ON c.user_id = u.id WHERE u.id = ?';
    const [rows] = await pool.query(query, [userId]);
    return rows;
  } catch (error) {
    throw error;
  }
};

export const findCollectionById = async (collectionId) => {
  try {
    const query = 'SELECT id,material_id, quantity_collected, collection_date, user_id FROM collections WHERE id = ?';
    const [rows] = await pool.query(query, [collectionId]);
    return rows[0];
  } catch (error) {
    throw error;
  }
};

export const createCollection = async (materialId, quantityCollected, collectionDate, userId) => {
  try {
    const query = 'INSERT INTO collections (material_id, quantity_collected, collection_date, user_id) VALUES (?, ?, ?, ?)';
    const values = [materialId, quantityCollected, collectionDate, userId];
    const [result] = await pool.query(query, values);
    return result.insertId;
  } catch (error) {
    throw error;
  }
};

export const updateCollection = async (collectionId, materialId, quantityCollected, collectionDate, userId) => {
  try {
    const query = 'UPDATE collections SET material_id = ?, quantity_collected = ?, collection_date = ? WHERE id = ? AND user_id = ?';
    const values = [materialId, quantityCollected, collectionDate,collectionId,  userId];
    const [result] = await pool.query(query, values);
    return result.affectedRows;
  } catch (error) {
    throw error;
  }
};

export const deleteCollection = async (collectionId, userId) => {
  try {
    const query = 'DELETE FROM collections WHERE id = ? AND user_id = ?';
    const [result] = await pool.query(query, [collectionId,userId]);
    return result.affectedRows;
  } catch (error) {
    throw error;
  }
};
