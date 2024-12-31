import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import '../assets/css/admissionform.css';

function AdmissionForm() {
    const [formData, setFormData] = useState({
        branch: '',
        regNumber: '',
        photo: null,
        firstName: '',
        middleName: '',
        lastName: '',
        gender: '',
        dob: '',
        admissionClass: '',
        parentRelation: '',
        parentFirstName: '',
        parentLastName: '',
        parentEmail: '',
        parentPhone: '',
        parentQualification: '',
        parentAddress: '',
        // ... Add other fields here
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'file' ? files[0] : value, // Handle file input separately
        });
    };


    const handleApplyNow = async () => {
        // Navigate to Trial component with props (firstName) passed as state
        navigate('/trial', { state: { formData } });
    };



    return (
        <>
            <div className='admissionform-main bg-dark text-light d-flex justify-content-center align-items-center border'>
                <div className="form-container" style={{ margin: '6rem 0rem' }} >
                    <h1>2025 Admission At Nobel's Academy</h1>
                    <form>
                        <p>Admisssion at Nobel's Academy</p>
                        <div className="form-group">
                            <div className="row-identifier">

                                <label htmlFor="branch">Please Select Branch</label>
                                <select
                                    id="branch"
                                    name="branch"
                                    value={formData.branch}
                                    onChange={handleChange}
                                >
                                    <option value="ABC">ABC</option>
                                    <option value="XYZ">XYZ</option>
                                </select>


                                <div className="form-group">
                                    <label htmlFor="regNumber">Registration Number*</label>
                                    <input
                                        type="text"
                                        id="regNumber"
                                        name="regNumber"
                                        value={formData.regNumber}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="photo">Photo of the Student</label>
                                    <input
                                        type="file"
                                        id="photo"
                                        name="photo"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="button" className="btn" onClick={handleApplyNow}>
                            Apply Now
                        </button>
                        {/* Repeat for other fields */}
                    </form>

                </div>
            </div>
        </>
    );
}

AdmissionForm.propTypes = {};

export default AdmissionForm;