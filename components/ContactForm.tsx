import { useState } from 'react'
import { Form, Icon, Block, Button } from 'react-bulma-components'

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    return (
      <form 
        method="POST"
        name="contact-form"
        action="contact/?success=true"
        data-netlify="true"
        >
        <input type="hidden" name="form-name" value="name_of_my_form" />
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
          <Form.Help color="danger">This email is invalid</Form.Help>
        </Form.Field>
  
        <Block renderAs="fieldset" disabled>
          <Form.Field>
            <Form.Label>Label Text</Form.Label>
            <Form.Control>
              <Form.Input placeholder="Inside a field set" />
            </Form.Control>
          </Form.Field>
          <Form.Field>
            <Form.Label>Another disabled field</Form.Label>
            <Form.Control>
              <Form.Input placeholder="Another nside a field set" />
            </Form.Control>
          </Form.Field>
        </Block>
        <Form.Field>
          <Form.Label>Subject</Form.Label>
          <Form.Field kind="group">
            <Form.Control>
              <Form.Select
                value={subject}
                onChange={(e) => {
                  return setSubject(e.target.value);
                }}
              >
                <option value="select-dropdown">Select dropdown</option>
                <option value="with-options">With options</option>
              </Form.Select>
            </Form.Control>
            <Form.Control fullwidth loading>
              <Form.Input placeholder="With loading state" />
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
            <Button color="link">Submit</Button>
          </Form.Control>
          <Form.Control>
            <Button color="link" colorVariant="light">
              Cancel
            </Button>
          </Form.Control>
        </Form.Field>
      </form>
    );
  }

export default ContactForm;