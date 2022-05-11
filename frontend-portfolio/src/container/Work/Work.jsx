import React, { useEffect, useState } from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
// import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { motion } from 'framer-motion'
import {
  Box,
  Image,
  Link,
  Icon,
  Text,
  Flex,
  HStack,
  Container,
  Grid,
} from '@chakra-ui/react'

import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client'

const Work = () => {
  const [works, setWorks] = useState([])
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })
  const [activeFilter, setActiveFilter] = useState('All')
  const [filterWork, setFilterWork] = useState([])
  // const scrollRef = useRef(null)

  useEffect(() => {
    const query = '*[_type == "works"]'
    client.fetch(query).then((data) => {
      setWorks(data)
      setFilterWork(data)
    })
  }, [])

  const handleWorkFilter = (item) => {
    setActiveFilter(item)
    setAnimateCard([{ y: 100, opacity: 0 }])

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }])
      if (item === 'All') {
        setFilterWork(works)
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)))
      }
    }, 500)
  }

  // const scroll = (direction) => {
  //   const { current } = scrollRef
  //   if (direction === 'left') {
  //     current.scrollLeft -= 300
  //   } else {
  //     current.scrollLeft += 300
  //   }
  // }

  return (
    <Container maxW='container.2xl'>
      <Box textStyle='h1' color='paint.700'>
        My Creative
        <Box as='span'> Portfolio </Box>
      </Box>
      <Flex
        direction='row'
        justify='center'
        align='center'
        flexWrap='wrap'
        m='4rem 0 2rem'
      >
        {['Web App', 'UI/UX', 'React Js', 'All'].map((item, index) => (
          <Box
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`portfolio-section app-flex ${
              activeFilter === item ? 'portfolio-item-active' : ''
            }`}
          >
            {item}
          </Box>
        ))}
      </Flex>
      {/* <Flex
        maxW='100%'
        flex='1'
        p='1rem'
        mt={6}
        as={motion.div}
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        ref={scrollRef}
      >
        <Flex className='scrolling' overflowX='scroll'>
          {filterWork.map((work, index) => (
            <Box
              key={index}
              className='app-work-item'
              borderRadius='md'
              bgColor={work.bgColor}
              cursor='pointer'
            >
              <Box className='app-flex app-work-image'>
                <Image
                  src={urlFor(work.imgUrl)}
                  alt={work.name}
                  boxSize='100%'
                  borderRadius='md'
                  objectFit='cover'
                />
                <Box display={{ base: 'none', xl: 'block' }}>
                  <HStack
                    as={motion.div}
                    whileHover={{ opacity: [0, 1] }}
                    transition={{
                      duration: 0.25,
                      ease: 'easeInOut',
                      staggerChildren: 0.5,
                    }}
                    spacing='6px'
                    justify='center'
                    className='app-work-hover'
                  >
                    <Link href={work.projectLink} isExternal rel='noreferrer'>
                      <Box
                        as={motion.div}
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{
                          duration: 0.25,
                        }}
                      >
                        <Box className='app-work-inner-img'>
                          <Icon
                            as={AiFillEye}
                            boxSize='70%'
                            color='paint.700'
                            m='auto'
                          />
                        </Box>
                      </Box>
                    </Link>

                    <Link href={work.codeLink} isExternal rel='noreferrer'>
                      <Box
                        as={motion.div}
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{
                          duration: 0.25,
                        }}
                      >
                        <Box className='app-work-inner-img'>
                          <Icon
                            as={AiFillGithub}
                            boxSize='70%'
                            color='paint.700'
                            m='auto'
                          />
                        </Box>
                      </Box>
                    </Link>
                  </HStack>
                </Box>
                <Box display={{ base: 'block', xl: 'none' }}>
                  <HStack
                    spacing={6}
                    justify='center'
                    className='app-work-github'
                  >
                    <Link href={work.projectLink} isExternal rel='noreferrer'>
                      <Box
                        as={motion.div}
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{
                          duration: 0.25,
                        }}
                      >
                        <Box className='app-work-inner-img'>
                          <Icon
                            as={AiFillEye}
                            boxSize='40%'
                            color='paint.700'
                            m='auto'
                          />
                        </Box>
                      </Box>
                    </Link>

                    <Link href={work.codeLink} isExternal rel='noreferrer'>
                      <Box
                        as={motion.div}
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{
                          duration: 0.25,
                        }}
                      >
                        <Box className='app-work-inner-img'>
                          <Icon
                            as={AiFillGithub}
                            boxSize='40%'
                            color='paint.700'
                            m='auto'
                          />
                        </Box>
                      </Box>
                    </Link>
                  </HStack>
                </Box>
              </Box>

              <Box className='app-work-content'>
                <Text
                  textStyle='h4'
                  mt={{ base: '1rem', '2xl': '3rem' }}
                  color='paint.100'
                  mb={2}
                >
                  {work.title}
                </Text>
                <Text textStyle='p' color='paint.100' textAlign='left'>
                  {work.description}
                </Text>

                <Box className=' app-work-tag' borderRadius='md' bgColor='#fff'>
                  <Text textStyle='p'>{work.tags[0]}</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Flex>
      <Flex
        //display={{ base: 'none', lg: 'block' }}
        position='absolute'
        bottom='50%'
        width='100%'
      >
        <Flex justify='space-between' align='center' py={1}>
          <Icon
            as={HiChevronLeft}
            fontSize={{ base: '2xl', md: '3xl' }}
            color='paint.700'
            cursor='pointer'
            onClick={() => scroll('left')}
            style={{ transform: 'translateX(-16px)' }}
          />
          <Icon
            as={HiChevronRight}
            fontSize={{ base: '2xl', md: '3xl' }}
            color='paint.700'
            cursor='pointer'
            onClick={() => scroll('right')}
            style={{ transform: 'translateX(4px)' }}
          />
        </Flex>
      </Flex> */}

      <Grid
        templateColumns={{
          sm: 'repeat(2, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
          xl: 'repeat(4, 1fr)',
          '2xl': 'repeat(4, 1fr)',
          base: 'repeat(1, 1fr)',
        }}
        as={motion.div}
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        gap={5}
        py='5rem'
      >
        {filterWork.map((work, index) => (
          <Box
            key={index}
            className='app-work-item'
            borderRadius='md'
            bgColor={work.bgColor}
            cursor='pointer'
          >
            <Box className='app-flex app-work-image'>
              <Image
                src={urlFor(work.imgUrl)}
                alt={work.name}
                boxSize='100%'
                borderRadius='md'
                objectFit='cover'
              />
              <Box display={{ base: 'none', xl: 'block' }}>
                <HStack
                  as={motion.div}
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: 'easeInOut',
                    staggerChildren: 0.5,
                  }}
                  spacing='6px'
                  justify='center'
                  className='app-work-hover'
                >
                  <Link href={work.projectLink} isExternal rel='noreferrer'>
                    <Box
                      as={motion.div}
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{
                        duration: 0.25,
                      }}
                    >
                      <Box className='app-work-inner-img'>
                        <Icon
                          as={AiFillEye}
                          boxSize='70%'
                          color='paint.700'
                          m='auto'
                        />
                      </Box>
                    </Box>
                  </Link>

                  <Link href={work.codeLink} isExternal rel='noreferrer'>
                    <Box
                      as={motion.div}
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{
                        duration: 0.25,
                      }}
                    >
                      <Box className='app-work-inner-img'>
                        <Icon
                          as={AiFillGithub}
                          boxSize='70%'
                          color='paint.700'
                          m='auto'
                        />
                      </Box>
                    </Box>
                  </Link>
                </HStack>
              </Box>
              <Box display={{ base: 'block', xl: 'none' }}>
                <HStack
                  spacing={6}
                  justify='center'
                  className='app-work-github'
                >
                  <Link href={work.projectLink} isExternal rel='noreferrer'>
                    <Box
                      as={motion.div}
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{
                        duration: 0.25,
                      }}
                    >
                      <Box className='app-work-inner-img'>
                        <Icon
                          as={AiFillEye}
                          boxSize='40%'
                          color='paint.700'
                          m='auto'
                        />
                      </Box>
                    </Box>
                  </Link>

                  <Link href={work.codeLink} isExternal rel='noreferrer'>
                    <Box
                      as={motion.div}
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{
                        duration: 0.25,
                      }}
                    >
                      <Box className='app-work-inner-img'>
                        <Icon
                          as={AiFillGithub}
                          boxSize='40%'
                          color='paint.700'
                          m='auto'
                        />
                      </Box>
                    </Box>
                  </Link>
                </HStack>
              </Box>
            </Box>

            <Box className='app-work-content'>
              <Text
                textStyle='h4'
                mt={{ base: '1rem', '2xl': '3rem' }}
                color='paint.100'
                mb={2}
              >
                {work.title}
              </Text>
              <Text textStyle='p' color='paint.100' textAlign='left'>
                {work.description}
              </Text>

              <Box className=' app-work-tag' borderRadius='md' bgColor='#fff'>
                <Text textStyle='p'>{work.tags[0]}</Text>
              </Box>
            </Box>
          </Box>
        ))}
      </Grid>
    </Container>
  )
}

export default AppWrap(MotionWrap(Work, 'app-works'), 'work', 'app-dark-bg')
