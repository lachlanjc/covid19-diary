import Head from 'next/head'
import theme from '../lib/theme'

export default ({
  name = '@lachlanjc',
  title = 'COVID-19 Diary',
  description = 'A diary written by @lachlanjc throughout COVID-19.',
  image = 'https://covid19-diary.now.sh/public-jpeg.jpeg',
  url = 'https://covid19-diary.now.sh/'
}) => (
  <Head>
    <title>
      {title} – {name}
    </title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <meta name="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content={name} />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
    <meta property="og:image" content={image} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={image} />
    <meta name="msapplication-TileColor" content={theme.colors.accent} />
    <meta name="theme-color" content={theme.colors.accent} />
  </Head>
)
