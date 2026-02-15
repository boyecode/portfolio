import React from 'react'

const Contact = () => {
  return (
    <div>
      {/* CONTACT */}
      <section className="contact">
        <h2>Get In Touch</h2>

        <form className="contact-form">
          <input type="text" placeholder="Enter your name" />
          <input type="email" placeholder="Enter your email" />
          <textarea placeholder="Enter your message"></textarea>
          <button className="green-btn">Submit</button>
        </form>
      </section>
    </div>
  )
}

export default Contact