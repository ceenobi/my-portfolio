import React from 'react'
import { Flex, Spinner } from '@chakra-ui/react'

export default function Loading() {
  return (
    <Flex justifyContent='center' bg='pallete.300' minHeight='100vh' align='center'>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='paint.700'
        color='paint.200'
        size='xl'
      />
    </Flex>
  )
}
