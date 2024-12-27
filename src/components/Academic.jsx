import React from 'react'
import '../css/Academic.css'
import academyImgOne from '../components/Images/ImgOne.png'
import academyImgTwo from '../components/Images/ImgTwo.png'
import academyImgThree from '../components/Images/ImgThree.png'

function Academic() {
  return (
    <>
        <div className="academic-center-container container">
            <div className="left-text-div d-flex flex-column w-25">
                <img className='position-img' src={academyImgTwo} alt="" />
                <div className='floating-p-first'>
                    <h3>Primary years programme</h3>
                    <p>The Primary section offers the Primary Years Programme (PYP) for children aged 3 - 12.  The programme nurtures young students to be caring, life long learners who are internationally open-minded individuals.  </p>
                    </div>
                <h3>Primary years programme</h3>
                <p>The Primary section offers the Primary Years Programme (PYP) for children aged 3 - 12.  The programme nurtures young students to be caring, life long learners who are internationally open-minded individuals.  </p>
            </div>
                <img src={academyImgOne} alt="" />
            <div className="right-text-div d-flex flex-column w-25">
            <div className='floating-p-second'>
                    <h3>Primary years programme</h3>
                    <p>The Primary section offers the Primary Years Programme (PYP) for children aged 3 - 12.  The programme nurtures young students to be caring, life long learners who are internationally open-minded individuals. </p>
                    </div>
                <h3>Primary years programme</h3>
                <p>The Primary section offers the Primary Years Programme (PYP) for children aged 3 - 12.  The programme nurtures young students to be caring, life long learners who are internationally open-minded individuals.  </p>
                <img className='position-img' src={academyImgThree} alt="" />
            </div>
        </div>
    </>
  )
}

export default Academic
