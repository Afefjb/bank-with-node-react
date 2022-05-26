import express from 'express';
const router = express.Router();
import { getComptes, getCompteByID, createCompte, updateCompte, deleteCompte } from '../controllers/Compte.controller.js';
/**
* @route GET /api/Comptes
* @desc Get All Comptes
* @access Public
*/
router.get('/', getComptes);
/**
* @route POST /api/Comptes
* @desc Ajouter un Compte
* @access Public
*/
router.post('/', createCompte);
/**
* @route GET /api/Comptes/:id
* @desc Renvoyer un Compte
* @access Public
*/
router.get('/:id', getCompteByID);
/**
* @route PUT /api/Comptes/:id
* @desc Modifier un Compte
* @access Public
*/
router.put('/:id', updateCompte);
/**
* @route DELETE /api/Comptes/:id
* @desc Supprimer un Compte
* @access Public
*/
router.delete('/:id', deleteCompte);
export default router;