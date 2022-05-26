import mongoose from "mongoose";
import Client from "../models/Client.model.js";
export const getClients = async (req, res) => {
try {
    const cat = await Client.find().populate("Agence");

    res.status(200).json(cat);
} catch (error) {
    res.status(404).json({ message: error.message });
}
};
export const getClientByID = async (req, res) => {
try {
    const c = await Client.findById(req.params.id).populate("Agence");

    res.status(200).json(c);
} catch (error) {
    res.status(404).json({ message: error.message });
}
};
export const createClient = async (req, res) => {
const {
    nom,
    prenom,
    civilite,
    datenais,
    nature_de_client,
    adresse,
    telephone,
    email,
    Photo,
    Agence,
} = req.body;

const newClient = new Client({
    nom: nom,
    prenom: prenom,
    civilite: civilite,
    datenais: datenais,
    nature_de_client: nature_de_client,
    adresse: adresse,
    telephone: telephone,
    email: email,
    Photo: Photo,
    Agence: Agence,
});
try {
    await newClient.save();
    res.status(201).json(newClient);
} catch (error) {
    res.status(409).json({ message: error.message });
}
};
export const updateClient = async (req, res) => {
const { id } = req.params;
const {
    nom,
    prenom,
    civilite,
    datenais,
    nature_de_client,
    adresse,
    telephone,
    email,
    Photo,
    Agence,
} = req.body;
if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`pas de client avec un id: ${id}`);
const c1 = {
    nom: nom,
    prenom: prenom,
    civilite: civilite,
    datenais: datenais,
    nature_de_client: nature_de_client,
    adresse: adresse,
    telephone: telephone,
    email: email,
    Photo: Photo,
    Agence: Agence,
    _id: id,
};
await Client.findByIdAndUpdate(id, c1);
res.json(c1);
};
export const deleteClient = async (req, res) => {
const { id } = req.params;
if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`pas de Sous categorie avec l'ID: ${id}`);
await Client.findByIdAndDelete(id);
res.json({ message: "client supprimé avec succès." });
};
