import React from 'react'
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png'
import Portfolio2 from '../../assets/portfolio-2.png'
import Portfolio5 from '../../assets/portfolio-5.png'


const Works = () => {
  return (
   <section id='works'>
    <h2 className='workstitle'>My Portfolio</h2>
    <span className='worksdesc'>I take a collaborative approach to design, working closely with clients to understand their unique needs and goals. My process involves:<br/>
Research and Discovery, Wireframing and Prototyping, Visual Design, Development and Testing, Launch and Maintenance.
</span>
<div class="portfolio-container">
  <div class="portfolio-item">
    <img src={Portfolio1} alt="Website 1"/>
    <p className='descpara'>A vibrant and engaging website created for [ABC], highlighting their E-commerce focused strategy through interactive elements and bold design choices.
      <br/><a href='www.web1.com'>See more</a>
    </p>
  
  </div>
  <div class="portfolio-item">
    <img src={Portfolio2} alt="Website 2"/>
    <p className='descpara'>A modern and sleek website designed for [XYZ], showcasing their products through a user-friendly interface and stunning visuals.
    <br/><a href='www.web2.com'>See more</a>
    </p>
  </div>
  <div class="portfolio-item">
    <img src={Portfolio5} alt="Website 3"/>
    <p className='descpara'>A fresh website design for [PQR], blending industry-specific elements with modern web design trends for a unique online presence.
    <br/><a href='www.web3.com'>See more</a>
    </p>
  </div>
</div>

    </section>
  )
}

export default Works
