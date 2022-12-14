import React, { useEffect, useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Head from 'next/head'
import { MdEmail } from 'react-icons/md'
import { GoChevronDown } from 'react-icons/go'
import { MdClose } from 'react-icons/md'
import { AiOutlineGithub } from 'react-icons/ai'
import { BiCopy } from 'react-icons/bi'
import { motion } from 'framer-motion'
import Lottie from 'react-lottie-player'
import lottieJson from '../public/animations/dark-green-check.json'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'

const Contact = () => {
  const styles = {
    textField: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '1em',
      color: 'white',
    },
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .send(
        'gmail',
        'template_nbf040f',
        {
          name: document.getElementById('name').value,
          message: document.getElementById('message').value,
        },
        'BLYpfPOVQllqu9RdH',
      )
      .then(
        (result) => {
          console.log(result.text)
          setContent(email.sent)
        },
        (error) => {
          console.log(error.text)
          setContent(email.error)
        },
      )
  }

  const email = {
    send: () => {
      return (
        <form onSubmit={handleSubmit} className="p-8">
          <div className="h-full w-full">
            <div className="flex justify-between items-center row">
              <Typography
                variant="h6"
                component="div"
                className="grow"
                color="text.secondary"
              >
                Email Me
              </Typography>
              <span
                style={{
                  color: 'black',
                  padding: '8px 8px 8px 16px',
                }}
              >
                <MdClose
                  className="cursor-pointer"
                  color="text.secondary"
                  onClick={() => setToggleEmail(false)}
                />
              </span>
            </div>
            <div className="flex justify-center items-center pt-5">
              <TextField
                required
                id="name"
                label="Your Email"
                fullWidth
                type="name"
                className="outlined-required"
              />
            </div>
            <div className="flex justify-center items-center pt-5">
              <TextField
                required
                label="Message"
                id="message"
                fullWidth
                multiline
                type="message"
                rows={4}
                className="outlined-required"
              />
            </div>
            <div className="flex justify-center items-center pt-5 text-[#232b2b]">
              <Button type="submit" variant="outlined" fullWidth>
                Send
              </Button>
            </div>
          </div>
        </form>
      )
    },
    sent: () => {
      return (
        <Typography
          className="flex items-center font-semibold p-8"
          color="text.secondary"
        >
          Message Sent.
        </Typography>
      )
    },
    error: () => {
      return (
        <Typography
          className="flex items-center font-semibold p-8"
          color="text.secondary"
        >
          Something went wrong. Sorry.
        </Typography>
      )
    },
  }
  const [content, setContent] = useState(email.send)
  const [toggleEmail, setToggleEmail] = useState(false)
  const [animationSpeed, setAnimationSpeed] = useState({ gmail: 0, github: 0 })

  const copyBtn = (info, type) => {
    const handleCopy = (value) => {
      navigator.clipboard.writeText(value)
      setAnimationSpeed((animationSpeed) => {
        ;(animationSpeed[type] = 1), animationSpeed
      })
    }

    return (
      <div
        onClick={() => handleCopy(info)}
        className="relative flex flex-row justify-center items-center"
      >
        <BiCopy className=" text-gray-600 cursor-pointer " size={20} />
        <Lottie
          animationData={lottieJson}
          // speed={animationSpeed}
          play={true}
          autoPlay={false}
          loop={false}
          className="w-10 h-10 absolute top-0 right-0 left-5 bottom-0 m-auto "
        />
        {/* {animationSpeed.gmail} */}
      </div>
    )
  }

  const skillCard = (type, info, icon, iconColor) => {
    return (
      <Paper elevation={5}>
        <Card>
          <CardContent className="flex flex-row">
            <Typography
              className="flex items-center font-semibold pr-10"
              color="text.secondary"
            >
              <span
                style={{
                  color: iconColor,
                  padding: '8px 8px 8px 16px',
                }}
              >
                {icon}
              </span>
              {info}
            </Typography>
            {copyBtn(info, type)}
          </CardContent>
        </Card>
      </Paper>
    )
  }

  const emailContainer = () => {
    return toggleEmail ? (
      <Paper elevation={5}>{content}</Paper>
    ) : (
      <Paper
        elevation={5}
        className="cursor-pointer"
        onClick={() => setToggleEmail(true)}
      >
        <Card>
          <CardContent>
            <Typography
              className="flex items-center font-semibold"
              color="text.secondary"
            >
              <span style={{ padding: '8px 8px 8px 16px' }}>
                <GoChevronDown size={20} />
              </span>
              Send An Email Now
            </Typography>
          </CardContent>
        </Card>
      </Paper>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 1 }}
      className="w-full h-full flex col items-center justify-center"
    >
      <Head>
        <title>Toby Martiny | Contact</title>
        <meta name="" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="children:p-5 h-1/2 max-w-2xl w-full  ">
        <div>
          {skillCard(
            'gmail',
            'ozymacode@gmail.com',
            <MdEmail size={20} />,
            '#00b9ff',
          )}
        </div>
        <div>
          {skillCard(
            'github',
            'github.com/ozymacode',
            <AiOutlineGithub size={20} />,
            '#00b9ff',
          )}
        </div>
        <div>{emailContainer()}</div>
      </div>
    </motion.div>
  )
}

export default Contact
