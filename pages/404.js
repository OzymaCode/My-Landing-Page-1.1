import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useRouter } from 'next/router'
import Toolbar from '@mui/material/Toolbar'
import { withTheme } from '@emotion/react'
import Paper from '@mui/material/Paper'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { BsChevronCompactRight } from 'react-icons/bs'
import { BsChevronCompactLeft } from 'react-icons/bs'
import Head from 'next/head'
const Error = () => {
  const router = useRouter()
  const styles = {
    links: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '2em',
    },
    textField: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '1em',
      color: 'white',
    },
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 1 }}
      className="centerContent fillContainer background2"
    >
      <Toolbar />
      <Container>
        <Head>
          <title>Toby Martiny | 404</title>
          <meta name="" content="" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Typography
          style={{
            color: '	#232b2b',
            fontWeight: '600',
            display: 'flex',
            justifyContent: 'center',
          }}
          variant="h4"
        >
          This Page Does Not Exist.
        </Typography>
        {/* <Paper elevation={15} style={{ padding: '1em', position: 'relative' }}>
          <form onSubmit={handleSubmit}>{content}</form>
        </Paper> */}
      </Container>
    </motion.div>
  )
}

export default Error
