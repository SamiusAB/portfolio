import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Footer from '../components/Footer'

const ContactPage = () => {

  const ContactForm = (
    <form
      name="contact-form"
      method="POST"
      action="contact/?success=true"
    >
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input id="name" className="input"  type="text" placeholder="Text input" required />
        </div>
      </div>
      <div className="field">
        <label className="label">Company</label>
        <div className="control">
          <input id="company" className="input"  type="text" placeholder="Text input" />
        </div>
      </div>
      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input id="email" className="input" type="email" placeholder="Text input" required />
        </div>
      </div>
      <div className="field">
        <label className="label">Message</label>
        <div className="control">
          <textarea id="message" className="textarea" placeholder="Textarea"></textarea>
        </div>
      </div>
      
      <button type="submit">Submit</button>
    </form>
  );

  return (
    <div className="main"> 
      <Header />

      <div className='container contact-content'>
        <div className="title">
          <h1>Contact</h1>
        </div>
        <div className="form">
          { ContactForm }
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ContactPage
