import React, { useState, useEffect } from "react";
import API from '../Axios/Api';
import { useParams,useNavigate } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from "axios";
export default function ModifCompte({match}){

    const [numero_de_compte, setnumero_de_compte] = useState("");
    const [solde, setsolde] = useState("");
    const [type, settype] = useState("");
    const [Client, setClient] = useState("");
    const [Agence, setAgence] = useState("");
    const [inputFile, setInputFile] = useState("");

    let Navigate = useNavigate();
    const {id} = useParams();
    useEffect(()=>{
        API.get('/api/Comptes/'+id).then(res => {
            setnumero_de_compte(res.data.numero_de_compte);
            setsolde(res.data.solde);
            settype(res.data.type);
            setClient(res.data.Client);
            setAgence(res.data.Agence);
            
        })
    },[]);
    const handleSubmit = (event) => {
        event.preventDefault();
        const articleObject = {
            id:id,
            numero_de_compte: numero_de_compte,
            solde: solde,
            type: type,
            Client: Client,
            Agence: Agence,
            };
        API.put('/api/Comptes/'+id,articleObject ).then(res => console.log(res.data));
        Navigate("/Comptes/ListComptes")

    }
    return (
    <Grid md={3}  style={{"margin-left":" 65px"}}>
        <h2>Modification d'un compte </h2>
    <form onSubmit={handleSubmit}>
    
   
    <TextField
        variant="outlined"
        fullWidth
        label="numero_de_compte"
        value={numero_de_compte}
        onChange={e => setnumero_de_compte(e.target.value)}
        margin="normal"
        size="small"
    />
    <TextField
        variant="outlined"
        fullWidth
        label="solde"
        value={solde}
        onChange={e => setsolde(e.target.value)}
        margin="none"
        size="small"
    />
    <TextField
        variant="outlined"
        fullWidth
        label="type"
        value={type}
        onChange={e => settype(e.target.value)}
        margin="none"
        size="small"
    />
    <TextField
        variant="outlined"
        fullWidth
        label="Client"
        value={Client}
        onChange={e => setClient(e.target.value)}
        margin="none"
        size="small"
    />
    <TextField
        variant="outlined"
        fullWidth
        label="Agence"
        value={Agence}
        onChange={e => setAgence(e.target.value)}
        margin="none"
        size="small"
    />
    
    <div>
    <Button variant="contained" color="primary" size="large" type="submit">Submit</Button>
    </div> 
    </form>
    
    </Grid>
    );
}