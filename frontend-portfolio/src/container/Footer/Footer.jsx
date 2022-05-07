import React, { useState } from 'react'
import {
  Box,
  Flex,
  Image,
  LinkBox,
  LinkOverlay,
  FormControl,
  Input,
  Textarea,
  Button,
  Stack,
  Text,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import { client } from '../../client'

const Footer = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  const onSubmit = (data) => {
    setLoading(true)
    const contact = {
      _type: 'contact',
      name: data.name,
      email: data.email,
      message: data.message,
    }
    client
      .create(contact)
      .then(() => {
        setLoading(false)
        setIsFormSubmitted(true)
      })
      .catch((err) => console.log(err))
  }

  return (
    <>
      <Box textStyle='h1' color='paint.700'>
        Swing down and Chat with me
      </Box>
      <Flex
        justify='space-evenly'
        align='center'
        flexWrap='wrap'
        m='4em 2rem 2rem'
        w='100%'
      >
        <Stack direction={{ base: 'column', md: 'row' }} spacing={10}>
          <Flex className='app-footer-cards'>
            <Image src={images.email} alt='email' boxSize='40px' />
            <LinkBox mx='2'>
              <LinkOverlay
                href='mailto:cobimbachu@gmail.com'
                textStyle='p'
                color='pallete.200'
              >
                cobimbachu@gmail.com
              </LinkOverlay>
            </LinkBox>
          </Flex>
          <Flex className='app-footer-cards'>
            <Image src={images.mobile} alt='mobile' boxSize='40px' />
            <LinkBox mx='3'>
              <LinkOverlay
                href='tel: +2348132793245'
                textStyle='p'
                color='paint.700'
              >
                +2348132793245
              </LinkOverlay>
            </LinkBox>
          </Flex>
        </Stack>
      </Flex>
      {!isFormSubmitted ? (
        <Box w={{ base: '100%', lg: '50%' }} mt={6} p={5}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack direction='column' spacing='20px' mb={4} p={6}>
              <FormControl>
                <Input
                  id='name'
                  type='name'
                  placeholder='Your name'
                  name='name'
                  _placeholder={{ color: 'pallete.100' }}
                  focusBorderColor='pallete.200'
                  variant='flushed'
                  {...register('name', { required: true })}
                />
                {errors.name && <span>This field is required</span>}
              </FormControl>
              <FormControl>
                <Input
                  id='email'
                  type='email'
                  name='email'
                  placeholder='Your email'
                  _placeholder={{ color: 'pallete.100' }}
                  focusBorderColor='pallete.200'
                  variant='flushed'
                  {...register('email', { required: true })}
                />
                {errors.email && <span>This field is required</span>}
              </FormControl>
              <FormControl>
                <Box>
                  <Textarea
                    placeholder='Your message'
                    name='message'
                    _placeholder={{ color: 'pallete.100' }}
                    focusBorderColor='pallete.200'
                    variant='flushed'
                    {...register('message', { required: true })}
                  />
                  {errors.message && <span>Please input a message</span>}
                </Box>
              </FormControl>
            </Stack>
            <Flex justify='center'>
              <Button type='submit' variant='with-shadow' size='lg'>
                {loading ? 'Sending...' : 'Send message'}
              </Button>
            </Flex>
          </form>
        </Box>
      ) : (
        <Box mt={6}>
          <Box textStyle='h1'>Thank you for getting in touch!</Box>
        </Box>
      )}
      <Flex
        w='100%'
        p={{ base: '2rem', sm: '2rem 0 0' }}
        direction='column'
        justify='flex-end'
        align='flex-end'
      >
        <Text textStyle='p' textTransform='uppercase' color='pallete.100'>
          @2022 Cobi
        </Text>
        <Text textStyle='p' textTransform='uppercase' color='pallete.100'>
          All rights reserved
        </Text>
      </Flex>
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app-footer'),
  'contact',
  'app-leaf-bg'
)
