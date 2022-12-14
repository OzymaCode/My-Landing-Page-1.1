import React from 'react'
import Head from 'next/head'
import Typography from '@mui/material/Typography'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { HiOutlineFingerPrint } from 'react-icons/hi'

const Home = () => {
  const router = useRouter()
  const styles = {
    item1: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      height: '100%',
    },
    item2: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: '100%',
    },
    info: {
      border: 'solid black 1px',
    },
  }

  return (
    <div className="h-full w-full">
      <div className=" w-full h-full flex items-center justify-center flex-col">
        <Head>
          <title>Toby Martiny</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          end={{ opacity: 0 }}
          className="flex justify-center items-center w-full"
        >
          <div
            style={{ color: '	#232b2b' }}
            className="inlinewrap font-bold text-4xl md:px-0 px-5 flex justify-center items-center"
          >
            Hi, I&apos;m Toby and I&apos;m a Software Developer
          </div>
        </motion.div>
        <div className="relative top-20 left-24 flex justify-center items-center w-full">
          <motion.div
            animate={{ opacity: [0, 0.6, 0.6, 0, 0], x: [0, 0, -200, -200] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              delay: 3,
              repeatDelay: 3,
            }}
          >
            <HiOutlineFingerPrint size={45} />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Home

{
  /* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 2 }}
      >
        <Typography
          style={{ color: '	#232b2b', fontWeight: '600' }}
          className="absolute xl:right-16 right-5"
          variant="h6"
        >
          <div className="relative xl:top-20 bottom-5 ">
            Click or slide here to <br /> move to the next page.
          </div>
        </Typography>
      </motion.div> */
}
