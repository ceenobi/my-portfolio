import React from 'react'
import { Flex, Spinner } from '@chakra-ui/react'

export default function Loading() {
  return (
    <Flex justifyContent='center' bg='pallete.300' minHeight='100vh'>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='paint.700'
        color='paint.200'
        size='xl'
        //mt='10rem'
        position='absolute'
        top= '50%'
        left= '50%'
        bottom= '50%'
        right='50%'
      />
    </Flex>
  )
}
