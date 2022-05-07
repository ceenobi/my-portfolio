import React from 'react'
import { Flex, Spinner } from '@chakra-ui/react'

export default function Loading() {
  return (
    <Flex justifyContent='center' bg='pallete.300' minHeight='100vh'>
      <Spinner color='pallete.200' size='xl' mt='10rem'/>
    </Flex>
  )
}
