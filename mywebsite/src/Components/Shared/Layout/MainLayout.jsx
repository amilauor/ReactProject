import React from 'react'
import Header from './Header'
import Body from './Body'
import { BrowserRouter} from 'react-router-dom';


function MainLayout() {
    return (
        <div>
            <BrowserRouter >
                <Header />
                <Body />
            </BrowserRouter>
        </div>
    )
}

export default MainLayout;