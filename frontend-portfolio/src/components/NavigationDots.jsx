import React from 'react'
import { Flex, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { exploreRouterMenu } from '../constants'

export default function NavigationDots({ active }) {
  return (
    <Flex
      justify='center'
      align='center'
      direction='column'
      display={{ base: 'none', sm: 'block' }}
      m='auto'
      p='1rem'
    >
      {exploreRouterMenu.map((menu) => (
        <LinkBox key={menu.sectionId}>
          <Text
            boxSize={{ base: '10px', '2xl': '20px' }}
            borderRadius='full'
            bgColor='pallete.100'
            m='0.5rem'
            transition='background-color 0.2s ease-in-out'
            _hover={{ bgColor: 'paint.200' }}
            style={active === menu.path ? { backgroundColor: '#313BAC' } : {}}
          >
            <LinkOverlay href={`#${menu.path}`} />
          </Text>
        </LinkBox>
      ))}
    </Flex>
  )
}
