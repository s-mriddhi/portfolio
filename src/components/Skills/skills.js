import React from 'react'
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
   <section id='skills'> 
  <span className='skilltitle'>  What I do</span>
  <span className='skilldesc'> I am a skilled and passionate web designer with experience in creating user-friendly and visually appealing websites. i have a understanding of design and a keen eye for detail. I am proficient in HTML,CSS and JavaScript.</span>
   <div className='skillbars'>
    <div className='skillbar'>
        <img className='skillbarimg' src={UIDesign} alt='Uidesign'/>
        <div className='skillbartext'>
            <h2>UI/UX Design</h2>
            <p>I am proficient in UI/UX designing.</p>
        </div>
    </div>
    <div className='skillbar'>
        <img className='skillbarimg' src={WebDesign} alt='Webdesign'/>
        <div className='skillbartext'>
            <h2>Website Design</h2>
            <p>I am proficient in creating to-the-point website designs.</p>
        </div>
    </div>
    <div className='skillbar'>
        <img className='skillbarimg' src={AppDesign} alt='Appdesign'/>
        <div className='skillbartext'>
            <h2>App Design</h2>
            <p>I am proficient in app designing.</p>
        </div>
    </div>
   
   </div>
   </section>
  )
}

export default Skills
