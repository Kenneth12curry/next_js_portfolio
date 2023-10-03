import NavBar from '@/components/NavBar'// Importation du composant NavBar
import '@/styles/globals.css'
import Footer from '@/components/Footer' // Importation du composant Footer
/* importation de la police montserrat de next/font/google */
import { Montserrat } from 'next/font/google'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
 
// If loading a variable font, you don't need to specify the font weight
const montserrat = Montserrat({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-mont"
})

export default function App({ Component, pageProps }) {

  const router = useRouter();

  return (
    <>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <main className={`${montserrat.className} font-mont, bg-light dark:bg-dark w-full min-h-screen`}>
               {/* Appel du composant NavBar */}
              <NavBar />
              {/* Component représente chaque page du projet => index.js etc */}
              <AnimatePresence mode='wait'>
                  <Component key={router.asPath} {...pageProps} />
              </AnimatePresence>
              {/* Appel du composant Footer */}
              <Footer />
          </main>
    </>
   
  )  
}

/* NB: en incluant les composants NavBar et Footer dans le fichier _app.js 
ils seront donc visibles dans chaque page du site web 
*/