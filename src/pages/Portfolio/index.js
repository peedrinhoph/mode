import React from 'react';
import PageHeader from '../../components/PageHeader';
import PageFooter from '../../components/PageFooter';
import Image from '../../assets/images/image1.png';
import './styles.css';

function Portfolio() {

    return (
        <div id="page-teacher-list" className="container">
                <div class="wrapper">
                    <div class="parallax-container">
                        <div class="background">
                            <img class="background__image" src={Image} />
                        </div>
                        <div class="foreground">
                            <div class="foreground__content">
                                <h1>Oooo, parallax</h1>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Portfolio;