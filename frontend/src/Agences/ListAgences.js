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
import { Grid } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
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
const deleteag=(id)=>{
    API.delete('/api/Agences/'+id)
    .then((res) => {
    console.log('successfully deleted!')
    }).catch((error) => {
    console.log(error)
    })
    window.location.reload(false);

}
const ListAgences=()=>
{ 
    const [Agences,setAgences]=useState([ ]) 

    useEffect(() =>{
        const fetchData=async() => {
            const {data}=await API.get('/api/Agences/');
            setAgences(data);
        };
        fetchData();
        
    },[])
    
    return(
        <TableContainer component={Paper} style={{"margin-left":" 65px"}} >
        
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
            <TableRow>
            <StyledTableCell ><b>Logo</b></StyledTableCell>
            <StyledTableCell><b>adresse</b> </StyledTableCell>
            <StyledTableCell><b>horaire</b> </StyledTableCell>
            <StyledTableCell><b>telephone</b> </StyledTableCell>
            <StyledTableCell ><b>Actions</b></StyledTableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {Agences.map((agence) => (
            <StyledTableRow key={agence._id}>
                <StyledTableCell ><img src={`/images/${agence.logo}`}  height="100"/></StyledTableCell>
                <StyledTableCell >{agence.adresse}</StyledTableCell>
                <StyledTableCell >{agence.horaire}</StyledTableCell>
                <StyledTableCell >{agence.telephone}</StyledTableCell>
                <StyledTableCell >
                <Button variant="contained" color="primary" size="medium">
                <Link exact to={`/Agences/ModifAgence/${agence._id}`} style={{"text-decoration":"none","color":"white"}}>Modifier</Link>
                </Button>
                
                
                <Button onClick={()=>{deleteag(agence._id)}}  class="btn btn-danger" variant="contained" color="primary" size="medium" type="submit">Supprimer</Button>
                </StyledTableCell>

            </StyledTableRow>
            ))}
        </TableBody>
        </Table>
    </TableContainer>

    )
}
export default ListAgences;
