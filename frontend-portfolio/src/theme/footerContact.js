import { extendTheme } from '@chakra-ui/react'
const footerContact = extendTheme({
  styles: {
    global: {
      '.app-footer-cards': {
        bgColor: 'pallete.100',
        alignItems: 'center',
        borderRadius: 'md',
        transition: 'all 0.3s ease-in-out',
        p: '1.5rem',
        w: '100%',
        fontWeight: 'bold',
        _hover: { boxShadow: 'sm' },
      },
      '.app-footer-cards:last-child': {
        bgColor: 'pallete.500',
        _hover: { boxShadow: 'sm #f2f7fb' },
      },
      Input: {
        color: 'paint.700',
      },
      Textarea: {
        color: 'paint.700',
      },
    },
  },
})

export default footerContact
