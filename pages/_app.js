import * as React from 'react'
import NextApp from 'next/app'

import '../public/fonts.css'
import theme from '../lib/theme'
import { ThemeProvider } from 'theme-ui'
import Meta from '../components/meta'
import ColorSwitcher from '../components/color-switcher'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Meta />
        <ColorSwitcher />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
