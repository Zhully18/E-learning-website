import React from 'react'
import { courses } from '../data'
import './Courses.css'
import { slideUp } from '../Steps/Steps'
import { motion } from 'framer-motion'

const Courses = () => {
  return (
    <div>
        <div className="course_container">
            <h2>Explore Our Courses</h2>
            <div className="courses_card">
                {courses.map((course) => {
                    return (
                        <div key={course.id} className="course_card">
                            <motion.img
                            variants={slideUp(0.9)}
                            initial= "hidden"
                            whileInView= "show"
                             src={course.image} alt="" className='course-img'/>
                            <div className="course_details">
                                <motion.div
                                variants={slideUp(0.9)}
                                initial= "hidden"
                                whileInView= "show"
                                 className="course_info">
                                    <span>{course.icon} 4.5 </span>
                                    <span>{course.student} </span>
                                </motion.div>
                                <motion.h3
                                variants={slideUp(1.2)}
                                initial= "hidden"
                                whileInView= "show"
                                >{course.title} </motion.h3>
                                <p className="price">{course.price} </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Courses