// page Home => page d'accueil
import Head from 'next/head'// Importation de la balise Head spécifique à next-js
import Layout from '@/components/Layout'
import Image from 'next/image'// Importation de la balise Image spécifique à next-js
import Link from 'next/link'

import AnimatedText from '@/components/AnimatedText' // Importation du composant AnimatedText 
import { LinkArrow } from '@/components/Icons'// Importation du composant LinkArrow
import HireMe from '@/components/HireMe'// Importation du composant HireMe
import TransitionEffect from '@/components/TransitionEffect' // Importation du composant TransitionEffect

/*Imortation de l'image dev-pic.png du dossier profile sous forme d'une variable nommé profilePic
la variable peut avoir n'importe quel nom*/
import profilePic from "../../public/images/profile/dev-pic.png"
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg'




export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      {/* Appel du composant TransitionEffect */}
      <TransitionEffect />

      <main className='flex items-center  text-dark w-full min-h-screen dark:text-light'>

        {/* Appel du composant Layout */}
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
            <div className='flex items-center justify-between w-full lg:flex-col'>

                <div className='w-1/2 md:w-full'>
                    <Image src={profilePic} alt='codeBucks' className='w-full h-auto lg:hidden md:inline-block md:w-full' priority  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div>

                <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>

                    {/* Appel du composant AnimatedText */}
                    <AnimatedText text='Turning Vision Into Reality With Code And Development.' className='!text-6xl !text-left 
                    xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'/>

                    <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                      As a junior full-stack developer, I&apos;m dedicated to turning ideas into innovative web applications.
                      Explore my latest projects, showcasing my skills and passion for the IT field.
                    </p>

                    <div className='flex items-center self-start mt-2 lg:self-center'>

                        {/* l'attribut download présent dans une balise a permet le téléchargement direct d'un fichier en format pdf */}
                        <a href="https://cvdesignr.com/p/631bae0f2456f" target={"_blank"} className='
                          flex items-center bg-dark text-light
                          p-2.5 px-6 rounded-lg text-lg font-semibold
                          hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark 

                          dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light  hover:dark:border-light
                          md:p-2 md:px-4 md:text-base' 

                          download={true} id="mood">Resume 
                        </a>

                        <a href="mailto:adjeteken@gmail.com" target={"_blank"} className='ml-4 text-lg font-medium capitalize 
                        text-dark underline dark:text-light md:text-base'>contact</a>
                    </div>

                </div>

            </div>
        </Layout>
        {/* Appel du comosant HireMe */}
        <HireMe />

        <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
             {/** Chargement de l'image de l'ampoule */}
            <Image  src={lightBulb} alt='codebuck' className='w-full h-auto'/>
        </div>
      </main>
    </>
  )
}