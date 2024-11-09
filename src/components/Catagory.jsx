import React from 'react'
import '../components/Catagory.css'

export default function Catagory() {
  return (
    <div class="category-page">

    {/* <!-- Header Section --> */}
    <div class="header">
      <h1>Explore Our Categories</h1>
      <p>Discover a variety of options to suit your needs and preferences</p>
    </div>

    {/* <!-- Category Section --> */}
    <div class="category-section">
      {/* <!-- Category Card 1 --> */}
      <div class="category-card">
        <img src="https://images.pexels.com/photos/28304794/pexels-photo-28304794/free-photo-of-a-person-holding-a-camera-with-a-strap.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Category 1"/>
        <h2>Electronics</h2>
        <p>Latest gadgets and devices to keep you up-to-date with technology.</p>
        <button class="cta-button">Explore</button>
      </div>

      {/* <!-- Category Card 2 --> */}
      <div class="category-card">
        <img src="https://images.pexels.com/photos/15169388/pexels-photo-15169388/free-photo-of-a-man-in-a-suit-and-tie-is-on-an-escalator.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Category 2"/>
        <h2>Fashion</h2>
        <p>Trendy outfits and accessories for every style.</p>
        <button class="cta-button">Shop Now</button>
      </div>

      {/* <!-- Category Card 3 --> */}
      <div class="category-card">
        <img src="https://images.pexels.com/photos/7061394/pexels-photo-7061394.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Category 3"/>
        <h2>Home Decor</h2>
        <p>Beautiful decor items to make your home warm and welcoming.</p>
        <button class="cta-button">View More</button>
      </div>

      {/* <!-- Category Card 4 --> */}
      <div class="category-card">
        <img src="https://images.pexels.com/photos/7393995/pexels-photo-7393995.jpeg?auto=compress&cs=tinysrgb&w=400"/>
        <h2>Books</h2>
        <p>Explore a vast collection of books across various genres.</p>
        <button class="cta-button">Browse</button>
      </div>
    </div>

  </div>

  )
}
