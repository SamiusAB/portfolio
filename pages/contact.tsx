import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

const ContactPage = () => {

  return (
    <div className="main"> 
      <Header />

      <div className='container contact-content'>
        <div className="title">
          <h1>Contact</h1>
        </div>
        <div className="form">
          <ContactForm />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ContactPage
