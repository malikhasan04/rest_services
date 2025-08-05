import React from 'react'
import { NavLink } from 'react-router-dom'

export const Home = () => {
  return (
    <main className="home-content">
    <section className="intro">
      <h1>Welcome to MySite</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ante vitae nisl congue tincidunt.
        Suspendisse potenti. Curabitur vel dui at erat fermentum fermentum. In hac habitasse platea dictumst.
        Maecenas non quam non odio faucibus sollicitudin.
      </p>
    </section>
  
    <section className="features">
      <h2>Why Choose Us?</h2>
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Donec euismod turpis sed nulla feugiat, a semper lorem tristique.</li>
        <li>Aliquam erat volutpat. Aenean porta, justo at iaculis hendrerit.</li>
      </ul>
    </section>
  
    <section className="about">
      <h2>About Our Website</h2>
      <p>
        Praesent nec magna at metus sagittis fermentum. Aenean vitae eros at libero consequat dignissim.
        Nulla facilisi. Phasellus ut dignissim nunc. Nam scelerisque volutpat nunc, nec elementum est tincidunt non.
      </p>
    </section>
  </main>
  
  )
}
