import NextHead from 'next/head'
import { string } from 'prop-types'

const defaultDescription = ''
const defaultOGURL = ''
const defaultOGImage = ''

const Head = (props) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || ''}</title>
    <meta name="description" content={props.description || defaultDescription} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
    <link rel="apple-touch-icon" href="/static/touch-icon.png" />
    <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
    <link rel="icon" href="/static/favicon.ico" />
    <link rel = "stylesheet" href = "../static/css/style.css" />
    <link rel = "stylesheet" href = "../static/css/registration.css" />
    <link rel = "stylesheet" href = "../static/css/productsListing.css" />
    <link rel = "stylesheet" href = "../static/css/modal.css" />
    <link rel = "stylesheet" href = "../static/css/cart.css" />
    <link rel = "stylesheet" href = "../static/css/checkout.css" />
    <link rel = "stylesheet" href = "../static/css/fullview.css" />
    <link rel = "stylesheet"
    href = "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
    integrity = "sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
    crossOrigin = "anonymous"/>

    <link rel = "stylesheet"
    href = "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css"
    integrity = "sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp"
    crossOrigin = "anonymous"/>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossOrigin="anonymous"/>
    <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-glyphicons.css" rel="stylesheet"/>
    <link rel="stylesheet" href="../static/extResources/css/owl.carousel.min.css"/>
    <link rel="stylesheet" href="../static/extResources/css/owl.theme.default.css"/>
    <link rel="stylesheet" type="text/css" href="../static/extResources/css/slick.css"/>
    <link rel="stylesheet" type="text/css" href="../static/extResources/css/float.css"/>

    <link rel="stylesheet" type="text/css" href="../static/extResources/css/slick-theme.css"/>
    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:title" content={props.title || ''} />
    <meta property="og:description" content={props.description || defaultDescription} />
    <meta name="twitter:site" content={props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
     <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
     <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
     <script src="../static/script/script.js"></script>
     <script src="../static/extResources/js/owl.carousel.min.js"></script>
     <script type="text/javascript" src="../static/extResources/js/slick.min.js"></script>
     <script type="text/javascript" src="../static/extResources/js/float-panel.js"></script>
  </NextHead>
)

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
}

export default Head
