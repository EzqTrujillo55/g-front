
import { MenuBook } from "@material-ui/icons";
import styled from "styled-components";
import { SidebarTitle, SidebarOption } from "./SidebarItems";
import { Title } from "./Title";
import Link from 'next/link'
const SidebarWrapper = styled.div`
    position: absolute;
    width: 200px;
    height: 100vh;
    left: 0px;
    top: 1px;
    background: linear-gradient(180deg, #2C497F 0%, rgba(255, 255, 255, 0) 100%), #2C497F;
    padding-top: 105px;
    padding-left: 38px;
    padding-right: 103px;
    `;

export const Sidebar = () => {
    const options = [
        {
            'icon': 'Home',
            'text': 'HOME',
            'page': './Profile'
        },
        {
            'icon': 'Profile',
            'text': 'Perfil',
            'page': './Profile'
        },
        {
            'icon': 'Person',
            'text': 'Ofertas',
            'page': './Profile'
        },
        {
            'icon': 'Business',
            'text': 'Pasantes',
            'page': './Practicants' 
        }
    ]
    return(
        <SidebarWrapper>
            <div style={{display:'flex', justifyContent:'center'}}>
                <MenuBook style={{color: 'white', fontSize: 50, marginLeft: 20}} />
            </div>
            <SidebarTitle>Empresa</SidebarTitle>
            <hr style={{height: '1px', color: 'white', width: '100px'}} />
           {
               options.map((item) => 
                <Link href={item.page}>
                    <SidebarOption >{item.text}</SidebarOption>
                </Link>
               )
           }
        </SidebarWrapper>
    )
}