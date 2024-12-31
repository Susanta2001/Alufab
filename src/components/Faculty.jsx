import React, { useState } from "react";
import "../csstwo/Faculty.css";
import TeacherOne from './Images/principal.jpg'

function Faculty() {
    const facultyData = [
        {
            name: "Dr. John Doe",
            image: TeacherOne,
            tabs: [
                {
                    title: "Education",
                    content: (
                        <>
                            <h5>Education</h5>
                            <p>Ph.D, IIT-Somewhere</p>
                            <p>M. Tech Computer Sc. & Engg, ABC University</p>
                            <p>B. Tech XYZ Computer Sc. & Engg, Institute of Technology</p>
                        </>
                    ),
                },
                {
                    title: "Work Experience",
                    content: (
                        <>
                            <h5>Work Experience</h5>
                            <p>Assistant Professor at KGEC</p>
                            <p>Somebody at Somewhere</p>
                        </>
                    ),
                },
                {
                    title: "Areas of Interest",
                    content: (
                        <>
                            <h5>Areas of Interest</h5>
                            <p>Artificial Intelligence, Fuzzy Logic, Image Processing</p>
                        </>
                    ),
                },
                {
                    title: "Publications & Projects",
                    content: (
                        <>
                            <h5>Publications and Projects</h5>
                            <a href="/">click here</a>
                            <br />
                            <a href="/">and here</a>
                            <br />
                            <a href="/">and here too</a>
                            <br />
                        </>
                    ),
                },
                {
                    title: "Contact",
                    content: (
                        <>
                            <h5>Contact</h5>
                            <p>Phone: +91xxxxxxxxxx</p>
                            <p>E-mail: john.doe@example.com</p>
                        </>
                    ),
                },
            ],
        },
        {
            name: "Dr. Jane Smith",
            image: "path/to/jane_image.jpg",
            tabs: [
                {
                    title: "Education",
                    content: (
                        <>
                            <h5>Education</h5>
                            <p>Ph.D, University of Somewhere</p>
                            <p>M. Tech, ABC University</p>
                        </>
                    ),
                },
                {
                    title: "Work Experience",
                    content: (
                        <>
                            <h5>Work Experience</h5>
                            <p>Professor at XYZ College</p>
                        </>
                    ),
                },
                {
                    title: "Contact",
                    content: (
                        <>
                            <h5>Contact</h5>
                            <p>Email: jane.smith@example.com</p>
                        </>
                    ),
                },
            ],
        },
        // Add four more people with the same structure.
    ];

    const [selectedFaculty, setSelectedFaculty] = useState(0);
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="my-5">
            <div className="row d-flex justify-content-center">
                {/* Faculty Selector */}
                <div className="col-lg-3 col-md-3 col-sm-12 bhoechie-tab-menu">
                    <div className="list-group">
                        {facultyData.map((faculty, index) => (
                            <button
                                key={index}
                                className={`list-group-item text-center ${selectedFaculty === index ? "active" : ""
                                    }`}
                                onClick={() => {
                                    setSelectedFaculty(index);
                                    setActiveTab(0);
                                }}
                            >
                                <img
                                    src={faculty.image}
                                    alt={faculty.name}
                                    className="img-fluid mb-2"
                                    style={{ borderRadius: "50%", width: "120px", height: "120px", objectFit:'cover', }}
                                />
                                <p>{faculty.name}</p>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content */}
                <div className="col-lg-9 col-md-9 col-sm-12 d-flex bhoechie-tab-container">
                    <div className="bhoechie-tab-menu">
                        <div className="list-group">
                            {facultyData[selectedFaculty].tabs.map((tab, index) => (
                                <button
                                    key={index}
                                    className={`list-group-item text-center ${index === activeTab ? "active" : ""}`}
                                    onClick={() => setActiveTab(index)}
                                >
                                    {tab.title}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="bhoechie-tab">
                        {facultyData[selectedFaculty].tabs.map((tab, index) => (
                            <div
                                key={index}
                                className={`bhoechie-tab-content ${index === activeTab ? "active" : ""}`}
                            >
                                {tab.content}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faculty;
