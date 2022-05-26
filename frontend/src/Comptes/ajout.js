import React, { useState, useEffect } from "react";
import API from '../Axios/Api';
import { useParams,useNavigate } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from "axios";
export default function AjoutSolde({match}){

    const [soldeaj, setsoldeaj] = useState("");
    const [soldanc,setsoldeanc] = useState("");

    let Navigate = useNavigate();
    const {id} = useParams();
    useEffect(()=>{
        API.get('/api/Comptes/'+id).then(res => {
            setsoldeanc(res.data.solde);   
        })
    },[]);
    const handleSubmit = (event) => {
        event.preventDefault();
        const articleObject = {
            id:id,
            solde:parseFloat(soldeaj)+parseFloat(soldanc),
            };
        API.put('/api/Comptes/'+id,articleObject ).then(res => console.log(res.data));
        Navigate("/Comptes/ListComptes")
        window.location.reload(false);

    }
    return (
    <Grid md={3} style={{"margin-left":" 65px"}}>
        <h2>Alimentation</h2>
    <form onSubmit={handleSubmit}>
    
   
   
    <TextField
        variant="outlined"
        fullWidth
        label="solde à ajouter"
        value={soldeaj}
        onChange={e => setsoldeaj(e.target.value)}
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