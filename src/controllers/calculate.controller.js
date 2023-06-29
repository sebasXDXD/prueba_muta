export const calculareOptimalRouteController = (req, res) => {
    try {
      const { materiales, pesoRequerido } = req.body;
  
      // Filtrar los materiales por nombre
      const nombresPermitidos = ["Plastico", "Carton", "Vidrio", "Metales"];
      const materialesFiltrados = materiales.filter(material => nombresPermitidos.includes(material.nombre));
  
      // Filtrar los materiales por peso requerido
      const materialesFiltradosPorPeso = materialesFiltrados.filter(material => material.peso <= pesoRequerido);
  
      // Ordenar los materiales por valor de forma descendente
      const materialesOrdenados = materialesFiltradosPorPeso.sort((a, b) => b.valor - a.valor);
  
      if (materialesOrdenados.length > 0) {
        const materialOptimo = materialesOrdenados[0];
        return res.status(200).json({ message: "La ruta de optimización es", materialOptimo });
      }
  
      return res.status(404).json({ message: "No se encontró ningún material que cumpla con los criterios" });
    } catch (error) {
      return res.status(500).json({ message: "Error interno del servidor" });
    }
  };