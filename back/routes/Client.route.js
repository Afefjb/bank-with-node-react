import express from 'express';
const router = express.Router();
import { getClients, getClientByID, createClient, updateClient, deleteClient } from '../controllers/Client.controller.js';
/**
* @route GET /api/Clients
* @desc Get All Clients
* @access Public
*/
router.get('/', getClients);
/**
* @route POST /api/Clients
* @desc Ajouter un Client
* @access Public
*/
router.post('/', createClient);
/**
* @route GET /api/Clients/:id
* @desc Renvoyer un Client
* @access Public
*/
router.get('/:id', getClientByID);
/**
* @route PUT /api/Clients/:id
* @desc Modifier un Client
* @access Public
*/
router.put('/:id', updateClient);
/**
* @route DELETE /api/Clients/:id
* @desc Supprimer un Client
* @access Public
*/
router.delete('/:id', deleteClient);
export default router;