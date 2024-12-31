import React from 'react'
import '../csstwo/SchoolCareer.css'

function SchoolCareer() {
    return (
        <div>
            <div className="container-fluid d-flex flex-column justify-content-center align-items-center py-5" id="career-container">

                <h1 className="header-text text-center text-color my-3">Life of Nobel Academy</h1>
                <div className="container d-flex text-dark">
                    <div className="container d-flex flex-column text-end">
                        {/* left side first node */}
                        <div className="left-first left-career-box">
                            <h3 className="text-color">2008</h3>
                            <p>Lorem ipsum dolor sit. <br></br> Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="left-third left-career-box">
                            <h3 className="text-color">2019</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing.<br></br>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="container" style={{ borderLeft: '1px solid black' }}>
                        <div className="right-second right-career-box">
                            <h3 className="text-color">2017</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing.<br></br>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="right-third right-career-box">
                            <h3 className="text-color">2023</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SchoolCareer
