import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import AgenceRouter from "./routes/Agence.route.js";
import ClientRouter from "./routes/Client.route.js";
import CompteRouter from "./routes/Compte.route.js";

import userRouter from "./routes/user.route.js"
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
// Connexion à la base données
mongoose
.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connexion à la base de données réussie");
  })
  .catch((err) => {
    console.log("Impossible de se connecter à la base de données", err);
    process.exit();
  });
  app.use('/api/users', userRouter); 
  app.use("/api/Agences", AgenceRouter);
  app.use("/api/Clients", ClientRouter);
  app.use("/api/Comptes", CompteRouter);
app.get("/", (req, res) => {
  res.send("Bank");
});
app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});
