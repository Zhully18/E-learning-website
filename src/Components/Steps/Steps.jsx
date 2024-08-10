import React from 'react'
import './Steps.css'
import { FcApproval, FcReadingEbook } from 'react-icons/fc'
import { IoIosPeople } from 'react-icons/io'
import { easeInOut, motion } from 'framer-motion'

export const slideUp = (delay) => {
    return {
        hidden: {
            opacity: 0,
            y: 100,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: delay,
                ease: easeInOut
            }
        }
    }
}

const Steps = () => {
  return (
    <div>
        <div className="steps">
            <div className="step">
                {/* lets animate each step list*/}
                <motion.div
                variants={slideUp(0.2)}
                initial= "hidden"
                whileInView= "show"
                 className="step_list">
                    <FcReadingEbook className='icon'/>
                    <div className="content">
                        <h3>Interactive Learning</h3>
                        <p>Engage with hands-on projects and real-world scenarios and learn from industry leaders and seasoned professionals</p>
                    </div>
                </motion.div>
                <motion.div
                variants={slideUp(0.6)}
                initial= "hidden"
                whileInView= "show"
                 className="step_list">
                    <FcApproval className='icon'/>
                    <div className="content">
                        <h3>Accredited Programs</h3>
                        <p>Gain skills that make you stand out in the job market and earn certifications that are recognized by employers worldwide.</p>
                    </div>
                </motion.div>
                <motion.div
                variants={slideUp(1.1)}
                initial= "hidden"
                whileInView= "show"
                 className="step_list">
                    <IoIosPeople className='icon'/>
                    <div className="content">
                        <h3>Supportive Community</h3>
                        <p>Connect with fellow students and mentors across the globe to stay updated with the latest trends and technologies.</p>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Steps