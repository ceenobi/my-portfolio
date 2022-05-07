import { extendTheme } from '@chakra-ui/react'
const testimonials = extendTheme({
  styles: {
    global: {
      '.app-testimonial-item': {
        w: { base: '100%', lg: '60%' },
        minHeight: { base: '320px', '2xl': '450px' },
        bgGradient: 'linear(to-b, #ecd599, #c9a034)',
        display: 'flex',
        flexDirection: { base: 'column', lg: 'row' },
        p: '2rem',
        borderRadius: 'lg',
        boxShadow: 'lg',
        transition: 'all 0.3s ease-in-out',
      },
      '.app-testimonial-content': {
        flex: '1',
        height: '100%',
        p: { base: '0', sm: '0 2rem' },
        textAlign: 'left',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
      },
      '.app-testimonial-brands': {
        w: { base: '100%', lg: '80%' },
        flexWrap: 'wrap',
        mt: '2rem',
      },
      '.app-testimonial-btn': {
        boxSize: '50px',
        borderRadius: 'full',
        bgColor: 'paint.700',
        transition: 'all 0.3s ease-in-out',
        _hover: { boxShadow: 'xl' },
      },
    },
  },
})

export default testimonials