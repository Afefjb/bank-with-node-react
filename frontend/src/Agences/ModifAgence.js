import React, { useState, useEffect } from "react";
import API from '../Axios/Api';
import { useParams,useNavigate } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from "axios";

export default function ModifAgence({match}) {

    const [adresse, setadresse] = useState("");
    const [horaire, sethoraire] = useState("");
    const [telephone, settelephone] = useState("");
    const [logo, setlogo] = useState();
    const [inputFile, setInputFile] = useState("");

    let Navigate = useNavigate();
    const {id} = useParams();
    useEffect(() => {
        API.get('/api/Agences/' + id).then(res => {
            setadresse(res.data.adresse);
            sethoraire(res.data.horaire);
            settelephone(res.data.telephone);
            setlogo(res.data.logo);

        })
    },[]);
    const handleSubmit = (event) => {
        event.preventDefault();
        const agenceObject = {
            _id: id,
            adresse: adresse,
            horaire: horaire,
            telephone: telephone,
            logo: logo,
        };
        API.put('/api/Agences/' + id, agenceObject).then(res => console.log(res.data));
        Navigate('/Agences/ListAgences')

    }
    return (
        <Grid md={3} style={{"margin-left":" 65px"}}>
            <h2>Modification d'une agence </h2>
            <form onSubmit={handleSubmit}>
            <TextField
                    variant="outlined"
                    fullWidth
                    label="adresse"
                    value={adresse}
                    onChange={e => setadresse(e.target.value)}
                    margin="normal"
                    size="small"
            />
            <TextField
                variant="outlined"
                fullWidth
                label="horaire"
                value={horaire}
                onChange={e => sethoraire(e.target.value)}
                margin="normal"
                size="small"
            />
            <TextField
            variant="outlined"
            fullWidth
            label="telephone"
            value={telephone}
            onChange={e => settelephone(e.target.value)}
            margin="normal"
            size="small"
        />
                <div style={{ "border": "solid 1px blue", "margin": "20px" }}>
                    <input
                        placeholder="Image"
                        type="file"
                        value={inputFile}
                        onChange={e => { setInputFile(e.target.value); setlogo(e.target.files[0].name) }}
                    />
                </div>
               
                <div>
                    <Button variant="contained" color="primary" size="large" type="submit">Submit</Button>
                </div>
            </form>

        </Grid>
    );
}