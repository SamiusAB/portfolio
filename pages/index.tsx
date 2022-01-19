import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import HomeHero from '../components/HomeHero'

const Home: NextPage = () => {
  return (
    <div className="main"> 
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <Head>
        <title>Samuel Abera - Portfolio</title>
        <meta name="description" content="Portfolio site made from scratch using NextJs" />
        <link rel="icon" href="/favicon.ico" />
        {/* <!-- UIkit CSS --> */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.10.0/dist/css/uikit.min.css" />

        {/* <!-- UIkit JS --> */}
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.10.0/dist/js/uikit.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.10.0/dist/js/uikit-icons.min.js"></script>
      </Head>

      <Header />

      <HomeHero />

      <footer className="footer is-transparent">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
