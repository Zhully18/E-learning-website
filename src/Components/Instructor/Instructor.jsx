import React from 'react'
import man from '../../assets/man3.jpg'
import './Instructor.css'
import { easeInOut, motion } from 'framer-motion'

const slideRight = (delay) => {
  return {
    hidden: { opacity: 0 , x: -100},
    show: {opacity: 1, x:0, transition: {duration: 0.5, delay: delay, ease: easeInOut}}
  }
}

const Instructor = () => {
  return (
    <div>
        <div className="instructor">
            <div className="left">
                <motion.img
                variants={slideRight(0.2)}
                initial="hidden"
                whileInView= "show"
                 src={man} alt="" />
            </div>
            <motion.div
            variants={slideRight(0.7)}
            initial="hidden"
            whileInView= "show"
             className="right">
                <h2>Become An Instructor</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus expedita beatae necessitatibus magnam neque omnis, ad corporis voluptatum rem obcaecati veniam delectus numquam consectetur. Qui assumenda iusto vitae labore numquam.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis laboriosam modi, fugiat veritatis est odit illum porro, adipisci repudiandae recusandae aut tempora vel repellendus et accusamus natus possimus nisi deserunt?</p>
                <button>Register Today</button>
            </motion.div>
        </div>
    </div>
  )
}

export default Instructor