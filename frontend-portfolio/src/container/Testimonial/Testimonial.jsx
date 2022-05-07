import React, { useEffect, useState } from 'react'
import { Box, Flex, Image, Text, Icon, Stack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

import { urlFor, client } from '../../client'
import { AppWrap, MotionWrap } from '../../wrapper'

const Testimonial = () => {
  const [brands, setBrands] = useState([])
  const [testimonials, setTestimonials] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleClick = (index) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    const query = '*[_type == "testimonials"]'
    const brandsQuery = '*[_type == "brands"]'
    client.fetch(query).then((data) => {
      setTestimonials(data)
    })
    client.fetch(brandsQuery).then((data) => {
      setBrands(data)
    })
  }, [])

  const test = testimonials[currentIndex]
  const basicButtonStyle = {
    boxSize: '30px',
    color: 'paint.200',
    m: 'auto',
  }

  return (
    <>
      {testimonials.length && (
        <>
          <Box className='app-flex app-testimonial-item'>
            <Image
              src={urlFor(test.imgurl)}
              alt='testimonials'
              boxSize={{ base: '100px', '2xl': '150px' }}
              m='auto'
              borderRadius='full'
              objectFit='cover'
            />
            <Flex className='app-testimonial-content'>
              <Text
                textStyle='p'
                fontSize={{ base: '1.25rem', '2xl': '2rem' }}
                color='#221704'
                lineHeight={{ base: '2rem', '2xl': '3.5rem' }}
                fontWeight='extrabold'
              >
                {test.feedback}
              </Text>
              <Stack spacing={1} direction='column' mt={2}>
                <Box textStyle='h4' fontWeight='medium' color='paint.300'>
                  {test.name}
                </Box>
                <Text color='paint.300' fontWeight='thin'>
                  {test.company}
                </Text>
              </Stack>
            </Flex>
          </Box>
          <Box className='app-flex' mt={4}>
            <Stack direction='row' spacing={6}>
              <Box
                as='button'
                className='app-testimonial-btn app-flex'
                onClick={() =>
                  handleClick(
                    currentIndex === 0
                      ? testimonials.length - 1
                      : currentIndex - 1
                  )
                }
              >
                <Icon as={HiChevronLeft} sx={basicButtonStyle} />
              </Box>
              <Box
                as='button'
                className='app-testimonial-btn app-flex'
                onClick={() =>
                  handleClick(testimonials.length - 1 ? 0 : currentIndex + 1)
                }
              >
                <Icon as={HiChevronRight} sx={basicButtonStyle} />
              </Box>
            </Stack>
          </Box>
        </>
      )}
      <Box className='app-flex app-testimonial-brands'>
        {brands.map((brand) => (
          <Box
            as={motion.div}
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
            w={{ base: '120px', sm: '150px', '2xl': '210px' }}
            m={{ base: '1rem', sm: '1.5rem', '2xl': '2rem' }}
          >
            <Image
              src={urlFor(brand.imgUrl)}
              alt={brand.name}
              w='100%'
              h='auto'
              objectFit='cover'
              filter='grayscale(1)'
              _hover={{ filter: 'grayscale(0)' }}
            />
          </Box>
        ))}
      </Box>
    </>
  )
}

export default AppWrap(
  MotionWrap(Testimonial, 'app-testimonial'),
  'testimonial',
  'app-teal-bg'
)
