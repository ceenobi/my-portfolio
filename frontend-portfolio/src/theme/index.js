import { extendTheme } from '@chakra-ui/react'
import testimonials from './testimonials'
import work from './work'
import skill from './skill'
import footerContact from './footerContact'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}
const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
}
const customTheme = extendTheme(
  {
    colors: {
      paint: {
        100: '#edf2f8',
        200: '#313bac',
        300: '#030303',
        400: '#e4e4e4',
        500: '#6b7688',
        600: '#46364a',
        700: '#ffffff',
      },
      pallete: {
        100: '#ECDBBA',
        200: '#826F66',
        300: '#00000a',
        400: '#111010',
        500: '#04293A',
      },
    },
    fonts: {
      heading: 'DM Sans, sans-serif',
      body: 'DM Sans, sans-serif',
    },

    textStyles: {
      p: {
        fontSize: ['0.8rem', null, null, '1rem', null, '1.5rem'],
        textAlign: 'left',
        color: 'paint.500',
      },
      h4: {
        fontSize: ['0.9rem', '1rem', null, null, null, '2rem'],
        fontWeight: 'extrabold',
        textAlign: 'left',
        color: 'paint.300',
      },
      h1: {
        fontSize: ['2rem', null, '2.75rem', null, null, '4rem'],
        fontWeight: 'extrabold',
        textAlign: 'center',
        textTransform: 'capitalize',
        color: 'paint.300',
        span: {
          color: 'paint.200',
        },
      },
    },
    styles: {
      global: {
        body: {
          bg: 'paint.100',
        },
        '#home': {
          bgSize: 'cover',
          bgPosition: 'center',
          bgRepeat: 'repeat',
          position: 'relative',
          bgGradient: 'linear(to-l, pallete.300, #0e3298)',
          // bgColor: '#191919',
        },
        //general
        '.app-container': {
          w: '100%',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'row',
        },
        '.app-flex': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        '.app-about': {
          flex: '1',
          w: '100%',
          flexDirection: 'column',
        },
        '.app-works': {
          flex: '1',
          w: '100%',
          flexDirection: 'column',
        },
        '.app-skills': {
          flex: '1',
          w: '100%',
          flexDirection: 'column',
        },
        '.app-testimonial': {
          flex: '1',
          w: '100%',
          flexDirection: 'column',
        },
        '.app-footer': {
          flex: '1',
          w: '100%',
          flexDirection: 'column',
        },
        '.app-leaf-bg': {
          bgColor: '#417D7A',
        },
        '.app-grey-bg': {
          bgGradient: 'linear(to-r, pallete.300, pallete.400)',
        },
        '.app-dark-bg': {
          bgColor: 'pallete.300',
        },
        '.app-teal-bg': {
          bgColor: 'pallete.500',
        },
        '.app-brown-bg': {
          bgColor: 'pallete.400',
        },
        '.navblur': {
          _webkit_backdropFilter: 'auto',
          _webkit_backdropBlur: '4px',
          backdropFilter: 'auto',
          backdropBlur: '4px',
        },
        //end general
      },
    },
    components: {
      Button: {
        baseStyle: {
          fontWeight: 'bold',
          borderRadius: 'base',
          bg: 'pallete.200',
          color: 'paint.200',
          transition: 'all 0.2s cubic-bezier(.08,.52,.52,1)',
          _hover: {
            textDecoration: 'none',
          },
          padding: 3,
        },
        sizes: {
          xl: {
            h: '56px',
            fontSize: 'lg',
            px: '32px',
          },
        },
        variants: {
          'with-shadow': {
            bg: 'pallete.100',
            color: 'paint.500',
            boxShadow: 'paint.100',
            _hover: {
              color: 'pallete.200',
            },
          },
          'with-base': {
            bg: 'pallete.100',
            color: 'paint.300',
            transition: 'all 0.2s cubic-bezier(.08,.52,.52,1)',
          },
        },
      },
    },
  },
  { config },
  work,
  testimonials,
  skill,
  footerContact,
  { breakpoints }
)

export default customTheme
