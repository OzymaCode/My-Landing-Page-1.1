import React from 'react'
import Lottie from 'react-lottie-player'
import lottieJson from '../public/animations/green-check.json'
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'


export default function Test() {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <Lottie
        loop
        animationData={lottieJson}
        play
        style={{ width: 150, height: 150 }}
      />
    </div>
  )
}
