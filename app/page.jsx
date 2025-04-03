import Features from '@/components/Features';
import Hero from '@/components/Hero';
import React from 'react'

const Home = () => {
  return (
    <div>
      <section>
        <Hero />
      </section>
      <section>
        <Features />
      </section>
    </div>
  )
}

export default Home;