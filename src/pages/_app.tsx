import '../styles/styles.css'
import type { AppProps } from 'next/app'
import localFont from '@next/font/local'
import { Inter } from '@next/font/google'

// @font-face {
//   font-family: 'Mona Sans';
//   src:
//     url('../fonts/Mona-Sans.woff2') format('woff2 supports variations'),
//     url('../fonts/Mona-Sans.woff2') format('woff2-variations');
//   font-weight: 200 900;
//   font-stretch: 75% 125%;
// }

// :root {
//   --font-mona-sans: 'Mona Sans'
// }

const myFont = localFont({
  src: '../../fonts/Mona-Sans.woff2',
  variable: '--font-mona-sans',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${myFont.variable} font-sans min-h-screen`}>
      <Component {...pageProps} />
    </main>
  )
  
}
