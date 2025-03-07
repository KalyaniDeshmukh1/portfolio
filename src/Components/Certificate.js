import React from 'react';
import './Certificate.css';
import { useState } from 'react';
import SnowflakeCerti from '../Assets/Snowfale_Certificate.jpg'
import Pythoncert from '../Assets/Python_certificate.png'
import Implant from '../Assets/ImplantTraining.png'
import Testing from '../Assets/SoftwareTesting_Certificate.png'
import Programming from '../Assets/C_Programming_Cert.png'
import Excellence from '../Assets/Excellence_Certificate.jpg'
import Snowflake from '../Assets/Snowflake.png'
import ImplantTraining from '../Assets/Implant_training.png'
import SoftwareTesting from '../Assets/ExcelR.png'
import C_Language from '../Assets/C_Language.png'
import ExcellenceCert from '../Assets/Excellence.jpeg'



const Certificate = () => {

    const [isImageVisible, setIsImageVisible] = useState(false);
    const [ImageLink, setImageLink] = useState(false);
// First one.......
      const handleShowImage = (link) => {
        setIsImageVisible(true);
        setImageLink(link)
      };

      const handleCloseImage = () => {
        setIsImageVisible(false);
      };

  return (
    <div id='Certificates'>

      {isImageVisible && (
          <div className="image-container">
          <img
            src={ImageLink}
            alt="Sample"
            className="popup-image" 
          />
          <button onClick={handleCloseImage} className="close-btn">
            Close
          </button>
        </div>
      )}

      <h1 id='CertficateHead'>Certificates and Achievements</h1>
      
      <div className='CertificatesGrid'>

        <div className='CertificateBox'>
          <img src={Snowflake} id='CertificateImg' alt='Snowflake Certificate' />
          <p>Snowflake Pro core certification</p>
          {!isImageVisible && (
              <button onClick={()=>{handleShowImage(SnowflakeCerti)}} id='Certificatebtn1'>View Certificate</button>
          )}


        </div>

        <div className='CertificateBox'>
          <img src={ImplantTraining} id='CertificateImg' alt='Web Design Training' />
          <p>Web Design implant training by Sumago Institute</p>
          {!isImageVisible && (
              <button onClick={()=>{handleShowImage(Implant)}} id='Certificatebtn1'>View Certificate</button>
          )}
        </div>

        <div className='CertificateBox'>
          <img src={SoftwareTesting} id='CertificateImg' alt='ExcelR Certificate' />
          <p>Software Testing certificate by ExcelR Institute</p>
          <button onClick={()=>{handleShowImage(Testing)}} id='Certificatebtn3'>View Certificate</button>
        </div>

        <div className='CertificateBox'>
          <img src="./Python.jpeg" id='CertificateImg' alt='Python Certificate' />
          <p>Python Certificate by HackerRank</p>
          <button onClick={()=>{handleShowImage(Pythoncert)}} id='Certificatebtn4'>View Certificate</button>
        </div>

        <div className='CertificateBox'>
          <img src={C_Language} id='CertificateImg' alt='C Programming Certificate' />
          <p>C Programming language certificate by Disha Institute</p>
          <button onClick={()=>{handleShowImage(Programming)}} id='Certificatebtn5'>View Certificate</button>
        </div>

        <div className='CertificateBox'>
          <img src={ExcellenceCert} id='CertificateImg' alt='Excellence Certificate' />
          <p>Certificate of excellence by 64 Square LLC</p>
          <button onClick={()=>{handleShowImage(Excellence)}} id='Certificatebtn6'>View Certificate</button>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
