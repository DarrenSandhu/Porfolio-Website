import React from 'react'
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar, SnackbarContent } from '@mui/material';
import { Container, Wrapper, Title, Desc, ContactForm, ContactTitle, ContactInput, ContactInputMessage, ContactButton, WhatsAppButton, ErrorNotification } from './ContactStyledComponents';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';

const Contact = () => {
  //hooks
  const [open, setOpen] = React.useState(false);
  const [notification, setNotification] = useState({
    from_email: false,
    from_name: false,
    subject: false,
    message: false,
  });
  const form = useRef();

  const [correctForm, setCorrectForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    // Check if all required fields are filled
    const email = form.current['from_email'].value;
    const name = form.current['from_name'].value;
    const subject = form.current['subject'].value;
    const message = form.current['message'].value;

    const newNotifications = {
      from_email: !email,
      from_name: !name,
      subject: !subject,
      message: !message,
    };

    setNotification(newNotifications);

    if (!email || !name || !subject || !message) {
      return;
    }

    setCorrectForm(true);

    emailjs.sendForm('service_wcaeeo1', 'template_768iy1q', form.current, 'kwfP6pe5eeu89NtRm')
      .then((result) => {
        setOpen(true);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  }

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };


  return (
    <>
      <Container id="contact">
        <Wrapper>
          <Title>Contact</Title>
          <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
          <ContactForm ref={form} onSubmit={handleSubmit}>
            <ContactTitle>Email Me ✉️</ContactTitle>
            <ContactInput placeholder="Your Email" name="from_email" type='email' />
            {notification.from_email && <ErrorNotification>⚠️Please enter your email</ErrorNotification>}
            <ContactInput placeholder="Your Name" name="from_name" type='text'/>
            {notification.from_name && <ErrorNotification>⚠️Please enter your name</ErrorNotification>}
            <ContactInput placeholder="Subject" name="subject" type='text' />
            {notification.subject && <ErrorNotification>⚠️Please enter a subject</ErrorNotification>}
            <ContactInputMessage placeholder="Message" rows="4" name="message" type='text' />
            {notification.message && <ErrorNotification>⚠️Please enter your message</ErrorNotification>}
            <ContactButton type="submit" value="Send" onClick={handleClick} />
          </ContactForm>

          {correctForm && 
            <Snackbar
              style={{ zIndex: 9999, marginTop: 200, position: 'fixed'}}
              anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
              open={open}
              autoHideDuration={3000}
              onClose={handleCloseSnackbar}
              >
              <SnackbarContent
                style={{ backgroundColor: '#00c8ff', color: 'white', position: 'fixed'}}
                message="Email sent successfully!"
                action={
                  <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseSnackbar}>
                    <CloseIcon fontSize="small" />
                  </IconButton>
                }
              />
            </Snackbar>
          }
        </Wrapper>
      </Container>
  </>
  )
}

export default Contact