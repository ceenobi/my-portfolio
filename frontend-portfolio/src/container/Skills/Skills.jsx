import React, { useEffect, useState } from 'react'
import { Box, Flex, Image, Text, Tooltip, Container } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { AppWrap, MotionWrap} from '../../wrapper'
import { urlFor, client } from '../../client'

const Skills = () => {
  const [experiences, setExperiences] = useState([])
  const [skills, setSkills] = useState([])

  useEffect(() => {
    const query = '*[_type == "experiences"]'
    const skillsQuery = '*[_type == "skills"]'
    client.fetch(query).then((data) => {
      setExperiences(data)
    })
    client.fetch(skillsQuery).then((data) => {
      setSkills(data)
    })
  }, [])
  return (
    <Container maxW='container.2xl'>
      <Box textStyle='h1' color='paint.700'>Skills & Experience</Box>
      <Flex
        w='100%'
        mt='2rem'
        direction={{ base: 'column', lg: 'row' }}
      >
        <Flex
          as={motion.div}
          flex='1'
          flexWrap='wrap'
          justify={{ base: 'center', lg: 'flex-start' }}
          align={{ base: 'center', lg: 'flex-start' }}
          mr={{ base: '0', lg: '5rem' }}
        >
          {skills.map((skill) => (
            <Box
              as={motion.div}
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='app-flex app-skills-item'
              key={skill.name}
            >
              <Box
                className='app-flex'
                style={{ backgroundColor: skill.bgColor }}
                boxSize={{ base: '70px', sm: '90px', '2xl': '150px' }}
                borderRadius='full'
                bgColor='#fef4f5'
                _hover={{ boxShadow: 'md' }}
              >
                <Image
                  src={urlFor(skill.icon)}
                  alt={skill.name}
                  boxSize='50%'
                  m='auto'
                />
              </Box>
              <Text
                textStyle='p'
                mt={{ base: '0.5rem', '2xl': '1rem' }}
                textAlign='center'
              >
                {skill.name}
              </Text>
            </Box>
          ))}
        </Flex>
        <Flex
          flex='1'
          justify='flex-start'
          align='flex-start'
          direction='column'
          mt={{ base: '2rem', lg: 'null' }}
        >
          {experiences.map((experience) => (
            <Box
              as={motion.div}
              key={experience.year}
              className='app-skills-exp-item'
              px={3}
            >
              <Box mr={{ base: '1rem', sm: '3rem' }}>
                <Text textStyle='p' color='pallete.100' fontWeight='extrabold'>
                  {experience.year}
                </Text>
              </Box>
              <Box as={motion.div} flex='1'>
                {experience.works.map((work) => (
                  <>
                    <Flex
                      as={motion.div}
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      key={work.name}
                      className='app-skills-exp-work'
                    >
                      <Tooltip
                        hasArrow
                        label={work.desc}
                        bg='pallete.100'
                        color='paint.300'
                        aria-label='A tooltip'
                        p={3}
                      >
                        <Text textStyle='p' fontWeight='extrabold' _hover={{ color: 'paint.100' }}>
                          {' '}
                          {work.name}
                        </Text>
                      </Tooltip>
                      <Text textStyle='p' mt='5px'>
                        {work.company}
                      </Text>
                    </Flex>
                  </>
                ))}
              </Box>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Container>
  )
}

export default AppWrap(MotionWrap(Skills, 'app-skills'), 'skills', 'app-brown-bg')
