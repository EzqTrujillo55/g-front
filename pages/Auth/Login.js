import React from 'react';
import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper,
  Button
} from '@material-ui/core';
import { LoginBack } from '../../components/LoginBack';
import { Title } from '../../components/Title';

import MenuBookIcon from '@material-ui/icons/MenuBook';
import PersonIcon from '@material-ui/icons/Person';
import { Row } from '../../components/Content';
import { AccountCircle, Copyright, Email, Face, Facebook, GTranslate, Phone, Search } from '@material-ui/icons';
import Link from 'next/link'

const Login = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  
  

  return (
    
      <React.Fragment>
      <LoginBack/>
      <div> 
        
      <Grid container spacing={3}  direction="row"
  justify="center">
        <Grid item xs={1}>
          <MenuBookIcon fontSize="large" style={{marginBottom: -50, fontSize: 50 }}/> 
        </Grid>
        <Grid item xs={6} >
          <Title> Inicio de Sesión</Title>
        </Grid>
      </Grid>

      
       
       
        
        <hr style={{backgroundColor:'#0B132B', height:'3px', color: '#0B132B', width: '725px'}} />
        <div style={{display: 'flex', flexDirection:'row'}}>
          <PersonIcon fontSize="large" style={{marginBottom: -50, fontSize: 200 }}/> 
          
            <div style={{display: 'flex', flexDirection:'column', marginTop: 50}}>
              <label style={{marginBottom: 10}} >Email: </label>
              <label>Password: </label>
            </div>
            <div style={{display: 'flex', flexDirection:'column', marginTop: 50}}>
              <Email style={{marginBottom: 10}}/>
              <Search/>
            </div>
            <div style={{display: 'flex', flexDirection:'column', marginTop: 50}}>
              <input style={{marginBottom: 10, width: 390}}/>
              <input style={{width: 390}}/>
              <br/>
              <div style={{ display:'flex', flexDirection:'row', justifyContent:'center'}}>
                <input type="checkbox" />
                <label>Recuérdame</label>
              </div>
              <Link href="/Company/Profile">
              <div style={{ display:'flex', flexDirection:'row', justifyContent:'center'}}>
                <button style={{ marginTop: 10, backgroundColor: '#4ECDC4', color: 'white', width: 90, borderColor:'#4ECDC4', borderRadius:5}}>
                  <label style={{fontSize:18}}>Sign In</label>
                </button>
              </div>
              </Link>

              <div style={{ display:'flex', flexDirection:'row', justifyContent:'center'}}>
                  <label style={{fontSize:18}}>o</label>
              </div>


              <div style={{ display:'flex', flexDirection:'row', justifyContent:'center'}}>
                  <label style={{fontSize:18}}>Iniciar Sesión con</label>
              </div>

              <br/>
              <div style={{ display:'flex', flexDirection:'row', gap: 40, justifyContent:'center'}}>
                  <div>
                  <Facebook style={{color: 'blue', fontSize: 30}}/>
                  <button style={{backgroundColor:'#292F36'}}>
                  <label style={{fontSize:18, color:'white'}}>Facebook</label>
                  
                  </button>
                  </div>

                  <div>
                  <GTranslate style={{color: 'red', fontSize:30}}/>
                  <button style={{backgroundColor:'#292F36'}}>
                  <label style={{fontSize:18, color: 'white'}}>Google</label>
                  </button>
                  </div>
                  

              </div>



              


            </div>

            
          
        </div>
       
      </div>
      <Footer/>
      </React.Fragment>
        
  );
};


const Footer = () => {
  return(
    <div style={{position:'absolute', bottom:0, left:0, background:'#292F36', height: 80, width: "100%", padding:10}}>
     
        <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
        <Email style={{color:'white'}} />
        <label style={{color:'white'}}> email: gabriela.garcia@epn.edu.ec</label>
        </div>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
        <Phone style={{color:'white'}} />
        <label style={{color:'white'}}> telf: 0987571481</label>
        </div>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
        <label style={{color:'white'}}>© 2021</label>
        </div>
    
    </div>
  )
}


export default Login;