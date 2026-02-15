import React from 'react'

const Home = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Adeboye Bakare</h1>
            <p>
              I am a Frontend Developer who builds clean and modern web
              applications.
            </p>
            <button className="green-btn">Let's Get Started</button>
          </div>

          <div className="hero-image">
            <img
              src="src/assets/Screenshot 2026-02-12 194229.png"
              alt="profile"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
