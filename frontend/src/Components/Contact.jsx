import React, { useCallback, useState } from 'react';
import SocialNetworks from './SocialNetworks';
import '../Styles/Contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [mail, setMail] = useState({ value: '' });
  const [message, setMessage] = useState({ value: '' });

  const formSubmit = (e) => {
    setSent(true);
    let data = {
      mail: mail,
      message: message,
    };
    try {
      axios.post('/api/forma', data).then((res) => {
        setSent(true);
      }, resetForm());
    } catch {
      console.log('Message can not be sent');
    }
  };

  const resetForm = useCallback(
    (newValue) => {
      setMail({ ...mail, value: newValue });
      setMessage({ ...message, value: newValue });
    },
    [mail, message],
    setTimeout(() => {
      setSent(false);
    }, 3000)
  );

  return (
    <div className='contactContainer'>
      <h1 className='headerContent'>Send me a message!!</h1>
      <Form className='form' onSubmit={formSubmit}>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>Your Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='name@example.com'
            className='formSize'
            onChange={(e) => setMail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Your message</Form.Label>
          <Form.Control
            as='textarea'
            rows={4}
            className='formSize'
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>
        <Button type='submit'>Send</Button>
        <h2 className={!sent ? 'msgOff' : 'msgOn'}>Thank you</h2>
      </Form>
      <div className='bottomContact'>
        <div className='addressInfo'>
          <ul>
            <li>Address: Ciglana II nr.61, Gostivar</li>
            <li>Mail: slavisa.stojanoski@gmail.com</li>
            <li>Tel: +38978595422</li>
          </ul>
        </div>
        <div>
          <SocialNetworks />
        </div>
      </div>
    </div>
  );
};

export default Contact;
