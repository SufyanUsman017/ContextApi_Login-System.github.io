import React from 'react'
import '../components/Home.css'

export default function Home() {
  return (
    <div>
      <div className="main-page">

{/* <!-- Hero Section --> */}
<div className="hero-section">
  <h1>Welcome to Our Website</h1>
  <p>Your journey to excellence begins here. Discover more about what we offer.</p>
  <button class="cta-button">Get Started</button>
</div>

{/* <!-- Info Sections --> */}
<div className="info-section">
  <div className="info-box">
    <h3>Our Services</h3>
    <p>Explore the wide range of services we offer to help you succeed.</p>
  </div>
  <div className="info-box">
    <h3>About Us</h3>
    <p>Learn more about our team and our mission to serve you better.</p>
  </div>
  <div className="info-box">
    <h3>Contact Us</h3>
    <p>Have questions? Get in touch with our support team.</p>
  </div>
</div>

</div>
    </div>
  )
}
