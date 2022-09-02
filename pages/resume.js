import React from 'react'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Head from 'next/head'
import { motion } from 'framer-motion'

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 1 }}
      className="h-full w-full flex justify-center items-center pt-16"
    >
      <div className="h-full w-full">
        <object
          data="https://docs.google.com/document/d/1ihZaeT05QygnV5TxmjU0D6k2Lm8LKG-n8D1a9-9N5FM/edit?usp=sharing"
          type="application/pdf"
          width="100%"
          height="100%"
        >
          <Head>
            <title>Toby Martiny | Resume</title>
            <meta name="" content="" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className="h-full w-full flex justify-center items-center font-semibold text-3xl">
            <div>
              Looks like something went wrong - Here&apos;s a link{' '}
              <a
                className="underline"
                href="https://docs.google.com/document/d/1ihZaeT05QygnV5TxmjU0D6k2Lm8LKG-n8D1a9-9N5FM/edit?usp=sharing"
              >
                to the PDF
              </a>{' '}
              instead!
            </div>
          </div>
        </object>
      </div>
    </motion.div>
  )
}

export default Resume
