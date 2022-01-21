import type { NextPage } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Footer from '../components/Footer'
import { Form, Icon, Block, Button } from 'react-bulma-components'



const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e:any) => { 
    e.preventDefault()
    console.log('Sending')
  
    let data = {
      name,
      email,
      message
    }
  
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        setSubmitted(true)
        setName('')
        setEmail('')
        setMessage('')
      }
    })
  }

  return (
    <div className="main">
    <Header />

      <div className='container contact-content'>
        <div className="title">
          <h1>Contact</h1>
        </div>
        <div className="form">
          <form>
            <Form.Field>
              <Form.Label>Name</Form.Label>
              <Form.Control>
                <Form.Input
                  value={name}
                  onChange={(e) => {
                    return setName(e.target.value);
                  }}
                />
                <Icon align="left" size="small">
                  <i className="fas fa-user" />
                </Icon>
                <Icon align="right" size="small">
                  <i className="fas fa-check" />
                </Icon>
              </Form.Control>
            </Form.Field>

            <Form.Field>
              <Form.Label>Email</Form.Label>
              <Form.Control>
                <Form.Input
                  value={email}
                  onChange={(e) => {
                    return setEmail(e.target.value);
                  }}
                />
                <Icon align="left" size="small">
                  <i className="fas fa-envelope" />
                </Icon>
                <Icon align="right" size="small">
                  <i className="fas fa-exclamation-triangle" />
                </Icon>
              </Form.Control>
            </Form.Field>

            <Form.Field>
              <Form.Label>Subject</Form.Label>
              <Form.Field >
                <Form.Control fullwidth loading>
                  <Form.Input 
                    value={subject}
                    onChange={(e) => {
                      return setSubject(e.target.value);
                    }}/>
                </Form.Control>
              </Form.Field>
            </Form.Field>

            <Form.Field>
              <Form.Label>Message</Form.Label>
              <Form.Textarea
                value={message}
                onChange={(e) => {
                  return setMessage(e.target.value);
                }}
              />
            </Form.Field>

            <Form.Field kind="group">
              <Form.Control>
                < input type='submit' onClick={(e)=>{handleSubmit(e)}}/>
              </Form.Control>
            </Form.Field>
          </form>
      </div>
      </div>

      <Footer />
    </div>
  )
}

export default ContactPage
