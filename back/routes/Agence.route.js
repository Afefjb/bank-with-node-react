import express from "express";
const router = express.Router();
import {
  getAgences,
  getAgenceByID,
  createAgence,
  updateAgence,
  deleteAgence,
} from "../controllers/Agence.controller.js";
/**
 * @route GET /api/Agences
 * @desc Get All Agences
 * @access Public
 */
router.get("/", getAgences);
/**
 * @route POST /api/Agences
 * @desc Ajouter un Agence
 * @access Public
 */
router.post("/", createAgence);
/**
 * @route GET /api/Agences/:id
 * @desc Renvoyer un Agence
 * @access Public
 */
router.get("/:id", getAgenceByID);
/**
 * @route PUT /api/Agences/:id
 * @desc Modifier un Agence
 * @access Public
 */
router.put("/:id", updateAgence);
/**
 * @route DELETE /api/Agences/:id
 * @desc Supprimer un Agence
 * @access Public
 */
router.delete("/:id", deleteAgence);
export default router;
