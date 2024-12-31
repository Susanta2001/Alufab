import React from 'react'
import '../csstwo/AboutPage.css'
import BannerImage from './Images/principal.jpg'
import ScrollAni from './ScrollAni'
import SchoolCareer from './SchoolCareer'
import Faculty from './Faculty'

function AboutPage() {
    return (
        <>
            <div className="about-banner"></div>
            {/* principles message */}
            <div className="principles-message-container container d-flex justify-content-around align-items-center my-5">
                <div className="principles-message-container-text-box d-flex flex-column align-items-start">
                    <h1>The Principal</h1>
                    <div className="inner-text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repudiandae repellendus nihil voluptatum impedit voluptatem ipsum itaque perspiciatis velit sint?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repudiandae repellendus nihil voluptatum impedit voluptatem ipsum itaque perspiciatis velit sint?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repudiandae repellendus nihil voluptatum impedit voluptatem ipsum itaque perspiciatis velit sint?</p>
                    </div>
                </div>
                <div className="principles-message-container-image-box">
                    <img src={BannerImage} alt="" />
                </div>
            </div>
                <ScrollAni/>
                <SchoolCareer/>
                <Faculty/>
        </>
    )
}

export default AboutPage
