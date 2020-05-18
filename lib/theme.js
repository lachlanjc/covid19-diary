import base from '@hackclub/theme'
import { merge } from 'theme-ui'

const theme = base

const colors = {
  fuschia: '#ff2467',
  pink: '#ff707a',
  lilac: '#849de1',
  yellow: '#ffaf26',
  light: '#ffeaeb',
  indigo: '#3b47a8',
  purple: '#8057c5',
}

theme.colors = merge(base.colors, {
  ...colors,
  primary: colors.indigo,
  accent: colors.fuschia,
  modes: {
    dark: {
      primary: colors.lilac,
      accent: colors.yellow
    }
 }
})

theme.fonts.heading = `"Space Grotesk", ${base.fonts.heading}`
theme.fonts.body = `"Space Mono", ${base.fonts.heading}`

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

theme.cards.sunken.fontFamily = 'heading'

theme.styles.blockquote = {
  variant: 'cards.sunken',
  py: [3, 3],
  my: [3, 4],
  ml: 0,
  img: {
    borderRadius: 'default',
    mb: 2
  },
  strong: {
    color: 'purple'
  }
}

theme.styles.strong = {
  color: 'accent',
  fontFamily: 'heading',
  letterSpacing: 'headline'
}

theme.styles.mark = {
  bg: 'yellow',
  fontFamily: 'heading',
  px: 2,
  py: 1,
  color: 'black',
  borderRadius: 'default'
}

theme.styles.hr = merge(base.styles.hr, {
  borderColor: 'indigo',
  borderWidth: 4,
  borderRadius: 2,
  transform: 'rotate(-3deg)',
  my: [4, 5]
})

theme.styles.iframe = {
  minHeight: 'auto !important'
}

theme.styles.site = {
  border: 0,
  width: '100%',
  minHeight: '75vh !important'
}

export default theme
