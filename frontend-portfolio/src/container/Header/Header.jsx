import React from 'react'
import { motion } from 'framer-motion'
import { Box, Flex, Text, Image, Button, Link, Heading, Container } from '@chakra-ui/react'
import {BsArrowRightShort} from 'react-icons/bs'

import { images } from '../../constants'
import { AppWrap } from '../../wrapper'

const Header = () => {
  return (
    <Container maxW='container.2xl'>
      <Box
        display='flex'
        justify='center'
        align='center'
        flex='1'
        flexDirection={{ base: 'column', lg: 'row' }}
        w='100%'
        h='100%'
        p={{ base: '4rem 1rem 1rem', lg: '5rem 1rem 0rem' }}
        pt={{ '2xl': '8rem' }}
      >
        <Flex
          as={motion.div}
          whileInView={{ y: [-20, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          flex='0.65'
          flexDirection='column'
          justify='flex-start'
          alignItems='flex-start'
          h='100%'
          mb={10}
          w={{ base: '100%', lg: null }}
          mr={{ base: '0rem', lg: null }}
        >
          <Box
            display='flex'
            w='100%'
            justifyContent={{ base: 'flex-start' }}
            alignItems={{ base: 'flex-start' }}
            flexDirection='column'
            mt={{base:'null', lg: '5rem'}}
          >
            <Box
              justify='start'
              align='start'
              py='1rem'
              w='auto'
              boxShadow='md'
              borderRadius='md'
            >
              <Text
                textStyle='p'
                w='100%'
                color='pallete.100'
                textTransform='uppercase'
                textAlign='right'
                fontWeight='extrabold'
              >
                Web Developer & Freelancer
              </Text>
            </Box>
            <Flex
              justify='center'
              alignItems='center'
              p='1.5rem '
              bg='paint.700'
              flexDirection='column'
              w='auto'
              boxShadow='md'
              borderRadius='md'
            >
              <Box as='span' fontSize={{ base: '2.5rem', '2xl': '5rem' }}>
                👋
              </Box>
              <Box ml={2}>
                <Heading
                  as='h1'
                  fontSize={{ base: '1.8rem', sm: '3rem', '2xl': '5rem' }}
                >
                  I'm Charles
                </Heading>
                <Heading
                  as='h1'
                  fontSize={{ base: '2.5rem', sm: '4.5rem', '2xl': '5rem' }}
                >
                  Mbachu
                </Heading>
              </Box>
            </Flex>
            <Button
              mt={10}
              size='xl'
              as={Link}
              href='#contact'
              variant='with-base'
              rightIcon={<BsArrowRightShort />}
            >
              HIRE ME
            </Button>
          </Box>
        </Flex>

        {/* <Flex
        as={motion.div}
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        flex='1'
        h='100%'
        justify='flex-end'
        align='flex-end'
        position='relative'
        margin={{ base: '2rem 0', lg: null }}
      >
        <Image
          src={images.profile}
          alt='profilebg'
          boxSize='100%'
          zIndex={1}
          objectFit='contain'
        />
        <Box
          as={motion.div}
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          position='absolute'
          left={0}
          right={0}
          bottom={0}
          zIndex={0}
          w='100%'
          h='90%'
        >
          <Image src={images.circle} alt='profilecircle' />
        </Box>
      </Flex> */}

        <Flex
          as={motion.div}
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          flex='0.75'
        >
          <Image
            src={images.profile}
            alt='profilebg'
            boxSize='100%'
            zIndex={1}
            objectFit='contain'
          />
        </Flex>
      </Box>
    </Container>
  )
}

export default AppWrap(Header, 'home')
