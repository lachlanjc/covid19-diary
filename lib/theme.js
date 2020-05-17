import base from '@hackclub/theme'

const theme = base

theme.fonts.heading = `"Space Grotesk", ${theme.fonts.heading}`
theme.fonts.body = `"Space Mono", ${theme.fonts.heading}`

theme.lineHeights.body = 1.625

theme.styles.h2 = {
  fontFamily: 'heading',
  variant: 'headline',
  '+ p:first-of-type:first-letter': {
    initialLetter: '2',
    WebkitInitialLetter: '2',
    pr: 2,
    color: 'accent',
    fontWeight: 'bold'
  }
}

theme.styles.iframe = {
  border: 0,
  width: '100%',
  minHeight: '75vh'
}

export default theme
