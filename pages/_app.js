import { useEffect } from 'react'
import Layout from '../components/Layout'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/styles'
import { CssBaseline, responsiveFontSizes } from '@material-ui/core'
import theme from '../src/theme'
import PropTypes from 'prop-types'

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Driver Alcohol Detection System for Safety (DADSS)</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap'
          rel='stylesheet'
        />

        <meta
          property='og:title'
          content='Driver Alcohol Detection System for Safety (DADSS)'
        />
        <meta
          property='og:image'
          content='https://www.dadss.org/assets/logos/graphic-logo-car.png'
        />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <ThemeProvider theme={responsiveFontSizes(theme)}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}
