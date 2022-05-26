import React, { useState } from "react";    
import API from '../Axios/Api';
import {  useNavigate } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from "axios";
export default function Ajoutagence() {
    const [id, setid] = useState("");
    const [adresse, setadresse] = useState("");
    const [horaire, sethoraire] = useState("");
    const [telephone, settelephone] = useState("");
    const [logo, setlogo] = useState();
    const [inputFile, setInputFile] = useState("");
    let Navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const agencetObject = {
            id:id,
            adresse: adresse,
            horaire: horaire,
            telephone: telephone,
            logo: logo,
        };
    //console.log(produitObject);
    API.post('/api/Agences/',agencetObject ).then(res => console.log(res.data))
    Navigate('/Agences/ListAgences')    
    }
    return (
    <Grid md={3} style={{"margin-left":" 65px"}}>
    <h2>Ajout d'une agence </h2>
    <form onSubmit={handleSubmit}>
    <TextField
        variant="outlined"
        fullWidth
        label="id"
        value={id}
        onChange={e => setid(e.target.value)}
        margin="normal"
        size="small"
    />
    <TextField
        variant="outlined"
        fullWidth
        label="adresse"
        value={adresse}
        onChange={e => setadresse(e.target.value)}
        margin="normal"
        size="small"
    /><TextField
    variant="outlined"
    fullWidth
    label="horaire"
    value={horaire}
    onChange={e => sethoraire(e.target.value)}
    margin="normal"
    size="small"
/><TextField
        variant="outlined"
        fullWidth
        label="Telephone"
        value={telephone}
        onChange={e => settelephone(e.target.value)}
        margin="normal"
        size="small"
    />
    <div style={{"border":"solid 1px blue","margin":"20px"}}>
        <input
            placeholder="Image"
            type="file"
            value={inputFile}
            onChange={e => { setInputFile(e.target.value);setlogo(e.target.files[0].name)}}
        />
    </div>
    
    
    <Button variant="contained" color="primary" size="large" type="submit">Submit</Button>

    </form>
    </Grid>
);
}
