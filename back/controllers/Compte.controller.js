import mongoose from "mongoose";
import Compte from "../models/Compte.model.js";
export const getComptes = async (req, res) => {
try {
    const cat = await Compte.find().populate("Agence").populate("Client");

    res.status(200).json(cat);
} catch (error) {
    res.status(404).json({ message: error.message });
}
};
export const getCompteByID = async (req, res) => {
try {
    const c = await Compte.findById(req.params.id).populate("Agence").populate("Client");

    res.status(200).json(c);
} catch (error) {
    res.status(404).json({ message: error.message });
}
};
export const createCompte = async (req, res) => {
const {
    numero_de_compte,
    solde,
    type,
    Agence,
    Client
} = req.body;

const newCompte = new Compte({
    numero_de_compte:numero_de_compte,
    solde:solde,
    type:type,
    Agence:Agence,
    Client:Client
        
});
try {
    await newCompte.save();
    res.status(201).json(newCompte);
} catch (error) {
    res.status(409).json({ message: error.message });
}
};
export const updateCompte = async (req, res) => {
const { id } = req.params;
const {
    numero_de_compte,
    solde,
    type,
    Agence,
    Client
} = req.body;
if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`pas de Compte avec un id: ${id}`);
const c1 = {
    numero_de_compte:numero_de_compte,
    solde:solde,
    type:type,
    Client:Client,
    Agence: Agence,
    _id: id,
};
await Compte.findByIdAndUpdate(id, c1);
res.json(c1);
};
export const deleteCompte = async (req, res) => {
const { id } = req.params;
if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`pas de Compte avec l'ID: ${id}`);
await Compte.findByIdAndDelete(id);
res.json({ message: "Compte supprimé avec succès." });
};
