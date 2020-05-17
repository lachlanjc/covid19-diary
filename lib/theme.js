import base from '@hackclub/theme'

const theme = base

theme.fonts.heading = `"Space Grotesk", ${theme.fonts.heading}`
theme.fonts.body = `"Space Mono", ${theme.fonts.heading}`

theme.lineHeights.body = 1.625

theme.styles.h2 = {
  fontFamily: 'heading',
  variant: 'text.headline',
  transform: 'rotate(-4deg)',
  ml: [null, -3, -4],
  mt: [4,5],
  mb: [3,4],
  ':first-child': {
    mt: 3
  },
  '+ p': {
    mt: 0
  },
  '+ p:first-of-type:first-letter': {
    initialLetter: '2',
    WebkitInitialLetter: '2',
    pr: 2,
    color: 'accent',
    fontWeight: 'bold'
  }
}

theme.styles.blockquote = {
  variant: 'cards.sunken',
  py: [3, 3],
  my: [3, 4],
  ml: 0
}

theme.styles.mark = {
  bg: 'yellow',
  fontFamily: 'heading',
  px: 2,
  py: 1,
  color: 'black',
  borderRadius: 'default'
}

theme.styles.iframe = {
  minHeight: 'auto !important'
}

theme.styles.site = {
  border: 0,
  width: '100%',
  minHeight: '75vh !important'
}

export default theme
