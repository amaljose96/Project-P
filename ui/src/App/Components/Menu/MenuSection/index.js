import React from 'react';
import {MenuSectionContainer,MenuSectionTitle} from './styles';
import MenuItem from './MenuItem';
function MenuSection(menuSection){
    return <MenuSectionContainer>
        <MenuSectionTitle>{menuSection.name}</MenuSectionTitle>
        {
            menuSection.items.map(menuItem=>{
                return <MenuItem {...menuItem}/>
            })
        }
    </MenuSectionContainer>
}

export default MenuSection;