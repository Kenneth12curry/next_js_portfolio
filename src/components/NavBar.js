import React, { useState } from 'react'
import Link from 'next/link';
// Importation du composant Logo
import Logo from './Logo';
import { useRouter } from 'next/router';

import {InstagramIcon, GithubIcon , LinkedInIcon, SunIcon, MoonIcon } from './Icons';
import { motion } from 'framer-motion';
import useThemeSwitcher from './hooks/useThemeSwitcher';
import useDarkMode from './hooks/useThemeSwitcher';



// Création de notre propre composant personnalisée pour créer un lien 
// avce des variables en paramètres
const CustomLink = ({href, title, className=''}) => {
    // déclaration d'une constante => route
    const router = useRouter();
    
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[1px] inline-block w-0 
                bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? "w-full" : "w-0" } dark:bg-light`}>
            &nbsp;</span>
        </Link>
        
    )
}

const CustomMobileLink = ({href, title, className='', toogle}) => {
    // déclaration d'une constante => route
    const router = useRouter();
    
    // déclaration d'une méthode => fonction 
    const handleClick = () => {
        toogle();
        router.push(href);
    }

    return (
        <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
            {title}
            <span className={`h-[1px] inline-block w-0 
                bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? "w-full" : "w-0" } dark:bg-dark`}>
            &nbsp;</span>
        </button>
        
    )
}


const NavBar= () =>{

    const [mode, setMode] = useDarkMode();
    const [isOpen,setOpen] = useState(false);

    //Déclaration d'une fonction
    const handleClick = () => {
        setOpen(!isOpen);
    }

    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8'>

            <button className='flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1': '-translate-y-0.5'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0': 'opacity-100'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${isOpen ? '-rotate-45 -translate-y-1': 'translate-y-0.5'}`}></span>
            </button>


            <div className='w-full flex justify-between items-center lg:hidden'>
                <nav>
                    <CustomLink href='/' title='Home' className='mr-4' />
                    <CustomLink href='/about' title='About' className='mx-4' />
                    <CustomLink href='/projects' title='Projects' className='mx-4' />
                    <CustomLink href='/articles' title='Articles' className='ml-4'  />
                </nav>

                <nav className='flex items-center justify-center flex-wrap'>
                    {/* Appel des 3 composants GithubIcon, LinkedInIcon, InstagramIcon */}
                    <motion.a href='https://github.com/Kenneth12curry' target={"_blank"} className='w-6 mr-3' whileHover={{y:-2}} whileTap={{scale:0.9}}><GithubIcon /></motion.a>
                    <motion.a href="https://www.linkedin.com/in/kenneth-adjete/" target={"_blank"} className='w-6' whileHover={{y:-2}} whileTap={{scale:0.9}}><LinkedInIcon /></motion.a>
                    <motion.a href='https://twitter.com' target={"_blank"} className='w-6 ml-2' whileHover={{y:-2}} whileTap={{scale:0.9}}><InstagramIcon /></motion.a>

                    <button onClick={() => setMode(mode === "light" ? "dark" : "light")} 
                    className={`ml-2 flex items-center justify-center rounded-full p-1 ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
                    {
                        mode === "dark" ?
                        <SunIcon  className={"fill-dark"}/>
                        : <MoonIcon className={"fill-dark"} />
                    }  

                    </button>

                </nav>

            </div>

            {
                isOpen ?
                    <motion.div initial={{scale:0, opacity:0, x: "-50%", y: "-50%"}} animate={{scale:1, opacity:1}} className='min-w-[70%] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        bg-dark/90 dark:bg-light/75 py-32'>
                            <nav className='flex items-center flex-col justify-center'>
                                <CustomMobileLink href='/' title='Home' className='' toogle={handleClick}/>
                                <CustomMobileLink href='/about' title='About' className='' toogle={handleClick}/>
                                <CustomMobileLink href='/projects' title='Projects' className='' toogle={handleClick}/>
                                <CustomMobileLink href='/articles' title='Articles' className=''  toogle={handleClick}/>
                            </nav>

                            <nav className='flex items-center justify-center flex-wrap mt-2'>
                                {/* Appel des 3 composants GithubIcon, LinkedInIcon, InstagramIcon */}
                                <motion.a  href='https://github.com/Kenneth12curry'  className='w-6 mr-3 bg-light rounded-full dark:bg-dark sm:mx-1' whileHover={{y:-2}} whileTap={{scale:0.9}}><GithubIcon /></motion.a>
                                <motion.a  href='www.linkedin.com/in/kenneth-adjete'  className='w-6 sm:mx-1' whileHover={{y:-2}} whileTap={{scale:0.9}}><LinkedInIcon /></motion.a>
                                <motion.a  href='https://twitter.com'  className='w-6 ml-2 sm:mx-1' whileHover={{y:-2}} whileTap={{scale:0.9}}><InstagramIcon /></motion.a>

                                <button onClick={() => setMode(mode === "light" ? "dark" : "light")} 
                                className={`ml-2 flex items-center justify-center rounded-full p-1 ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
                                {
                                    mode === "dark" ?
                                    <SunIcon  className={"fill-dark"}/>
                                    : <MoonIcon className={"fill-dark"} />
                                }  

                                </button>

                            </nav>

                    </motion.div>
                : null
            }


            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                {/* Appel du composant Logo */}
                <Logo />
            </div>

        </header>
    )
}

export default NavBar