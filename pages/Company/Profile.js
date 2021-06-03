import React from 'react';
import { MainContainer } from '../../components/Content';
import { Header } from '../../components/Header';
import { HeaderOptions } from '../../components/HeaderOptions';
import { ProfileBack } from '../../components/ProfileBack';
import { Sidebar } from '../../components/Sidebar';
import { Title } from '../../components/Title';
import PersonIcon from '@material-ui/icons/Person';
import { PersonOutline } from '@material-ui/icons';

const Profile = () => {
    const profileInfo = {
        business: {
            name: 'Coca-Cola',
            phone: '0998331231',
            localPhone: '2623225',
            email: 'correpn@epn.edu.ec',
            address: 'Ladrón de Guevara'
        },
        manager:{
            fullName: 'Peter Parker',
            phone: '094214124',
            localPhone: '25635235',
            email: 'peter@mail.com',
            address: 'New York',
            position: 'Lider de departamento de ciencias'
        }
    }

    
    return(
        <React.Fragment>
        <ProfileBack/>
        <Sidebar/>
        <Header/>
        <HeaderOptions/>
        <MainContainer>
           <div style={{display:'flex', flexDirection:'row', gap: '20px'}}>
               <PersonOutline style={{fontSize: 170, backgroundColor: '#0B132B', borderRadius: 40}}/>
               <div style={{display:'flex', flexDirection: 'column'}}>
                <label>Perfil de la empresa</label>
                <div style={{backgroundColor:'white', padding: 20, display:'flex', flexDirection:'column', marginTop: 10, borderRadius: 10, width: '500px'}}>
                    <label style={{color: '#1890FF'}}> {profileInfo.business.name}</label>
                    <label style={{color: 'black'}}>{profileInfo.business.phone} </label>
                    <label style={{color: 'black'}}>{profileInfo.business.localPhone} </label>
                    <label style={{color: 'black'}}>{profileInfo.business.email} </label>
                    <label style={{color: 'black'}}>{profileInfo.business.address} </label>
                </div>
                <br/>
                <label>Información del Responsable</label>
                <div style={{backgroundColor:'white', padding: 20, display:'flex', flexDirection:'column', marginTop: 10, borderRadius: 10, width: '500px'}}>
                    <label style={{color: '#1890FF'}}> {profileInfo.manager.fullName}</label>
                    <label style={{color: 'black'}}>{profileInfo.manager.position} </label>
                    <label style={{color: 'black'}}>{profileInfo.manager.phone} </label>
                    <label style={{color: 'black'}}>{profileInfo.manager.localPhone} </label>
                    <label style={{color: 'black'}}>{profileInfo.manager.email} </label>
                    <label style={{color: 'black'}}>{profileInfo.manager.address} </label>
                </div>
               </div>
           </div>
        </MainContainer>
        </React.Fragment>
    )
}



export default Profile; 
