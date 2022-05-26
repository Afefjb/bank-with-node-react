import mongoose from "mongoose";
import Agence from "../models/Agence.model.js";
export const getAgences = async (req, res) => {
  try {
    const ag = await Agence.find();
    res.status(200).json(ag);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getAgenceByID = async (req, res) => {
  try {
    const ag = await Agence.findById(req.params.id);
    res.status(200).json(ag);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const createAgence = async (req, res) => {
  const { horaire, adresse, telephone,logo } = req.body;
  const newAgence = new Agence({
    horaire: horaire,
    adresse: adresse,
    telephone: telephone,
    logo:logo
  });
  try {
    await newAgence.save();
    res.status(201).json(newAgence);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const updateAgence = async (req, res) => {
  const { id } = req.params;
  const { horaire, adresse, telephone,logo } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`pas d' Agence avec un id: ${id}`);
  const ag1 = {
    horaire: horaire,
    adresse: adresse,
    telephone: telephone,
    logo:logo,
    _id: id,
  };
  await Agence.findByIdAndUpdate(id, ag1);
  res.json(ag1);
};
export const deleteAgence = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`pas de Agence avec l'ID: ${id}`);
  await Agence.findByIdAndDelete(id);
  res.json({ message: "Agence supprimé avec succès." });
};
