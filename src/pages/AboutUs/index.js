import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/PageHeader';

import './styles.css';

function AboutUs() {
    const [scroll, setScroll] = useState('hidden');

    useEffect(() => {
        window.onscroll = () => handleScroll()
    }, []);

    function handleScroll() {
        if (document.documentElement.scrollTop > 130) {
            setScroll({ className: 'show' })
        }

    }
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="conheça um pouco sobre nós"/>
            <main>
                <span id="mouse"></span>
            </main>
        </div>
    )
}

export default AboutUs;