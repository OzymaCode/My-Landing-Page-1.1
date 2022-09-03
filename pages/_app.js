import * as React from 'react'
import { useRef } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider } from '@emotion/react'
import theme from '../src/theme'
import createEmotionCache from '../src/createEmotionCache'
import Header from '../components/Header'
import '../styles/globals.css'
import { useEffect } from 'react'
import Typography from '@mui/material/Typography'
import { useRouter } from 'next/router'
import { BsChevronCompactRight } from 'react-icons/bs'
import { BsChevronCompactLeft } from 'react-icons/bs'
import {
  AnimatePresence,
  motion,
  useDragControls,
  useMotionValue,
  useTransform,
} from 'framer-motion'
import { wrapper, store } from '../redux/store'
import { Provider } from 'react-redux'

const clientSideEmotionCache = createEmotionCache()

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  const router = useRouter()
  const arrowLeft = (route) => {
    return (
      <Typography
        variant="body2"
        style={{
          fontSize: '90px',
          cursor: 'pointer',
        }}
        onClick={() => router.push(route)}
      >
        <BsChevronCompactLeft color="#232b2b" />
      </Typography>
    )
  }
  const arrowRight = (route) => {
    return (
      <Typography
        variant="body2"
        style={{
          fontSize: '90px',
          cursor: 'pointer',
        }}
        onClick={() => router.push(route)}
      >
        <BsChevronCompactRight color="#232b2b" />
      </Typography>
    )
  }
  const constraintsRef = useRef(null)
  const routerDirectory = (page, directionToGo) => {
    if (directionToGo == 'left') {
      switch (page) {
        case '/skills':
          router.push('/')
          console.log('home')
          break
        case '/portfolio':
          router.push('/skills')
          console.log('skills')
          break
        case '/contact':
          router.push('/portfolio')
          console.log('portfolio')
          break
        default:
          break
      }
    } else if (directionToGo == 'right') {
      switch (page) {
        case '/':
          router.push('/skills')
          console.log('skills')
          break
        case '/skills':
          router.push('/portfolio')
          console.log('portfolio')
          break
        case '/portfolio':
          router.push('/contact')
          console.log('contact')
          break
        default:
          break
      }
    }
  }
  const x = useMotionValue(0)
  const opacity = useTransform(x, [-400, 0, 400], [0.5, 1, 0.5])

  let xOnStart = 0
  const startDrag = (e) => {
    xOnStart = e.clientX
  }
  const endDrag = (e) => {
    let change = e.clientX - xOnStart
    if (e.clientX == 0) {
      console.log('0')
    } else if (change > 100) {
      routerDirectory(router.pathname, 'left')
    } else if (change < -100) {
      routerDirectory(router.pathname, 'right')
    }
  }

  let variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { delay: 1 },
  }

  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <div className=" fixed z-0 background h-full w-full"></div>

          <div className="overflow-x-hidden flex relative z-1 items-center justify-center col m-0 h-full w-full p-0">
            {router.pathname == '/' && <div style={{ opacity: 0 }}></div>}
            {router.pathname == '/skills' && arrowLeft('/')}
            {router.pathname == '/portfolio' && arrowLeft('/skills')}
            {router.pathname == '/contact' && arrowLeft('/portfolio')}
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 1 }}
                style={{ x, opacity }}
                className="h-full w-full"
                ref={constraintsRef}
                onDragStart={startDrag}
                onDragEnd={endDrag}
                drag="x"
                dragConstraints={constraintsRef}
              >
                <Component {...pageProps} key={router.pathname} />
              </motion.div>
            </AnimatePresence>
            {router.pathname == '/' && arrowRight('/skills')}
            {router.pathname == '/skills' && arrowRight('/portfolio')}
            {router.pathname == '/portfolio' && arrowRight('/contact')}
            {router.pathname == '/contact' && (
              <div style={{ opacity: 0 }}></div>
            )}
          </div>
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  )
}

export default wrapper.withRedux(MyApp)

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
}
