import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import data from '../data/education.json'
import { useState } from 'react'
import Card from '../components/Card'
import Link from 'next/link'


export default function About() {

  console.log(data);
  const [information, setInformation] = useState([...data])

    return(
        <>
      <Head>
        <title>About Page</title>
      </Head>
      <main className={styles.main}>
          <div className={styles.abab}>About Page</div>
          <div className={styles.desc}>

            <div className={styles.bus}>
                
                <h1 className={styles.mon}>Business degrees consist of Finanace and Accounting</h1>
                <div className={styles.center}>
                    <Image
                    className={styles.iconss}
                    src="/icon/personThree.png"
                    alt="Next.js Logo"
                    width={200}
                    height={200}
                    priority/>
            </div>
           </div>

           <div className={styles.bus1}>
                
                <h1 className={styles.mon}>Computing Degrees consist of Applied Software Development Certificate, Computer Systems Diploma, and Applied Computer Information Systems Certificate</h1>
                <div className={styles.center}>
                    <Image
                    className={styles.iconss}
                    src="/icon/person.png"
                    alt="Next.js Logo"
                    width={200}
                    height={200}
                    priority/>
            </div>
           </div>
                


          </div>
      </main>
    </>
    )
}