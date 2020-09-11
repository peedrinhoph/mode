import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Portfolio from './pages/Portfolio';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import ShowMore from './pages/ShowMore';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route
                path="/"
                component={Inicio}
                exact
            />
             <Route
                path="/portfolio"
                component={Portfolio}
            />
             <Route
                path="/show-more"
                component={ShowMore}
            />
             <Route
                path="/about-us"
                component={AboutUs}
            />
            <Route
                path="/contact"
                component={Contact}
            />
        </BrowserRouter>
    )
}