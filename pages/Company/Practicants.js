import React from 'react';
import { MainContainer } from '../../components/Content';
import { Header } from '../../components/Header';
import { HeaderOptions } from '../../components/HeaderOptions';
import { ProfileBack } from '../../components/ProfileBack';
import { Sidebar } from '../../components/Sidebar';
import { Title } from '../../components/Title';
import PersonIcon from '@material-ui/icons/Person';
import { PersonOutline } from '@material-ui/icons';
import Link from 'next/link';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { AcceptButton } from '../../components/Buttons';
const Practicants = () => {
    const postulations = 
    [
        {
            praticant: {
            name: 'Gabriela García',
            city: 'Quito',
            university: 'EPN'
            },
            offer:{
            title: 'Experto en QA'
            }
        },
        {
            praticant: {
            name: 'Pedro Picapiedra',
            city: 'Guayaquil',
            university: 'EPN'
            },
            offer:{
            title: 'Diseño UI/UX'
            }
        },
    ]

    
    return(
        <React.Fragment>
        <ProfileBack/>
        <Sidebar/>
        <Header/>
        <HeaderOptions/>
        <MainContainer>
               
        <Table  aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell style={{color: '#4ECDC4'}}>Nombre</TableCell>
            <TableCell style={{color: '#4ECDC4'}} align="right">Ciudad</TableCell>
            <TableCell style={{color: '#4ECDC4'}} align="right">Universidad</TableCell>
            <TableCell style={{color: '#4ECDC4'}} align="right">Oferta</TableCell>
            <TableCell style={{color: '#4ECDC4'}} align="right">Acciones</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {postulations.map((postulation, index) => (
            <TableRow key={index}>
              <TableCell style={{color:'white'}} component="th" scope="row">
                {postulation.praticant.name}
              </TableCell>
              <TableCell style={{color:'white'}} align="right">{postulation.praticant.city}</TableCell>
              <TableCell style={{color:'white'}} align="right">{postulation.praticant.university}</TableCell>
              <TableCell style={{color:'white'}} align="right">{postulation.offer.title}</TableCell>
              <TableCell style={{color:'white'}} align="right">  
                <AcceptButton/>
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
                
               
               
               
        
        </MainContainer>
        </React.Fragment>
    )
}



export default Practicants; 
