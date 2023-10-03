// pages articles

import React, { useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import TransitionEffect from '@/components/TransitionEffect'

import featuredImage from "../../public/images/articles/form validation in reactjs using custom react hook.png"
import featuredImage1 from "../../public/images/articles/reactjs4.png"

import article1 from "../../public/images/articles/reactjs.png"
import article2 from  "../../public/images/articles/reactjs2.png"
import article3 from  "../../public/images/articles/reactjs3.png"

import { motion, useMotionValue } from 'framer-motion'


const FramerImage = motion(Image);


const MovingImg = ({title, img, link}) => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    /** Créations de fonctions  */
    
    function handleMouse(event){
        imgRef.current.style.display="inline-block";
        x.set(event.pagex);
        y.set(-10);
    }

    function handleMouseLeave(event){
        imgRef.current.style.display="none";
        x.set(0);
        y.set(0);
    }

    return (
        <Link href={link} target='_blank' 
            onMouseMove={handleMouse} 
            onMouseLeave={handleMouseLeave}
        >
            <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
            <FramerImage style={{x:x, y:y }} 
            initial={{opacity:0}} 
            whileInView={{opacity:1, transition : {duration: 0.2}}} 
            ref={imgRef} src={img} alt={title} className='z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden' />
        </Link>
    ) 

}


//Création d'un composant secondaire nommé Article avec des variables en paramètres
const Article = ({img, title, date, link}) => {
    return(
        <motion.li initial={{y:200}} whileInView={{y:0, transition: {duration:0.5, ease:"easeInOut"} }} viewport={{once:true}} className='relative w-full p-4 py-6 my-4 rounded-xl 
        flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light
        sm:flex-col'>
            <MovingImg  title={title} img={img} link={link}/>
            <span className='text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
        </motion.li>
    )
}

//Création d'un composant secondaire nommé FeaturedArticle avec des variables en paramètres
const FeaturedArticle = ({img, title, time, summary, link}) => {
    return (
       <ul>
            <li className='relative col-sapn-1 w-full bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light'>

                {/* balise div orpheline  */}
                <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark  dark:bg-light' />

                <Link href={link} target='_blank' className='w-full inline-block cusrsor-pointer overflow-hidden rounded-lg' >
                    <FramerImage  src={img} className='w-full h-auto' whileHover={{ scale:1.05 }}  transition={{ duration:0.2 }} piority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
                </Link> 
                <Link href={link}>
                    <h2 className='capitalize text-2xl font-bold my-2 mt-4 ml-2 hover:underline xs:text-lg'>{title}</h2>
                </Link>
                <p className='text-sm mb-2 ml-2'>{summary}</p>
                <span className='text-primary font-semibold ml-2 mb-5 dark:text-primaryDark'>{time}</span>
            </li>
        </ul>
        
    )
}


const articles= () =>{
    return (
      <>
        <Head>
            <title>Kenneth | Articles Page</title>
            <meta  name='description' content='any description'/>
        </Head>
        {/** Appel du composant TransitionEffect */}
        <TransitionEffect />
        <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
            {/* Appel du composant Layout */}
            <Layout className='pt-16'>
                  {/* Appel du composant AnimatedText */}
                  <AnimatedText  text='Words Can Change The World!'  className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>

                  <h1 className='text-dark font-semibold mb-16 flex items-center justify-center text-2xl'>Some recommended articles</h1>

                  <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16'>

                        <li>
                            <FeaturedArticle 
                                title='FORM VALIDATION IN REACTJS: BUILD A REUSABLE CUSTOM HOOK FOR INPUTS AND ERROR HANDLING'
                                summary='Form📝 handling is an essential part of any website. Since Forms takes the important 
                                information from the user. We must create robust form component which can 
                                handle inputs and it’s validation🚦 easily. Here, we’re going to create a simple React Hook⚓ 
                                to handle form as well as it’s validation.'
                                link='https://devdreaming.com/blogs/react-form-validation-custom-hook'
                                img={featuredImage}
                                time="Updated on January 27, 2023"     
                            />
                        </li>
                        <li>
                            <FeaturedArticle 
                                title="REDUX SIMPLIFIED: A BEGINNER'S GUIDE FOR WEB DEVELOPERS"
                                summary='In this post you will learn the simple concept behid the Redux in simpler terms so make 
                                sure to read the whole article. If you prefer to watch video then here it is else you can keep 
                                reading 😄!. 
                                 Let’s say as a root component you have App.js file in your project, and in the component 
                                tree, the first layer contains 3 components 
                                and in the 2nd layer 
                                there are two child component.'
                                link='https://devdreaming.com/blogs/redux-simply-explained'
                                img={featuredImage1}
                                time="Updated on January 27, 2023"     
                            />
                        </li>
                  </ul>
                  <h2 className='font-bold text-4xl w-full text-center my-16'>Other Articles</h2>
                  <ul>
                        <Article 
                            title="SILKY SMOOTH SCROLLING IN REACTJS: A STEP-BY-STEP GUIDE FOR REACT DEVELOPERS" 
                            link="https://devdreaming.com/blogs/smooth-scrolling-in-react-js" 
                            date="Updated on January 30, 2023" 
                            img={article2}
                        />
                        <Article 
                            title="CREATING AN EFFICIENT MODAL COMPONENT IN REACT USING HOOKS AND PORTALS" 
                            link="https://devdreaming.com/blogs/create-efficient-modal-react-portals" 
                            date="Updated on January 28, 2023" 
                            img={article3}
                        />

                        <Article
                            title="BUILD A FABULOUS TODO LIST APP WITH REACT, REDUX AND FRAMER-MOTION" 
                            link="https://devdreaming.com/blogs/build-react-redux-framer-motion-todo-app" 
                            date="Updated on January 28, 2023" 
                            img={article1}
                        />  
                  </ul>
            </Layout>
        </main>

      </>
    )
}

export default articles