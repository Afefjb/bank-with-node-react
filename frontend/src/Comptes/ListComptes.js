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
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Dropdown, DropdownMenu, DropdownItem, Progress } from 'react-bootstrap';

import axios from "axios"

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

const deleteArt=(id)=>{
    API.delete('/api/Comptes/'+id)
    .then((res) => {
    console.log('successfully deleted!')
    }).catch((error) => {
    console.log(error)
    })
    window.location.reload(false);

}
const ListCompte=()=>
{ 
    const [Comptes,setComptes]=useState([ ]) 

    useEffect(() =>{
        const fetchData=async() => {
            const {data}=await API.get('/api/Comptes/');
            setComptes(data);
        };
        fetchData();
        
    },[])
    

    return(
        <TableContainer component={Paper} style={{"margin-left":" 65px"}}>
        
        <Table sx={{ minWidth: 700 }}>
        <TableHead>
            <TableRow>
            <StyledTableCell ><b>numero_de_compte</b></StyledTableCell>
            <StyledTableCell ><b>solde</b></StyledTableCell>
            <StyledTableCell><b>type</b></StyledTableCell>
            <StyledTableCell ><b>Nom de client</b></StyledTableCell>
            <StyledTableCell ><b>Adresse d'agence</b></StyledTableCell>
            <StyledTableCell ><b>Actions</b></StyledTableCell>
            <StyledTableCell ><b>Transaction</b></StyledTableCell>


            </TableRow>
        </TableHead>
        <TableBody>
            {Comptes.map((row) => (
            <StyledTableRow key={row._id}>
                <StyledTableCell >{row.numero_de_compte}</StyledTableCell>
                <StyledTableCell >{row.solde}</StyledTableCell>
                <StyledTableCell >{row.type}</StyledTableCell>
                <StyledTableCell >{row.Client.nom}  {row.Client.prenom}</StyledTableCell>
                <StyledTableCell >{row.Agence.adresse}</StyledTableCell>
                <StyledTableCell >
                <Button variant="contained" color="primary" size="medium">
                <Link exact to={`/Comptes/ModifCompte/${row._id}`} style={{"text-decoration":"none","color":"white"}}>Modifier</Link>
                </Button>
            
                <Button onClick={()=>{deleteArt(row._id)}} variant="contained"  class="btn btn-danger" color="primary" size="medium" type="submit">Supprimer</Button>
                </StyledTableCell>
                <StyledTableCell >
                <DropdownButton id="dropdown-basic-button" title="Opérations">
                    <Dropdown.Item ><Link exact to={`/Comptes/ajoutsolde/${row._id}`} style={{"text-decoration":"none","color":"black"}}>Alimentation</Link></Dropdown.Item>
                    <Dropdown.Item ><Link exact to={`/Comptes/RetraitSolde/${row._id}`} style={{"text-decoration":"none","color":"black"}}>Retrait</Link></Dropdown.Item>
                    <Dropdown.Item ><Link exact to={`/Comptes/VirementSolde/${row._id}`} style={{"text-decoration":"none","color":"black"}}>Virement</Link></Dropdown.Item>
                </DropdownButton>
                
                
                </StyledTableCell>
            </StyledTableRow>
            ))}
        </TableBody>
        </Table>
    </TableContainer>
)
}
export default ListCompte;