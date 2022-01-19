import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header'

const Home: NextPage = () => {
  return (
    <div className="main"> 
      <Header />

      <div className='content text-center mt-8'>
          <h1>Previous Work</h1>
      </div>
    </div>
  )
}

export default Home
