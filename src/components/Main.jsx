import React from 'react'
import '../components/Main.css'

export default function Main() {
  return (
    <div class="landing-page">

    {/* <!-- Hero Section --> */}
    <div class="hero-section">
      <h1>Welcome to Our Website</h1>
      <p>Your journey to excellence begins here.</p>
      <button class="cta-button">Get Started</button>
    </div>

    {/* <!-- Features Section --> */}
    <div class="features-section">
      <div class="feature-box">
        <h3>Feature 1</h3>
        <p>Highlight your key offerings or services here.</p>
      </div>
      <div class="feature-box">
        <h3>Feature 2</h3>
        <p>Showcase additional features or unique benefits.</p>
      </div>
      <div class="feature-box">
        <h3>Feature 3</h3>
        <p>Describe what sets you apart from others.</p>
      </div>
    </div>

    {/* <!-- About Section --> */}
    <div class="about-section">
      <h2>About Us</h2>
      <p>Learn more about our journey, values, and mission.</p>
      <img src="https://images.pexels.com/photos/10298138/pexels-photo-10298138.jpeg?auto=compress&cs=tinysrgb&w=400" alt="About Us"/>
    </div>

    {/* <!-- Gallery Section --> */}
    <div class="gallery-section">
      <img src="https://images.pexels.com/photos/2887774/pexels-photo-2887774.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Gallery Image 1"/>
      <img src="https://images.pexels.com/photos/13310471/pexels-photo-13310471.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Gallery Image 2"/>
      <img src="https://images.pexels.com/photos/28410952/pexels-photo-28410952/free-photo-of-reflective-car-mirror-camera-shot.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Gallery Image 3"/>
    </div>

    {/* <!-- Contact Section --> */}
    <div class="contact-section">
      <h3>Contact Us</h3>
      <form class="contact-form">
        <input type="text" placeholder="Your Name"/>
        <input type="email" placeholder="Your Email"/>
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>

  </div>

  )
}
