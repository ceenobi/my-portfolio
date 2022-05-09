import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Box, Grid, Image, Text, Center, Container} from '@chakra-ui/react'
import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client'

const About = () => {
  const [abouts, setAbouts] = useState([])

  useEffect(() => {
    const query = '*[_type == "abouts"]'

    client.fetch(query).then((data) => {
      setAbouts(data)
    })
  }, [])

  return (
    <Container maxW='container.2xl'>
      <Box textStyle='h1' color='paint.700'>
        I know that
        <Box as='span'> Good Dev </Box> <br /> means
        <Box as='span'> Good Business </Box>
      </Box>
      <Center>
        <Grid
          templateColumns={{
            sm: 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
            xl: 'repeat(4, 1fr)',
            '2xl': 'repeat(4, 1fr)',
            base: 'repeat(1, 1fr)',
          }}
          gap={6}
          mt='5rem'
        >
          {/* <Flex justify='center' align='flex-start' flexWrap='wrap' mt='2rem'> */}
          {abouts.map((about, index) => (
            <Box
              as={motion.div}
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
              key={about.title + index}
              //w={{ base: '100%', sm:'200px', lg:'270px', '2xl': '370px' }}
              //  display='flex'
              // justify='center'
              // align='center'
              // flexDirection='column'
              // m={{ base: '2rem', '2xl': '2rem 4rem' }}
            >
              <Image
                src={urlFor(about.imgUrl)}
                alt={about.title}
                w='100%'
                h={{ base: '170px', '2xl': '320px' }}
                borderRadius='md'
                objectFit='cover'
              />
              <Text textStyle='h4' mt={10} color='paint.700'>
                {about.title}
              </Text>
              <Text textStyle='p' mt={5}>
                {about.description}
              </Text>
            </Box>
          ))}
        </Grid>
      </Center>
    </Container>
  )
}

export default AppWrap(
  MotionWrap(About, 'app-about'),
  'about',
  'app-grey-bg'
)
