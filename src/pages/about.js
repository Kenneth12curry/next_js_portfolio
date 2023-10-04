// page about => à propos
import React, { useEffect } from'react'
import Head from 'next/head'//Importation de la balise Head spécifique à next-js
import Image from 'next/image'//Importation de la balise Image spécifique à next-js
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import profilePic from '../../public/images/profile/dev-pic.png'
import { useInView, useMotionValue } from 'framer-motion'
import AnimatedAbout from '@/components/AnimatedAbout'// Importion du composant AnimatedAbout 
import Skills from '@/components/Skills' // Importation du composant Skills
import Experience from '@/components/Experience' // Importation du composant Expérience
import Education from '@/components/Education' // Importation du composant Education
import TransitionEffect from '@/components/TransitionEffect' // Importation du composant TransitionEffect


const about= () =>{
    return (
        <div>
            <Head>
                <title>Kenneth | About Page</title>
                <meta  name='description' content='any description'/>
            </Head>
            {/** Appel du composant TransitionEffect */}
            <TransitionEffect />
            <main className='flex w-full flex-col items-center justify-center mt-2 dark:text-light'>
                {/* Appel du composant Layout */}
                <Layout>
                     {/* Appel du composant AnimatedText */}
                     <AnimatedText text='Passion Fuels Purpose!&apos;' className='mt-0 mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />

                     <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>

                        <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>

                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>

                            <p className='font-small'>
                                Hello, I&apos;m Kenneth Benedict, a young Web developer and Full Stack developer passionate about the 
                                field of computer science and application development. With my recent degree in computer 
                                science, I&apos;m always on the lookout for new and innovative ways to bring my clients visions to 
                                life.
                            </p>

                            <p className='my-4 font-medium'>
                                Whether I&apos;m working on a website, a web application, or any other digital solution, I bring my 
                                commitment to product excellence and user-centered thinking to every project I work on. I&apos;m 
                                looking forward to the opportunity to bring my skills and passion to your next project.
                            </p>

                        </div>

                        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light
                        xl:col-span-4 md:order-1 md:col-span-8'>

                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark dark:bg-light' />
                            <Image  src={profilePic} alt='codeBucks' className='w-full h-auto rounded-2xl' priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                            
                        </div>

                        <div className='col-span-2 flex flex-col items-center justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>

                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-2xl font-bold md:text-xl sm:text-xl xs:text-xl'>
                                    <AnimatedAbout text="Passionate about" />
                                </span>
                                <h2 className='text-x1 font-medium capitalize text-dark/75 dark:text-light/75
                                xl:text-center md:text-lg sm:text-base xs:text-sm'>technology and innovation</h2>
                            </div>

                            <div className='flex flex-col items-end justify-center xl:items-center' >
                                <span className='inline-block text-2xl font-bold md:text-xl sm:text-xl xs:text-xl'>
                                    <AnimatedAbout text="ready to take on"/>
                                </span>
                                <h2 className='text-x1 font-medium capitalize text-dark/75 dark:text-light/75
                                 xl:text-center md:text-lg sm:text-base xs:text-sm'>new challenges</h2>
                            </div>

                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-2xl font-bold md:text-xl sm:text-xl xs:text-xl'>
                                    <AnimatedAbout text="Ambitious and seeking"/>
                                </span>
                                <h2 className='text-x1  font-medium capitalize text-dark/75 dark:text-light/75
                                 xl:text-center md:text-lg sm:text-base xs:text-sm'>knowledge and opportunities</h2>
                            </div>

                        </div>

                    </div>

                    {/* Apel du composant Skills */}
                    <Skills />
                    {/* Apel du composant Experience */}
                    <Experience />
                    {/* Appel du composant Education */}
                    <Education />
                </Layout>
            </main>
        </div>
    )
}

export default about