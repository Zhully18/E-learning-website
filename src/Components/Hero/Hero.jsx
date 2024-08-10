import React from 'react'
import './Hero.css'
import { GiRapidshareArrow } from 'react-icons/gi'
import student from '../../assets/s2.jpg'
import student1 from '../../assets/s1.jpg'
import student2 from '../../assets/s3.jpg'
import student3 from '../../assets/s4.jpg'
import { easeInOut, motion } from 'framer-motion'

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero_content">
          {/* lets animate the h1 content so it will slide from
          the left axis to the right axis */}
          <motion.h1
          initial= {{opacity: 0, x: -100}}
          animate= {{opacity: 1, x:0 }}
          transition={{duration: 0.4, delay: 0.2, ease: easeInOut}}
          exit={{
            opacity: 0, x: -100, transition: { duration: 0.2}
          }}
          ><span>Empower </span> Your Future With Cutting-Edge <span>Skills</span></motion.h1>
          <p>Unlock your potential with courses designed to help you thrive in the digital age. From coding to creative arts, we provide the tools you need to succeed. </p>
          <div className="buttons">
            <a href="#" className="cta-button">Enroll Now</a>
            <a href="#" className="courses-button">Explore Courses</a>
          </div>
          <GiRapidshareArrow className='hero_icon'/>
        </div>
        <div className="hero_images">
          <div className="img_top">
            <img src={student} alt="" className='stuent_img'/>
            <img src={student1} alt="" className='stuent_img_one'/>
          </div>
          <div className="img_bottom">
            <img src={student2} alt="" className='stuent_img_two'/>
            <img src={student3} alt="" className='stuent_img_three'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero