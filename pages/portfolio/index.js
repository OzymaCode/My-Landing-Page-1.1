import React from 'react'
import Card from '../components/NewProjectCard'
import Typography from '@mui/material/Typography'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

const Work = () => {
  // const styles = {
  //   card: {
  //     display: 'flex',
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //     paddingTop: '4em',
  //   },
  // }

  const projects = useSelector((state) => state.projects)

  const router = useRouter()
  const [check, setCheck] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setCheck(true)
    }, [350])
  }, [])
  const handleClick = async (project) => {
    await setCheck(false)
    router.push(`/portfolio${project.tab}`)
  }

  return (
    <div className="pt-24">
      <Head>
        <title>Toby Martiny | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="lg:grid grid-cols-3  ">
        <div className="flex justify-center underline decoration-[#556cd6] underline-offset-4 items-center col-start-2 ">
          <Typography
            style={{ color: '	#232b2b', fontWeight: '600' }}
            className="flex justify-center "
            variant="h4"
          >
            My Projects
          </Typography>
        </div>
        <Typography
          style={{ color: '	#232b2b', fontWeight: '500' }}
          variant="h6"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="col-start-3 flex justify-end"
          >
            (click to find out more...)
          </motion.div>
        </Typography>
      </div>
      <div className="flex overflow-hidden justify-around flex-wrap children:lg:m-10 children:m-10">
        {projects.map((project, i) => (
          <motion.div
            className="cursor-pointer lg:inline justify-center items-center"
            whileHover={{ scale: 1.2 }}
            key={i}
          >
            <Typography
              className="font-semibold lg:opacity-100 bg-opacity-0"
              style={{}}
              gutterBottom
              variant="h5"
              component="div"
            >
              {project.title}
            </Typography>

            {
              <div
                className="lg:w-80 w-full"
                onClick={() => handleClick(project)}
              >
                {check ? (
                  <Card project={project} />
                ) : (
                  <motion.img
                    src={`../..${project.tab}-image.jpg`}
                    layout
                    exit={{ opaicty: 0 }}
                    className="lg:w-80"
                    layoutId={project.tab}
                  />
                )}
              </div>
            }
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Work

{
  /* 
  <div className="overflow-auto pt-24">
<Head>
  <title>Toby Martiny | Portfolio</title>
  <link rel="icon" href="/favicon.ico" />
</Head>
<div className="lg:grid grid-cols-3  ">
  <div className="flex justify-center underline decoration-[#556cd6] underline-offset-4 items-center col-start-2 ">
    <Typography
      style={{ color: '	#232b2b', fontWeight: '600' }}
      className="flex justify-center "
      variant="h4"
    >
      My Projects
    </Typography>
  </div>
  <Typography
    style={{ color: '	#232b2b', fontWeight: '500' }}
    variant="h6"
  >
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
      className="col-start-3 flex justify-end"
    >
      (click to find out more...)
    </motion.div>
  </Typography>
</div> 
<div className="flex overflow-hidden justify-around flex-wrap children:lg:m-10 children:m-10">
  {projects.map((project, i) => (
    <motion.div
      className="cursor-pointer lg:inline justify-center items-center"
      whileHover={{ scale: 1.2 }}
      key={`container-${i}`}
    >
      <Typography
        className="font-semibold lg:opacity-100 bg-opacity-0"
        style={{}}
        gutterBottom
        variant="h5"
        component="div"
        key={`typography-${i}`}
      >
        {project.title}
      </Typography>





      {
        <div
          key={`subcontainer-${i}`}
          className="lg:w-80 w-full"
          onClick={() => handleClick(project)}
        >
          {check ? (
            <Card project={project} key={`card-${i}`} />
          ) : (
            <motion.img
              src={`../..${project.tab}-image.jpg`}
              key={`image-${i}`}
              layout
              exit={{ opaicty: 0 }}
              className="lg:w-80"
              layoutId={project.tab}
            />
          )}
        </div>
      }




    </motion.div>
  ))}
</div>
</div>
*/
}

{
  /* <div className="overflow-auto">
      {projects.map((project, i) => (
        <img
          key={`image-${i}`}
          src={`../../chat-app-image.jpg`}
          className="w-80"
        />
      ))}
    </div> */
}
