import React, { useState } from "react";    import API from '../Axios/Api';
import {  useNavigate } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from "axios";
export default function AjoutClient() {
    
    const [id, setid] = useState("");
    const [nom, setnom] = useState("");
    const [prenom, setprenom] = useState("");
    const [civilité, setcivilité] = useState("");
    const [datenais, setdatenais] = useState("");
    const [nature_de_client, setnature_de_client] = useState("");
    const [adresse, setadresse] = useState("");
    const [telephone, settelephone] = useState("");
    const [email, setemail] = useState("");
    const [Agence, setAgence] = useState("");
    const [Photo, setPhoto] = useState();
    const [inputFile, setInputFile] = useState("");
    let Navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const clientObject = {
            nom:nom,
    prenom:prenom,
    civilité:civilité,
    datenais:datenais,
    nature_de_client:nature_de_client,
    adresse:adresse,
    telephone:telephone,
    email:email,
    Photo:Photo,
    Agence:Agence
    };
    //console.log(produitObject);
    API.post('/api/Clients',clientObject ).then(res => console.log(res.data))
    Navigate('/Clients/listClients')
    }
    return (
    <Grid md={3} style={{"margin-left":" 65px"}}>
        <h2>Ajout d'un client </h2>
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
        label="nom"
        value={nom}
        onChange={e => setnom(e.target.value)}
        margin="normal"
        size="small"
    />
    <TextField
        variant="outlined"
        fullWidth
        label="prenom"
        value={prenom}
        onChange={e => setprenom(e.target.value)}
        margin="normal"
        size="small"
    />
<TextField
    variant="outlined"
    fullWidth
    label="civilité"
    value={civilité}
    onChange={e => setcivilité(e.target.value)}
    margin="normal"
    size="small"
/><TextField
        variant="outlined"
        fullWidth
        label="datenais"
        value={datenais}
        onChange={e => setdatenais(e.target.value)}
        margin="normal"
        size="small"
    />
    <TextField
        variant="outlined"
        fullWidth
        label="nature_de_client"
        value={nature_de_client}
        onChange={e => setnature_de_client(e.target.value)}
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
    label="telephone"
    value={telephone}
    onChange={e => settelephone(e.target.value)}
    margin="normal"
    size="small"
/><TextField
        variant="outlined"
        fullWidth
        label="email"
        value={email}
        onChange={e => setemail(e.target.value)}
        margin="normal"
        size="small"
    /><TextField
    variant="outlined"
    fullWidth
    label="agencee"
    value={Agence}
    onChange={e => setAgence(e.target.value)}
    margin="normal"
    size="small"
/>
    <div style={{"border":"solid 1px blue","margin":"20px"}}>
        <input
            placeholder="Image client"
            type="file"
            value={inputFile}
            onChange={e => { setInputFile(e.target.value);setPhoto(e.target.files[0].name)}}
        />
    </div>
    <Button variant="contained" color="primary" size="large" type="submit">Submit</Button>
    </form>

    </Grid>
);
}
