import * as React from 'react'
import Typography from '@mui/material/Typography'
import HoverVideoPlayer from 'react-hover-video-player'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

const NewProjectCard = ({ project }) => {
  const router = useRouter()

  return (
    <HoverVideoPlayer
      videoSrc={`../..${project.tab}-video.mp4`}
      className="w-full"
      pausedOverlay={
        <motion.img
          src={`../..${project.tab}-image.jpg`}
          className="w-full"
          alt="Video not found."
        />
      }
      loadingOverlay={
        <div className="loading-overlay">
          <div className="loading-spinner" />
        </div>
      }
    />
  )
}

export default NewProjectCard
