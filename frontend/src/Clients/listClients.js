import { useState,useEffect } from "react"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import API from "../Axios/Api";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import axios from "axios";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
[`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
},
[`&.${tableCellClasses.body}`]: {
    fontSize: 14,
},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
'&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
},
  // hide last border
'&:last-child td, &:last-child th': {
    border: 0,
},
}));
const deleteclient=(id)=>{
    API.delete('/api/Clients/'+id)
    .then((res) => {
    console.log('successfully deleted!')
    }).catch((error) => {
    console.log(error)
    })
    window.location.reload(false);
}

const Listclient=()=>
{ 
    const [Clients,setClients]=useState([ ]) 

    useEffect(() =>{
        const fetchData=async() => {
            const {data}=await API.get('/api/Clients/');
            setClients(data);
        };
        fetchData();
        
    },[])

    
    return(
        <TableContainer component={Paper} style={{"margin-left":" 65px"}}>
        
        <Table sx={{ minWidth: 700 }} >
        <TableHead>
            <TableRow>
                <StyledTableCell><b>Nom</b> </StyledTableCell>
                <StyledTableCell><b>prenom</b> </StyledTableCell>
                <StyledTableCell><b>civilité</b> </StyledTableCell>
                <StyledTableCell><b>datenais</b> </StyledTableCell>
                <StyledTableCell><b>nature_de_client</b> </StyledTableCell>
                <StyledTableCell><b>adresse</b> </StyledTableCell>
                <StyledTableCell><b>telephone</b> </StyledTableCell>
                <StyledTableCell><b>email</b> </StyledTableCell>
                <StyledTableCell><b>adresse de l'agence</b> </StyledTableCell>
                <StyledTableCell ><b>Photo</b></StyledTableCell>
                <StyledTableCell ><b>actions</b></StyledTableCell>

            </TableRow>
        </TableHead>
        <TableBody>
            {Clients.map((client) => (
            <StyledTableRow key={client._id}>
                <StyledTableCell >{client.nom}</StyledTableCell>
                <StyledTableCell >{client.prenom}</StyledTableCell>
                <StyledTableCell >{client.civilité}</StyledTableCell>
                <StyledTableCell >{client.datenais}</StyledTableCell>
                <StyledTableCell >{client.nature_de_client}</StyledTableCell>
                <StyledTableCell >{client.adresse}</StyledTableCell>
                <StyledTableCell >{client.telephone}</StyledTableCell>
                <StyledTableCell >{client.email}</StyledTableCell>
                <StyledTableCell >{client.Agence.adresse}</StyledTableCell>
                <StyledTableCell ><img src={`/images/${client.Photo}`} width="100"/></StyledTableCell>
                <StyledTableCell >
                <Button variant="contained" color="primary" size="medium">
                <Link exact to={`/Clients/ModifClient/${client._id}`} style={{"text-decoration":"none","color":"white"}}>Modifier</Link>
                </Button>
                
                <Button onClick={()=>{deleteclient(client._id)}} class="btn btn-danger" variant="contained" color="primary" size="medium" type="submit">Supprimer</Button>
                </StyledTableCell>
            </StyledTableRow>
            ))}
        </TableBody>
        </Table>
    </TableContainer>
    )
}
export default Listclient;
