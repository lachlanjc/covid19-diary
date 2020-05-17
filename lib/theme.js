import base from '@hackclub/theme'

const theme = base

theme.fonts.heading = `"Space Grotesk", ${theme.fonts.heading}`
theme.fonts.body = `"Space Mono", ${theme.fonts.heading}`

theme.lineHeights.body = 1.625

theme.styles.h2 = {
  fontFamily: 'heading',
  variant: 'headline',
  mt: [4,5],
  mb: 2,
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

theme.styles.site = {
  border: 0,
  width: '100%',
  minHeight: '75vh'
}

export default theme
