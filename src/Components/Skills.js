import React from 'react';
import './Skills.css';
import UXDesign from '../Assets/UX_design.png';
import WebsiteDesign from '../Assets/Website_design.png';
import SoftwareTesting from '../Assets/Software_testing.png';

const Skills = () => {
  return (
    <section id="skills">
      {/* Title Bar */}
      <span id="skillTitle">
        What I do 
      </span>
      <span id="skillDescription">
        A skilled web designer and dedicated software tester work hand in hand to create visually captivating, intuitive interfaces and ensure every detail is tested to deliver flawless, high-quality experiences
      </span>


      <div id="skillBars">

        {/* First skill set div bar */}
        <div id="skillBar">
          <img src={UXDesign} className="skillbarImg" alt="UX Design" />
          <div id="skillbarText">
            <h2>UX Design</h2>
            <p>Creating user-centered, intuitive interfaces.</p>
          </div>
        </div>

        {/* Second skill set div bar */}
        <div id="skillBar">
          <img src={WebsiteDesign} className="skillbarImg" alt="Website Design" />
          <div id="skillbarText">
            <h2>Website Design</h2>
            <p>Building visually appealing and responsive designs.</p>
          </div>
        </div>

        {/* Third skill set div bar */}
        <div id="skillBar">
          <img src={SoftwareTesting} className="skillbarImg" alt="Software Testing" />
          <div id="skillbarText">
            <h2>Software Testing</h2>
            <p>Ensuring reliable, high-quality application performance.</p>
          </div>
        </div>


      </div>
    </section>
  );
}

export default Skills;
