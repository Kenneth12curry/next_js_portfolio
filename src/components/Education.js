// composant Experience => expérience professionnelle acquise
import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion';
import Lilcon from './Lilcon'; // Importation du composant Lilcon

//Création d'un composant secondaire avec des variables en paramètres
const Details = ({type, time, place, info }) =>{

    const ref = useRef(null);

    return <ul>
            <li  ref={ref} className='my-8 first:mt-0 last:mb-5 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>

                {/* Appel du composant Lilcon */}
                <Lilcon reference={ref} />

                <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0, type:"spring"}}>
                    <h4 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{type}</h4>
                    <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                        {time} | {place}
                    </span>
                    <p className='font-medium w-full md:text-sm'>
                        {info}
                    </p>
                </motion.div>
            </li>
     </ul>

}

const Education= () => {

    const ref = useRef(null);
    const {scrollYProgress} = useScroll (
        {
            target:ref,
            offset:["start end", "center start"]
        }
    )

    return (
      <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Education</h2>
        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

            {/* On a fait de cette balise div une balise orpheline */}
            <motion.div style={{scaleY:scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
            md:w-[2px] md:left-[30px] xs:left-[20px]'/>

            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
               
                <Details 
                type="Bachelor's Degree in Software, Networks, and Systems Engineering" 
                time='2020-2023'
                place='Groupe ISM (Institut Supérieur de Management) in Dakar'
                info='Relevant courses included algorithms, various programming languages, software engineering, and system administration focusing on Windows and Linux operating systems.' />

                <Details 
                type="Bachelor of Science in Computer Science" 
                time='2021-2023'
                place='Institut National Universitaire Champollion in Albi'
                info='Relevant courses included data structures, programming with the Python language, and language theory (DFA, NFA)' /> 
                
            </ul>
        </div>
      </div>
    )
}

export default Education