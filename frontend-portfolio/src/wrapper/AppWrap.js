import React from 'react'
import { NavigationDots, SocialMedia } from '../components'
import { Flex } from '@chakra-ui/react'

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <Flex
        direction='row'
        id={idName}
        w='100%'
        className={`app-container ${classNames}`}
      >
        <SocialMedia />
        <Flex
          justify='center'
          align='center'
          flex='1'
          w='100%'
          direction='column'
          p='2rem 1rem'
        >
          <Component />
        </Flex>
        <NavigationDots active={idName} />
      </Flex>
    )
  }

export default AppWrap
