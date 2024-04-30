import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'


const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem pariatur nisi suscipit velit non laudantium molestiae delectus unde ipsam odio deserunt quae voluptatem maiores, quam asperiores harum quia illo explicabo.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, corrupti, ab quas rerum aliquid maxime voluptatum similique ex sequi quam iure maiores doloribus ipsum consectetur. Itaque bea</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sapiente dolorem eum aliquid, neque veniam? Odio, dicta deserunt officiis quis tempore quia temporibus, consequuntur molestiae consequatur, facere voluptate ipsam aut?</p>
      </div>
    </div>
  )
}

export default About
