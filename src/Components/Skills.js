import React from 'react';
import './Skills.css';
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
        Design intuitive and user-friendly UI/UX experiences, develop scalable backend systems, and integrate databases to ensure smooth data flow.
      </span>


      <div id="skillBars">

        {/* First skill set div bar */}
        <div id="skillBar">
          <img src={WebsiteDesign} className="skillbarImg" alt="UX Design" />
          <div id="skillbarText">
            <h2>UI/UX Design</h2>
            <p>Designing intuitive, user-friendly interfaces that enhance user experience..</p>
          </div>
        </div>

        {/* Second skill set div bar */}
        <div id="skillBar">
          <img src='Backend.jpg' className="skillbarImg" alt="Website Design" />
          <div id="skillbarText">
            <h2>Backend Developer</h2>
            <p>Developing scalable, secure backend systems to support application functionality.</p>
          </div>
        </div>

        {/* Third skill set div bar */}
        <div id="skillBar">
          <img src={SoftwareTesting} className="skillbarImg" alt="Software Testing" />
          <div id="skillbarText">
            <h2>Database Integators</h2>
            <p>Integrating and managing databases to ensure efficient and reliable data flow.</p>
          </div>
        </div>


      </div>
    </section>
  );
}

export default Skills;
