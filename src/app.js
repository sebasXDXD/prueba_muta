import express from "express";
import morgan from "morgan";
import cors from "cors"
import loginRoutes from "./routes/loginRoutes.js";
import materialRoutes from "./routes/materialRoutes.js";
import collectionRoutes from "./routes/collectionRoutes.js";
import calculateRoute from "./routes/calculateRoute.js"
//import { Jwt } from "./lib/jwtConfig.js";
const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors({
  origin: "http://localhost:3001"
}));
// Routes
app.use("/api", loginRoutes);
app.use("/api", materialRoutes);
app.use("/api", collectionRoutes);
app.use("/api", calculateRoute);


app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

export default app;