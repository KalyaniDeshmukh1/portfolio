import React from 'react'
import './intro.css';

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
            𝒲𝑒𝒷 𝒟𝑒𝓈𝒾𝑔𝓃𝑒𝓇
            </span>
            <p className='intropara'>Innovative Front-End Developer Focused on Modern, Mobile-Optimized Web Solutions.</p>
            <button id='resumebtn' onClick={handleDownload}>View Resume</button>
        </div>
        <img src="/porfolio/Portfolio_passport.jpg" alt="passport" id="home_passport"/>

    </section>
  )
}

export default Intro;
