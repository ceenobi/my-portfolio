import { extendTheme } from '@chakra-ui/react'
const skill = extendTheme({
  styles: {
    global: {
      '.app-skills-item': {
        flexDirection: 'column',
        textAlign: 'center',
        margin: '1rem',
        transition: 'all 0.3s ease-in-out',
      },
      '.app-skills-exp-item': {
        w: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        m: '1rem 0',
      },
      '.app-skills-exp-work': {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        mb: '1rem',
        cursor: 'pointer',
      },
    },
  },
})

export default skill