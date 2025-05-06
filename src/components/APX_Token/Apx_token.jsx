import React from 'react'
import { motion } from 'framer-motion'
import APX_Banner from '../../pages/APX_Token/APX_Banner'

const matureFadeVariant = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

const Apx_token = () => {
  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={matureFadeVariant}
      >
        <APX_Banner />
      </motion.div>
    </div>
  )
}

export default Apx_token
