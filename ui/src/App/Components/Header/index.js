import React from 'react';
import {HeaderContainer,HeaderTopText} from './styles';
import MenuButton from './MenuButton';
import HeaderRightComponent from './HeaderRightComponent';
function Header(props){
    return <HeaderContainer>
        <MenuButton/>
        <HeaderTopText>Project P</HeaderTopText>
        <HeaderRightComponent/>
    </HeaderContainer>
}

export default Header;