import React from 'react';
import Header from './Components/Header';
import Menu from './Components/Menu';
import {AppContainer} from './styles';
function App(){
    return <AppContainer>
    <Menu/>
        <Header/>
    </AppContainer>
}

export default App;