import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section id='contact'>
        <form class="contact-form">
  <h2>Get in Touch</h2>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" />
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" />
  <label for="message">Message:</label>
  <textarea id="message" name="message" placeholder='Start typing'></textarea>
  <button type="submit">Send Message</button>
</form>



        </section>
  )
}

export default Contact
