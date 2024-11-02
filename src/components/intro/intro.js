import React from 'react';
import './intro.css';
import bg from '../../assets/image.png'
import btnimg from '../../assets/hireme.png'
import {Link} from 'react-scroll';


const Intro = () => {
  return (
   <section id='intro'>
    <div className='introcontent'>
    <span className='hello'>Hello,</span>
    <span className='introtext'>I'm <span className='introname'>Samriddhi</span><br/>Website Designer </span>
    <p className='intropara'>I am a skilled web designer with experience in creating  visually appealing and user friendly websites.</p>

   
   <Link><button className='btn'> 
    <img src={btnimg} alt='Hire Me' className='btnimg'/>Hire Me
    </button></Link>
    
    </div>
    <img src={bg} alt='profile' className='bg'/>
   </section>
  )
}

export default Intro;
