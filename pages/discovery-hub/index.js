import Head from 'next/head'
import Divider from '../../components/Layout/Divider'
import VideoPlayer from '../../components/VideoPlayer'
import HeroImage from '../../components/Layout/HeroImage'
import { Box, Typography, Grid, Button } from '@mui/material'
import theme, { bgGray, transDarkOrange, transDtpBlue } from '../../src/theme'
import ContentBlock from '../../components/Layout/ContentBlock'
import Thumb from '../../components/Layout/Thumb'

import landingHero from '../../public/assets/landingPage/fw.webp'

const brain = '/assets/landingPage/brain.webp'
const shots = '/assets/landingPage/shots.webp'
const whiskey = '/assets/landingPage/whiskey.jpg'
const BT = '/assets/landingPage/B-T.jpg'
const zero = '/assets/landingPage/zero.png'

const businessGuy = '/assets/landingPage/businessGuy.webp'
const floyd = '/assets/landingPage/floyd.webp'
const dash = '/assets/landingPage/dash.webp'
const data = '/assets/landingPage/dataanalysis.webp'

const description = `A landing page containing learning resources and educational modules detailing the dangers of driving under the influence and describe the efforts the DADSS program is taking to prevent them.`

export default function DiscoveryHub() {
  return (
    <>
      <Head>
        <title>DADSS | Discovery Hub</title>
        <meta name='description' content={description} />
      </Head>

      <main>
        <HeroImage image={landingHero} />

        <ContentBlock header='Discovery Hub' divider>
          <Typography paragraph>
            Welcome to the Discovery Hub. Here, you can learn about the dangers
            of alcohol–impaired driving and the innovative technologies
            currently in development to make our roads and highways safer.
          </Typography>

          <Box pt={2}>
            <Grid
              container
              justifyContent='space-between'
              align='stretch'
              spacing={2}>
              <Grid item md={6}>
                <ContentBlock
                  fullHeight
                  shadow
                  background={bgGray}
                  fontColor={theme.palette.text.secondary}>
                  <Typography variant='h4' align='center' gutterBottom>
                    Driver Alcohol Detection System For Safety (DADSS) Program
                  </Typography>
                  <Divider size='small' />
                  <Box>
                    <Typography paragraph>
                      {`DADSS is a first-of-its-kind, vehicle–integrated,
                        alcohol detection technology. By passively detecting a
                        driver's blood alcohol concentration (BAC), it prevents
                        a car from moving while the driver’s BAC is at or above
                        the legal limit of 0.08%.`}
                    </Typography>
                    <Typography paragraph>
                      {`This technology must meet rigorous performance standards
                        before it can be installed in cars or trucks. When
                        ready, it will be offered to vehicle owners as a
                        voluntary safety option, much like other driver–assist
                        systems (i.e., automatic emergency braking or lane
                        departure warning systems).`}
                    </Typography>
                  </Box>
                </ContentBlock>
              </Grid>

              <Grid item md={6}>
                <ContentBlock
                  fullHeight
                  shadow
                  background={bgGray}
                  fontColor={theme.palette.text.secondary}>
                  <Typography variant='h4' align='center' gutterBottom>
                    Key Partners In The DADSS Program
                  </Typography>
                  <Divider size='small' />
                  <Box>
                    <Typography paragraph>
                      DADSS Program partners include:
                    </Typography>
                    <Box>
                      <ul>
                        <li>
                          {`Automotive Coalition for Traffic Safety (ACTS), a
                            Virginia nonprofit funded by the world's leading
                            automakers`}
                        </li>
                        <li>
                          U.S. Department of Transportation’s National Highway
                          Traffic Safety Administration (NHTSA)
                        </li>
                        <li>
                          {`Virginia Department of Motor Vehicle's Highway
                            Safety Office`}
                        </li>
                      </ul>
                    </Box>
                    <Typography paragraph>
                      The DADSS Program is one of the most important government
                      and private sector partnerships in recent years.-private
                      partnerships like DADSS have led to innovations that
                      enhance our everyday lives, such as internet, GPS, and the
                      microchip.
                    </Typography>
                  </Box>
                </ContentBlock>
              </Grid>

              <Grid item xs={12}>
                <ContentBlock
                  fullHeight
                  shadow
                  background={bgGray}
                  fontColor={theme.palette.text.secondary}>
                  <Typography variant='h4' align='center' gutterBottom>
                    DADSS Driven To Protect Discovery Hub
                  </Typography>
                  <Divider size='small' />
                  <Box>
                    <Typography paragraph>
                      The learning modules below allow you to:
                    </Typography>
                    <Box mb={2}>
                      <ul>
                        <li>
                          Explore how alcohol is absorbed, processed and
                          eliminated by the human body
                        </li>
                        <li>
                          Learn how alcohol impairs your ability to safely
                          operate a motor vehicle
                        </li>
                        <li>
                          Obtain actionable information so you can avoid the
                          dangers associated with drunk driving
                        </li>
                        <li>
                          Find out how the novel DADSS technologies currently
                          under development and testing will protect you and
                          other motorists on the road in the future
                        </li>
                      </ul>
                    </Box>
                    <Typography paragraph>
                      There are also Science, Technology, Engineering, and Math
                      (STEM) modules available so students can learn about the
                      science and engineering behind the DADSS technologies.
                    </Typography>
                  </Box>
                </ContentBlock>
              </Grid>
            </Grid>
          </Box>
        </ContentBlock>

        <section>
          <ContentBlock
            header='General Education Modules'
            linkColor='#fff'
            divider>
            {eModules.length > 0 && (
              <Grid container spacing={2} justifyContent='center'>
                {eModules.map((module, index) => {
                  return (
                    <Grid item xs={12} md={6} key={index}>
                      <Thumb
                        img={module.image}
                        url={module.url}
                        label={module.title}
                        background={transDtpBlue}
                        filterDark
                        external
                      />
                      <Box mt={2}>
                        <Button
                          fullWidth
                          color='secondary'
                          variant='contained'
                          href={module.url}
                          target='_blank'
                          rel='noreferrer'>
                          Start Lesson
                        </Button>
                      </Box>
                    </Grid>
                  )
                })}
              </Grid>
            )}

            {stemModules.length > 0 && (
              <>
                <Typography
                  variant='h3'
                  color='primary'
                  align='center'
                  gutterBottom
                  style={{ marginTop: theme.spacing(8) }}>
                  STEM Modules
                </Typography>
                <Divider />
                <Grid container spacing={2} justifyContent='center'>
                  {stemModules.map((module, index) => {
                    return (
                      <Grid item xs={12} md={6} key={index}>
                        <Thumb
                          img={module.image}
                          url={module.url}
                          label={module.title}
                          background={transDarkOrange}
                          filterDark
                          external
                        />

                        <Box mt={2}>
                          <Button
                            fullWidth
                            color='secondary'
                            variant='contained'
                            href={module.url}
                            target='_blank'
                            rel='noreferrer'>
                            Start Lesson
                          </Button>
                        </Box>
                      </Grid>
                    )
                  })}
                </Grid>
              </>
            )}
            {videos.length > 0 && (
              <>
                <Typography
                  variant='h3'
                  color='primary'
                  gutterBottom
                  align='center'
                  style={{ marginTop: theme.spacing(8) }}>
                  Educational Videos
                </Typography>
                <Divider />
                <VideoPlayer videos={videos} />
              </>
            )}
          </ContentBlock>
        </section>
      </main>
    </>
  )
}

const eModules = [
  {
    title: `The Brain, Lungs, and BAC (What's their role in Driving)`,
    image: brain,
    url: `https://dadss-d2p.s3.us-east-2.amazonaws.com/educational-modules/The+Brains+Lungs+And+BAC+Whats+Their+Role+In+Driving/index.html`,
  },
  {
    title: `Alcohol Impaired Driving Informational`,
    image: shots,
    url: `https://dadss-d2p.s3.us-east-2.amazonaws.com/educational-modules/Alcohol+Impaired+Driving+Informational/index.html#/`,
  },
  {
    title: `Alcohol Fact or Fiction`,
    image: whiskey,
    url: `https://kahoot.it/challenge/c581e616-fc89-49a8-aed0-7b79cc6ca52d_1614273467634`,
  },
  {
    title: `Breath and Touch Alcohol Detection Systems`,
    image: BT,
    url: `https://dadss-d2p.s3.us-east-2.amazonaws.com/educational-modules/Breath+And+Touch+Alcohol+Detection+Systems+Raw/index.html`,
  },
  {
    title: `Underage Alcohol Use and Zero Tolerance Law Informational`,
    image: zero,
    url: `https://dadss-d2p.s3.us-east-2.amazonaws.com/educational-modules/Underage+Alcohol+Use+and+Zero+Tolerance+Law+Informational/index.html`,
  },
]
const stemModules = [
  {
    title: `STEM Part 1: Spectroscopy `,
    image: floyd,
    url: `https://dadss-d2p.s3.us-east-2.amazonaws.com/educational-modules/STEM+Part+1+Spectroscopy+Raw/index.html`,
  },
  {
    title: `STEM Part 2: The DADSS Benchtop Unit`,
    image: dash,
    url: `https://dadss-d2p.s3.us-east-2.amazonaws.com/educational-modules/STEM+Part+2+The+DADSS+Benchtop+Unit+Raw/index.html`,
  },
  {
    title: `STEM Part 3a: Data Collection and Analysis (Basic)`,
    image: businessGuy,
    url: `https://dadss-d2p.s3.us-east-2.amazonaws.com/educational-modules/STEM+Part+3a+Data+Collection+And+Analysis+Basic+Raw/index.html`,
  },
  {
    title: `STEM Part 3b: Data Collection and Analysis (Advanced)`,
    image: data,
    url: `https://dadss-d2p.s3.us-east-2.amazonaws.com/educational-modules/STEM+Part+3b+Data+Collection+And+Analysis+Advanced/index.html`,
  },
]
const videos = [
  {
    title: `Breakthrough Invention Aims to Eliminate Drunk Driving`,
    id: `DaBmFClU9r8`,
  },
  {
    title: `The DADSS and Driven To Protect Demonstration Vehicle`,
    id: `D4AuGbnitZk`,
  },
  {
    title: `Overview of the DADSS Technology`,
    id: `SQK5H6h_JHc`,
  },
  {
    title: `First Anniversary of our Partnership with James River Transportation`,
    id: `LVud69MWn3Q`,
  },
  {
    title: `IIHS/HLDI Reception Featuring the DADSS and Driven To Protect Vehicle`,
    id: `ngkDsZ3sm-c`,
  },
  {
    title: `Time-lapse of a DADSS Vehicle Integration`,
    id: `JuGxxPAhbhI`,
  },
  {
    title: `A Day in the Life of a Breath Sensor: The Testing Process`,
    id: `P8fLx0OF57U`,
  },
]
