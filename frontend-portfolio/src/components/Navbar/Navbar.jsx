import React from 'react'
import {
  Box,
  Flex,
  HStack,
  VStack,
  Icon,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Spacer,
  Link,
  Heading
} from '@chakra-ui/react'
import { exploreRouterMenu } from '../../constants'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  // const outerBoxStyles = {
  //   background: 'rgba(255,255,255,0.25)',
  //   border: '1px solid rgba(255,255,255,0.18)',
  // }

  return (
    <Flex
      // sx={outerBoxStyles}
      position='fixed'
      align='center'
      justify='space-between'
      zIndex={2}
      p='1rem 1rem'
      w='100%'
    >
      {/* desktop menu */}
      <Flex justify='flex-start' align='center' flex='1'>
        {/* <Image
          src={images.cover}
          alt='logo'
          w={{ base: '120px', '2xl': '180px' }}
          h={{ base: '40px', '2xl': '40px' }}
        /> */}
        <Heading as='h3' color='pallete.100'>
          Cobi
        </Heading>
      </Flex>
      <HStack
        spacing={6}
        align='center'
        justify='center'
        display={{ base: 'none', md: 'block' }}
      >
        <>
          {exploreRouterMenu.map((menu) => (
            <Link
              textStyle='p'
              key={menu.sectionId}
              href={`#${menu.path}`}
              textTransform='uppercase'
              fontWeight='semibold'
              color='pallete.100'
              transition='all 0.3s ease-in-out'
              _hover={{ color: 'paint.700' }}
            >
              {menu.sectionLabel}
            </Link>
          ))}
        </>
      </HStack>
      <Spacer display={{ base: 'none', md: 'block' }} />

      {/* mobile */}
      <Box display={{ base: 'block', md: 'none' }}>
        <Icon
          as={HiMenuAlt4}
          width={8}
          height={8}
          borderRadius='full'
          onClick={isOpen ? onClose : onOpen}
          variant='unstyled'
          color='pallete.100'
        />
        <Drawer
          placement={'right'}
          onClose={onClose}
          isOpen={isOpen}
          size='full'
          as={motion.div}
          whileInView={{ x: [300, 0] }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
        >
          <DrawerOverlay />
          <DrawerContent
            bgGradient='linear(to-r, pallete.300, pallete.400)'
            bgSize='cover'
            bgRepeat='repeat'
            boxShadow='md'
          >
            <DrawerHeader>
              <Icon as={HiX} w={8} h={8} onClick={onClose} color='pallete.100' />
            </DrawerHeader>
            <DrawerBody p={2}>
              <VStack alignItems='center' spacing={10}>
                <>
                  {exploreRouterMenu.map((menu) => (
                    <Link
                      key={menu.sectionId}
                      href={`#${menu.path}`}
                      onClick={onClose}
                      color='pallete.100'
                      fontSize='1rem'
                      textTransform='uppercase'
                      fontWeight='semibold'
                      transition='all 0.3s ease-in-out'
                      _hover={{ color: 'paint.700' }}
                    >
                      {menu.sectionLabel}
                    </Link>
                  ))}
                </>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Flex>
  )
}
