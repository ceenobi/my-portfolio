import React from 'react'
import { FaInstagramSquare, FaTwitter, FaFacebookF } from 'react-icons/fa'
import { Flex, Icon, Box } from '@chakra-ui/react'

export default function SocialMedia() {
  return (
    <Flex
      justify='flex-end'
      align='center'
      direction='column'
      p='1rem'
      display={{ base: 'none', sm: 'block' }}
      mt='30rem'
    >
      <Box
        boxSize='40px'
        borderRadius='full'
        display='flex'
        justify='center'
        align='center'
        my={2}
        bgColor='paint.700'
        transition='all 0.3s ease-in-out'
        _hover={{
          bg: 'pallete.100',
          borderColor: 'pallete.100',
        }}
      >
        <Icon
          as={FaTwitter}
          boxSize='15px'
          m='auto'
          color='pallete.200'
          _hover={{
            color: 'pallete.200',
          }}
        />
      </Box>
      <Box
        boxSize='40px'
        borderRadius='full'
        display='flex'
        justify='center'
        align='center'
        my={2}
        bgColor='paint.700'
        transition='all 0.3s ease-in-out'
        _hover={{
          bg: 'pallete.100',
          borderColor: 'pallete.100',
        }}
      >
        <Icon
          as={FaInstagramSquare}
          boxSize='15px'
          m='auto'
          color='pallete.200'
        />
      </Box>
      <Box
        boxSize='40px'
        borderRadius='full'
        display='flex'
        justify='center'
        align='center'
        my={2}
        bgColor='paint.700'
        transition='all 0.3s ease-in-out'
        _hover={{
          bg: 'pallete.100',
          borderColor: 'pallete.100',
        }}
      >
        <Icon as={FaFacebookF} boxSize='15px' m='auto' color='pallete.200' />
      </Box>
    </Flex>
  )
}
