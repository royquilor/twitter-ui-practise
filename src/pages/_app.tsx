import '../styles/styles.css'
import type { AppProps } from 'next/app'
import localFont from '@next/font/local'
import { Inter } from '@next/font/google'

// const inter = Inter({
//   subsets: ['latin'],
//   // weight: ['400', '700'],
// })

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
