import { extendTheme } from '@chakra-ui/react'
const work = extendTheme({
  styles: {
    global: {
      '.portfolio-section': {
        bgColor: '#fff',
        color: '#000',
        fontWeight: 'extrabold',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        m: '0.5rem',
        borderRadius: { base: 'md', '2xl': '2xl' },
        p: { base: '0.5rem 0.5rem', '2xl': '1rem 2rem' },
        _hover: { bgColor: 'paint.200', color: '#fff' },
      },
      '.portfolio-item-active': {
        bgColor: 'paint.200',
        color: '#fff',
      },
      '.app-work-portfolio': {
        flexWrap: 'wrap',
        justifyContent: 'center',
        align: 'center',
      },
      '.app-work-item': {
        //w: { base: '330px', md: '370px', lg:'400px', '2xl': '430px' },
        display: 'flex',
        flexDirection: 'column',
        mr: '1rem',
        position: 'relative',
        p: { base: '1rem', '2xl': '1.25rem' },
        color: '#000',
        transition: 'all 0.3s ease-in-out',
        _hover: {
          boxShadow: {
            base: 'none',
            md: '9px 8px 40px -5px rgba(255,255,255,0.75)',
          },
        },
      },
      '.app-work-image': {
        w: { base: '230px', md: '270px', lg: '300px', '2xl': '430px' },
        h: { base: '230px', '2xl': '350px' },
        position: 'relative',
      },
      '.app-work-hover': {
        position: 'absolute',
        top: '0',
        left: '0',
        bottom: '0',
        right: '0',
        borderRadius: 'md',
        bgColor: 'rgba(0, 0, 0, 0.5)',
        transition: 'all 0.3s ease',
        opacity: '0',
        boxSize: '100%',
      },
      '.app-work-inner-img': {
        boxSize: '60px',
        borderRadius: 'full',
        bgColor: 'rgba(0, 0, 0, 0.5)',
        color: '#fff',
        m: '1rem',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        display: 'flex',
        justify: 'center',
        align: 'center',
      },
      '.app-work-content': {
        padding: '0.5rem',
        w: '100%',
        position: 'relative',
        FlexDirection: 'column',
      },
      '.app-work-tag': {
        position: 'absolute',
        padding: '0.5rem 1rem',
        top: '-25px',
        right: '25px',
      },
      '.app-work-github': {
        position: 'absolute',
        top: '0',
        left: '0',
        bottom: '0',
        right: '0',
        boxSize: '100%',
      },
    },
  },
})

export default work
