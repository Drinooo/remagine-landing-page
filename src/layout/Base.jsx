import React, { Fragment } from 'react'
import { ComplexNavbar } from './Header'
import { Footer } from './Footer'
import { Hero } from '../sections/Hero'
import { CTA1 } from '../sections/CTA1'
import { CTA2 } from '../sections/CTA2'
import { Examples } from '../sections/Examples'
import { ReactSlickCarousel } from '../__test__/ReactSlickCarousel'
import { Testimonials } from '../sections/Testimonials'
import { Newsletter } from '../sections/Newsletter'

const Base = () => {
  return (
    <Fragment>
      <ComplexNavbar />
      <Hero />
      <CTA1 />
      <CTA2 />
      <Examples />
      <Testimonials />
      <Newsletter />
      <Footer />
    </Fragment>
  )
}

export default Base