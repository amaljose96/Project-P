import React from 'react';
import {MenuContainer} from './styles';
import MenuSection from './MenuSection';
function Menu(props) {
    let menuSections=[
        {
            name:"Development",
            items:[
                {
                    name:"Component Designer"
                },
                {
                    name:"Behaviors"
                },
                {
                    name:"Code Preview"
                }
            ]
        },
        {
            name:"App Settings",
            items:[
                {
                    name:"Store Management"
                },
                {
                    name:"Services"
                },
                {
                    name:"Plugins"
                }
            ]
        },
        {
            name:"Export",
            items:[
                {
                    name:"Export dev build"
                },
                {
                    name:"Export production build"
                }
            ]
        },
    ]
    return <MenuContainer>
        {
            menuSections.map((section)=>{
                return <MenuSection {...section}/>
            })
        }
    </MenuContainer>;
}

export default Menu;