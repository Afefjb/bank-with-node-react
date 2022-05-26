import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link}from 'react-router-dom';
import {Nav,Navbar,Form,FormControl,Container,NavDropdown}from 'react-bootstrap';
import SideNav, { Toggle, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import ListAgences from "./Agences/ListAgences";
import Ajoutagence from "./Agences/AjoutAgence";
import AjoutClient from "./Clients/AjoutClient";
import ModifAgence from "./Agences/ModifAgence";
import Listclient from "./Clients/listClients";
import ModifClient from "./Clients/ModifClient";
import ListCompte from "./Comptes/ListComptes";
import AjoutCompte from"./Comptes/AjoutCompte";
import ModifCompte from"./Comptes/ModifCompte";
import AjoutSolde from"./Comptes/ajout";
import RetraitSolde from "./Comptes/retrait";
import VirementSolde from "./Comptes/virement";
import Accueil from "./accueil";
import Login from './Authentification/Login';
function App() {
  
return (
  <Router>
      
      
    <div className="App">
    <SideNav style={{"background-color":"black"}}>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home" style={{"color":"black"}}>
        <NavItem eventKey="home" style={{"color":"black"}}>
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
            <Navbar.Brand href="/a">Bank</Navbar.Brand>
            </NavText>
        </NavItem>
        <NavItem eventKey="charts" >
            <NavIcon>
                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText >
                Agences
            </NavText>
            <NavItem >
                <NavText >
                 <Nav.Link as ={Link}to="Agences/AjoutAgence" style={{"text-decoration":"none"}}>ajout Agence</Nav.Link>  </NavText>            
            </NavItem>
            <NavItem eventKey="charts/barchart">
            <NavText>
            <Nav.Link as ={Link}to="Agences/ListAgences" style={{"text-decoration":"none"}}>Liste Agence</Nav.Link></NavText>
            </NavItem>
        </NavItem>
        <NavItem eventKey="charts1">
            <NavIcon>
                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Client
            </NavText>
            <NavItem >
                <NavText>
                 <Nav.Link as ={Link}to="Clients/AjoutClient" style={{"text-decoration":"none"}}>ajout Client</Nav.Link>  </NavText>            
            </NavItem>
            <NavItem eventKey="charts1/barchart">
            <NavText>
            <Nav.Link as ={Link}to="Clients/listClients" style={{"text-decoration":"none"}}>Liste Client</Nav.Link></NavText>
            </NavItem>
        </NavItem>
        <NavItem eventKey="charts2">
            <NavIcon>
                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Comptes
            </NavText>
            <NavItem >
                <NavText>
                 <Nav.Link as ={Link}to="Comptes/AjoutCompte" style={{"text-decoration":"none"}}>ajout Compte</Nav.Link>  </NavText>            
            </NavItem>
            <NavItem eventKey="charts2/barchart">
            <NavText>
            <Nav.Link as ={Link}to="Comptes/ListComptes" style={{"text-decoration":"none"}}>Liste Comptes</Nav.Link></NavText>
            </NavItem>
        </NavItem>
    </SideNav.Nav>
</SideNav>
    </div>
    <Routes>
    <Route exact path="/a" element={<Accueil/>}/>

        <Route exact path="Agences/ListAgences" element={<ListAgences/>}/>
        <Route exact path="Agences/AjoutAgence" element={<Ajoutagence/>}/>
        <Route exact path="Agences/ModifAgence/:id" element={<ModifAgence/>}/>
        <Route exact path="Clients/listClients" element={<Listclient/>}/>
        <Route exact path="Clients/AjoutClient" element={<AjoutClient/>}/>
        <Route exact path="Clients/ModifClient/:id" element={<ModifClient/>}/>
        <Route exact path="Comptes/ListComptes" element={<ListCompte/>}/>
        <Route exact path="Comptes/AjoutCompte" element={<AjoutCompte/>}/>
        <Route exact path="Comptes/ModifCompte/:id" element={<ModifCompte/>}/>
        <Route exact path="Comptes/ajoutsolde/:id" element={<AjoutSolde/>}/>
        <Route exact path="Comptes/RetraitSolde/:id" element={<RetraitSolde/>}/>
        <Route exact path="Comptes/VirementSolde/:id" element={<VirementSolde/>}/>
        <Route path="/" element={<Login/>}></Route>




      
    </Routes>
    </Router>
  );
}

export default App;