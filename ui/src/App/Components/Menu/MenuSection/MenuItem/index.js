import React from 'react';
import {MenuItemContainer,MenuItemTitle} from './styles';
function MenuItem(menuItem){
    return <MenuItemContainer>
        <MenuItemTitle>{menuItem.name}</MenuItemTitle>
    </MenuItemContainer>
}

export default MenuItem;