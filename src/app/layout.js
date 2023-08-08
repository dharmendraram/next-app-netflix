import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'
import { Mulish } from 'next/font/google'
 
const roboto = Mulish({
  weight: ['300','400','500','600','700', '800','900'],
  subsets: ['latin'],
  display: 'swap',
})
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en"className={roboto.className}>
     
      <body >
      <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}