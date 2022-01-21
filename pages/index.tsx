import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import HomeHero from '../components/HomeHero'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <div className="main"> 
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <Head>
        <title>Samuel Abera - Portfolio</title>
        <meta name="description" content="Portfolio site made from scratch using NextJs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <HomeHero />

      <Footer />
    </div>
  )
}

export default Home
