import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '@fontsource/dm-sans'
import App from './App'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import customTheme from './theme/index'
import { AppError } from './wrapper/ErrorBoundary'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
      <AppError>
        <App />
      </AppError>
    </ChakraProvider>
  </React.StrictMode>
)
