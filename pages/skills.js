import React from 'react'
import Head from 'next/head'
import Typography from '@mui/material/Typography'
import { BiCheckboxSquare } from 'react-icons/bi'
import Paper from '@mui/material/Paper'
import Card from '@mui/material/Card'
import { motion } from 'framer-motion'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'

const Skills = () => {
  const skillCard = (title, skills, iconColor, delay) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: delay }}
        style={{ padding: '10px' }}
      >
        <Paper elevation={5}>
          <Card>
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                style={{
                  fontWeight: '600',
                }}
              >
                {title}
              </Typography>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: '5px',
                }}
              >
                <Grid container columnSpacing={10}>
                  {skills.map((skill, i) => (
                    <Grid item xs={6} md={4} key={i}>
                      <Typography
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          fontWeight: '600',
                        }}
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
            </CardContent>
          </Card>
        </Paper>
      </motion.div>
    )
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      <Head>
        <title>Toby Martiny | Skills</title>
        <meta name="" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        {skillCard(
          'Languages',
          ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'LaTex', 'Solidity'],
          '#00b9ff',
          0,
        )}
        {skillCard('Databases', ['MongoDb', 'Sanity.io'], '#ffd728', 0.5)}
        {skillCard('Frameworks', ['ReactJS', 'NextJS', 'Redux'], '#16d97e', 1)}
        {skillCard(
          'Other',
          [
            'Git',
            'REST',
            'Express',
            'Netlify',
            'Heroku',
            'Tailwind',
            'SCSS',
            'Stripe',
            'NextAuth.js',
            'BlockChain',
            'Vercel',
          ],
          '#ff00b2',
          1.5,
        )}
      </div>
    </div>
  )
}

export default Skills
