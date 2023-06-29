import { findMaterialByUserId, findMaterialById, createMaterial, updateMaterial, deleteMaterial } from "../models/materialModel.js";
export const materialShowController = async (req, res) => {
  try {
    const materials = await findMaterialByUserId(req.userId);
    if (!materials) {
      return res.status(404).json({ message: "Material  no encontrado" });
    }


    return res.status(200).json({ message: "Operación exitosa", materials });
  } catch (error) {
    console.error("Error en el controlador para mostrar:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const materialConsultController = async (req, res) => {
  try {
    const { id } = req.params;
    const materialId = await findMaterialById(id, req.userId);
    if (!materialId) {
      return res.status(404).json({ message: "Material no encontrado" });
    }
    return res.status(200).json({ message: "Material encontrado exitosamente", materialId });
  } catch (error) {
    return res.status(500).json({ message: "Error interno del servidor" });
  }
}

export const materialCreateController = async (req, res) => {
  try {
    const { nombre, peso, valor } = req.body;
    const materials = await createMaterial(req.userId, nombre, peso, valor);
    return res.status(200).json({ message: "Operación exitosa", materials });
  } catch (error) {
    return res.status(500).json({ message: "Error interno del servidor" });
  }
}
export const materialEditController = async (req, res) => {
  try {
    const { nombre, peso, valor } = req.body;
    const { id } = req.params;
    const materialId = await findMaterialById(id, req.userId);
    if (!materialId) {
      return res.status(404).json({ message: "Material  no encontrado" });
    }

    const materials = await updateMaterial(id, nombre, peso, valor, req.userId);
    return res.status(200).json({ message: "Operación exitosa", materials });
  } catch (error) {
    return res.status(500).json({ message: "Error interno del servidor" });
  }
}
export const materialDeleteController = async (req, res) => {
  try {
    const { id } = req.params;
    const materialId = await findMaterialById(id, req.userId);
    if (!materialId) {
      return res.status(404).json({ message: "Material no encontrado" });
    }
    const deletedMaterials = await deleteMaterial(id, req.userId);

    if (deletedMaterials) {
      return res.status(200).json({ message: "Material eliminado exitosamente", deletedMaterials });
    } else {
      return res.status(500).json({ message: "No se pudo eliminar el material" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};
