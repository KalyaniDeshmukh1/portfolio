import React from 'react'
import './intro.css';
import passport from '../Assets/Portfolio_passport.jpg';

const Intro = () => {
  const handleDownload = () => {
    // Directing to the PDF file in the public folder
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/resume.pdf`;  // Use backticks for template literal
    link.download = 'resume.pdf';
    link.click();
  };

  return (
    <section id='intro'>
        <div className='introcontent'>
            <span className='hello'>Hello, I'm</span>
            <span className='introText'> <span className='introName'><i>Kalyani Deshmukh</i></span><br/>
            𝔽𝕦𝕝𝕝 𝕊𝕥𝕒𝕔𝕜 𝔻𝕖𝕧𝕖𝕝𝕠𝕡𝕖𝕣
            </span>
            <p className='intropara'> Experinced in end-to-end application development, from responsive UI design to backend logic and database management. Passionate about writing clean, efficient, and maintainable code.</p>
            <button id='resumebtn' onClick={handleDownload}>View Resume</button>
        </div>
        <img src={passport} alt='passport' id='home_passport'/>
    </section>
  )
}

export default Intro;
