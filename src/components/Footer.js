import React from 'react'
import Layout from './Layout'// Importation du composant Layout
import Link from 'next/link'


const Footer= () =>{
    return (
        <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base'>
            {/* Appel du composant layout*/}
            <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div className='flex items-center lg:py-2'>
                    Build With <span className='text-primary text-2xl px-1 dark:text-primaryDark '>&#9825;</span> 
                    <Link href="https://devdreaming.com" className='underline underline-offset-2'>Kenneth VizioDev</Link>
                </div>
                <Link href="https://devdreaming.com" target={"_blank"} className='underline underline-offset-2'>Say Hello</Link>
            </Layout>
        </footer>
    )
}

export default Footer