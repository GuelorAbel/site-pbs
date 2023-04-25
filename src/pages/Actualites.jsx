import React from 'react'
import Hero from '../components/blog/Hero'
import Post from '../components/blog/Post'
import Testimonial from '../components/Testimonial'

export default function Actualites() {
  return (
    <>
      {/* image de couverture page blog */}
      <Hero />
      {/* listing des articles du blog */}
      <Post/>
      {/* les témoignages */}
      <Testimonial />
    </>
  )
}
