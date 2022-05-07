import React from 'react'
import { motion } from 'framer-motion'
import { Box } from '@chakra-ui/react'

const MotionWrap = (Component, classNames) =>
  function HOC() {
    return (
      <Box
        as={motion.div}
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className={`${classNames} app-flex`}
      >
       <Component/>
      </Box>
    )
  }

export default MotionWrap
