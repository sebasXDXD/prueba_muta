import { findCollectionByUserId, findCollectionById, createCollection, updateCollection, deleteCollection } from "../models/collectionModel.js";
export const collectionShowController = async (req, res) => {
  try {
    const collection = await findCollectionByUserId(req.userId);
    if (!collection) {
      return res.status(404).json({ message: "Recoleccion  no encontrada" });
    }
    return res.status(200).json({ message: "Operación exitosa", collection });
  } catch (error) {
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const collectionConsultController = async (req, res) => {
  try {
    const { id } = req.params;
    const collectionId = await findCollectionById(id, req.userId);
    if (!collectionId) {
      return res.status(404).json({ message: "Recoleccion no encontrada" });
    }
    return res.status(200).json({ message: "Recoleccion encontrado exitosamente", collectionId });
  } catch (error) {
    return res.status(500).json({ message: "Error interno del servidor" });
  }
}

export const collectionCreateController = async (req, res) => {
  try {
    const { materialId, quantityCollected, collectionDate} = req.body;
    const collection = await createCollection(materialId, quantityCollected, collectionDate, req.userId);
    return res.status(200).json({ message: "Operación exitosa", collection });
  } catch (error) {
    return res.status(500).json({ message: "Error interno del servidor",error });

  }
}
export const collectionEditController = async (req, res) => {
  try {
    const { materialId, quantityCollected, collectionDate} = req.body;
    const { id } = req.params;
    const collectionIdR = await findCollectionById(id, req.userId);

    if (!collectionIdR) {
      return res.status(404).json({ message: "Recoleccion  no encontrada" });
    }
    const collection = await updateCollection(id, materialId, quantityCollected, collectionDate, req.userId);
    return res.status(200).json({ message: "Operación exitosa", collection });
  } catch (error) {
    return res.status(500).json({ message: "Error interno del servidor", error });
  }
}
export const collectionDeleteController = async (req, res) => {
  try {
    const { id } = req.params;
    const collectionId = await findCollectionById(id, req.userId);
    if (!collectionId) {
      return res.status(404).json({ message: "Recoleccion no encontrada" });
    }
    const deletedMaterials = await deleteCollection(id, req.userId);

    if (deletedMaterials) {
      return res.status(200).json({ message: "Recoleccion eliminada exitosamente", deletedMaterials });
    } else {
      return res.status(500).json({ message: "No se pudo eliminar el material" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};
