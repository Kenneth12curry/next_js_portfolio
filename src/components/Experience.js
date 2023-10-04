// composant Experience => expérience professionnelle acquise
import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion';
import Lilcon from './Lilcon'; // Importation du composant Lilcon

//Création d'un composant secondaire avec des variables en paramètres
const Details = ({poste, company, companyLink, time, address, work}) =>{

    const ref = useRef(null);

    return <ul>
            <li  ref={ref} className='my-8 first:mt-0 last:mb-5 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>

                {/* Appel du composant Lilcon */}
                <Lilcon reference={ref} />

                <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0, type:"spring"}}>
                    <h4 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{poste}&nbsp;<a href={companyLink} target='_blank' className='text-primary capitalize dark:text-primaryDark'>@{company}</a></h4>
                    <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                        {time} | {address}
                    </span>
                    <p className='font-medium w-full md:text-sm'>
                        {work}
                    </p>
                </motion.div>
            </li>
     </ul>

}

const Experience= () => {

    const ref = useRef(null);
    const {scrollYProgress} = useScroll (
        {
            target:ref,
            offset:["start end", "center start"]
        }
    )

    return (
      <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Experience</h2>
        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

            {/* On a fait de cette balise div une balise orpheline */}
            <motion.div style={{scaleY:scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
            md:w-[2px] md:left-[30px] xs:left-[20px]'/>

            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
               
                <Details poste='UI Design intern' company="Peex'IT Group" companyLink='https://peexitgroup.com/'
                time='Août 2022 - Septembre 2022' address='Dakar, Sénégal' 
                work="I had the opportunity to complete an internship in UI Design at Peex'iT Group, focusing on the creation of responsive user interfaces."/>
            
                <Details poste='Intern in Python Development' company="Peex'IT Group" companyLink='https://peexitgroup.com/'
                time='Août 2022 - Septembre 2022' address='Dakar, Sénégal' 
                work="During my Python development internship at Peex&apos;it Group, I actively contributed to the 
                design and development of a task management application. This application allows users 
                to create, modify, and delete individual tasks, as well as view a list of their existing tasks.My 
                role was focused on implementing key features, optimizing the code, and resolving technical 
                issues to ensure a seamless and efficient user experience."/>

                <Details poste='UI Design intern' company="Peex'IT Group" companyLink='https://peexitgroup.com/'
                time='Août 2022 - Septembre 2022' address='Dakar, Sénégal' 
                work="I had the opportunity to complete an internship in UI Design at Peex&apos;iT Group, focusing on the creation of responsive user interfaces."/>

                <Details poste='UI Design intern' company="Peex'IT Group" companyLink='https://peexitgroup.com/'
                time='Août 2022 - Septembre 2022' address='Dakar, Sénégal' 
                work="I had the opportunity to complete an internship in UI Design at Peex&apos;iT Group, focusing on the creation of responsive user interfaces."/>
                
            </ul>
        </div>
      </div>
    )
}

export default Experience