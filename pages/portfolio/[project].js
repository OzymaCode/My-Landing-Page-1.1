import Head from 'next/head'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { BiCheckboxSquare } from 'react-icons/bi'
import HoverVideoPlayer from 'react-hover-video-player'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import React from 'react'
import Toolbar from '@mui/material/Toolbar'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import { wrapper } from '../../redux/store'

export const getServerSideProps = (context) => {
  const projects = [
    {
      title: 'ChatApp',
      description:
        'A messaging app I made for my friends. Lets users create or login to an account and send messages to each other with the message log. The data is stored through my Mongo Database and accessed via the server hosted on Heroku.',
      tags: ['React', 'MongoDB'],
      tab: '/chat-app',
      video: 'https://youtu.be/5sIAVRcFUiU',
      link: 'https://ozyma-chatapp.netlify.app/',
      git: 'https://github.com/stars/OzymaCode/lists/chatapp',
    },
    {
      title: 'Ethereum Exchange',
      description:
        'An app that lets users send each other ethereum. The program uses an api to connect to a solidity contract I deployed to the Ethereum Block-Chain. It then sends the ether through the contract to the address that the user entered. *Metamask required.',
      tags: ['React', 'Solidity'],
      tab: '/ethereum-exchange',
      video: 'https://youtu.be/tyHF-DGLIvw',
      link: 'https://ozyma-ethereum-exchange.netlify.app',
      git: 'https://github.com/stars/OzymaCode/lists/ethex',
    },
    {
      title: 'Alaskan Fishery',
      description:
        'This is an e-commerce website for selling fish I made. It uses Next Js, Redux, Framer-Motion, Tailwindcss, Mui and is connected to PayPal for payments. The front-end hosted on Netlify, and the back-end on Heroku. ',
      tags: ['NextJS', 'Redux'],
      tab: '/alaskan-fishery',
      video: 'https://youtu.be/EDcYA48qwug',
      link: 'https://alaskan-fishery.netlify.app/',
      git: 'https://github.com/stars/OzymaCode/lists/alaskan-fishery',
    },
  ]

  // const content = useSelector((state) => state.projects)

  console.log('context.query.land, ', context.query.land)
  const thisProject = projects.filter((project) => {
    return project.tab == '/' + context.query.project
  })[0]
  console.log('thisProject, ', thisProject)

  return {
    props: thisProject,
  }
}

const ProjectDisplay = (project) => {
  const router = useRouter()
  const [check, setCheck] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setCheck(true)
    }, [350])
  }, [])
  const handleClick = async () => {
    await setCheck(false)
    setTimeout(() => {
      router.push('/portfolio')
    }, [350])
  }

  const skillCard = (skills, iconColor) => {
    return (
      <div className="flex row justify-between px-10 pt-5">
        <Grid container columnSpacing={10}>
          {skills.map((skill, i) => (
            <Grid item xs={6} md={4} key={i}>
              <Typography
                className="flex items-center font-semibold"
                color="text.secondary"
              >
                <span
                  style={{
                    color: iconColor,
                    padding: '8px 8px 8px 16px',
                  }}
                >
                  <BiCheckboxSquare size={12} />
                </span>
                {skill}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </div>
    )
  }

  return (
    <div className="h-full w-full lg:grid lg:grid-cols-2 lg:grid-rows-1">
      <Head>
        <title>Toby Martiny | {project.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="lg:h-full col-start-2 row-start-1 lg:py-0 pt-16 pb-5 w-full flex lg:justify-center lg:items-center items-end">
        <div className="lg:col-start-2 col-start-1 flex justify-center items-center lg:pt-0">
          <Paper elevation={1} className="lg:mx-5 mx-0">
            <div className="p-10">
              <div className="flex row ">
                <h1 className="w-full font-bold text-xl">{project.title}</h1>
                <Button onClick={() => handleClick()}>return</Button>
              </div>
              <hr />
              <p className="font-medium pt-5">{project.description}</p>
              {skillCard(project.tags, '#00b9ff')}
            </div>
            <hr />
            <div className="flex justify-around p-5">
              <Button
                onClick={() => {
                  window.open(`${project.link}`)
                }}
              >
                Website
              </Button>
              <Button
                onClick={() => {
                  window.open(`${project.git}`)
                }}
              >
                Github
              </Button>
            </div>
          </Paper>
        </div>
      </div>
      {/* <div className="lg:h-full w-full row-start-1 flex lg:justify-center lg:items-center items-start"> */}
      <div className="relative col flex justify-center items-center">
        {!check && (
          <motion.img
            className="absolute left-0 w-full"
            src={`../..${project.tab}-image.jpg`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            end={{ opacity: 0 }}
            layout
            layoutId={project.tab}
          />
        )}
        {check && (
          <motion.video
            className="relative left-0 w-full"
            src={`../..${project.tab}-video.mp4`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            end={{ opacity: 0 }}
            loop
            autoPlay
          />
        )}
      </div>
    </div>
    // </div>
  )
}

export default ProjectDisplay
