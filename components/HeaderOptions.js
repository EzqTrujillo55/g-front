import { AccountBox, NotificationsNone, Sms } from "@material-ui/icons";
import styled from "styled-components";

const HeaderOptionsWrapper = styled.div`
    position: absolute;
    top: 0px;
    right: 15px;
    padding-top: 10px;
    display: flex;
    flex-direction: row;
    gap: 5px;
`;

export const HeaderOptions = () => {
    return(
        <HeaderOptionsWrapper>
            <NotificationsNone style={{color: 'white', fontSize: 35}}/>
            <Sms style={{color: 'white', fontSize: 35}} />
            <AccountBox style={{color: 'white', fontSize: 35}} />
        </HeaderOptionsWrapper>
    )
}