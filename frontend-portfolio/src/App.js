import { Suspense, lazy } from 'react'
import { Loading } from './wrapper'

const Navbar = lazy(() => import('./components/Navbar/Navbar'))
const Skills = lazy(() => import('./container/Skills/Skills'))
const About = lazy(() => import('./container/About/About'))
const Work = lazy(() => import('./container/Work/Work'))
const Header = lazy(() => import('./container/Header/Header'))
const Testimonial = lazy(() => import('./container/Testimonial/Testimonial'))
const Footer = lazy(() => import('./container/Footer/Footer'))

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonial />
        <Footer />
      </Suspense>
    </>
  )
}

export default App
