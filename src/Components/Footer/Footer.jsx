import React from 'react'
import { BsInstagram, BsTwitterX } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import './Footer.css'
import { slideUp } from '../Steps/Steps'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <div>
        <div className="footer">
            <div className="container">
                <motion.div
                variants={slideUp(0.7)}
                initial= "hidden"
                whileInView= "show"
                 className="footer_details">
                    <h1>EDUKATIVE</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nobis aperiam sunt unde odit enim, nesciunt consectetur doloremque quia commodi suscipit aspernatur adipisci optio, libero numquam, accusamus totam assumenda id?</p>
                </motion.div>
                <motion.div
                variants={slideUp(1.0)}
                initial= "hidden"
                whileInView= "show"
                 className="footer_links">
                    <h2>LINKS</h2>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Courses</li>
                        <li>Contact</li>
                    </ul>
                </motion.div>
                <motion.div
                variants={slideUp(1.3)}
                initial= "hidden"
                whileInView= "show"
                 className="footer_socials">
                    <h2>Follow Us On</h2>
                    <div className="icons">
                        <FaFacebook className='footer_icon'/>
                        <BsInstagram className='footer_icon'/>
                        <BsTwitterX className='footer_icon'/>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Footer