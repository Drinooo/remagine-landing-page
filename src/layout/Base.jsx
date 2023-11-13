import React, { Fragment } from 'react'
import { ComplexNavbar } from './Header'
import { Footer } from './Footer'
import { Hero } from '../sections/Hero'

const Base = () => {
  return (
    <Fragment>
      <ComplexNavbar />
      <Hero />
      <Footer />
    </Fragment>
  )
}

export default Base