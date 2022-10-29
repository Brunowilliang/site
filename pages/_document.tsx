import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {  
  render() {
    return(
      <Html>
        <Head lang="pt-BR">
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
          <link rel="shortcut icon" href="/favicon.png" type="image/png"/>
          <noscript>
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument