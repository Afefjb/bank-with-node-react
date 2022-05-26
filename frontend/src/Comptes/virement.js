import React, { useState, useEffect } from "react";
import API from '../Axios/Api';
import { useParams,useNavigate } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from "axios";
export default function VirementSolde({match}){

    const [soldeaj, setsoldeaj] = useState("");
    const [soldeanc,setsoldeanc] = useState("");
    const [idcompte,setidcompte] = useState("");
    const [soldeanc2,setsoldeanc2] = useState("");
    let Navigate = useNavigate();
    const {id} = useParams();
    useEffect(()=>{
        API.get('/api/Comptes/'+id).then(res => {
            setsoldeanc(res.data.solde);   
        })
        
        
    },[]);
    API.get('/api/Comptes/'+idcompte).then(res => {
        setsoldeanc2(res.data.solde);   
    })
    const handleSubmit = (event) => {
        event.preventDefault();
        const articleObject = {
            id:id,
            solde:parseFloat(soldeanc)-parseFloat(soldeaj),
            };
        API.put('/api/Comptes/'+id,articleObject ).then(res => console.log(res.data));
        const article2Object = {
            solde:parseFloat(soldeanc2)+parseFloat(soldeaj),
        };
        API.put('/api/Comptes/'+idcompte,article2Object ).then(res => console.log(res.data));
        
        Navigate("/Comptes/ListComptes")
        window.location.reload(false);

    }
    
    return (
    <Grid md={3}  style={{"margin-left":" 65px"}}>
        <h2>Virement</h2>
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
    <TextField
        variant="outlined"
        fullWidth
        label="id compte"
        value={idcompte}
        onChange={e => setidcompte(e.target.value)}
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