import { MenuBook, NotificationsNone } from "@material-ui/icons";
import styled from "styled-components";
import { SidebarTitle, SidebarOption } from "./SidebarItems";
import { Title } from "./Title";
import {HeaderOptions} from "./HeaderOptions"; 
const HeaderWrapper = styled.div`
    position: absolute;
    width: 200px;
    height: 100vh;
    left: 210px;
    top: 0px;
    padding-top: 10px;
    padding-left: 200px;
    padding-right: 25px;
`;

export const Header = () => {
    return(
        <HeaderWrapper>
            <input style={{width: '680px', height: '31px'}} />
        </HeaderWrapper>
    )
}

