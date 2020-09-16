import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Portfolio from './pages/Portfolio';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import ShowMore from './pages/ShowMore';

const Error404 = () => {
    return (
        <h1>Opss, Pagina não encontrada!</h1>
    );
}

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route
                    path="/"
                    component={Inicio}
                    exact
                />
                <Route
                    path="/portfolio"
                    component={Portfolio}
                    exact
                />
                <Route
                    path="/portfolio/show-more/:params"
                    component={ShowMore}
                    exact />

                <Route
                    path="/about-us"
                    component={AboutUs}
                    exact
                />
                <Route
                    path="/contact"
                    component={Contact}
                    exact
                />
                <Route
                    path='*'
                    component={Error404}
                />
            </Switch>
        </Router>
    )
}