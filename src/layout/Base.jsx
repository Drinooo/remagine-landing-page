import React, { Fragment } from 'react'
import { ComplexNavbar } from './Header'
import { Footer } from './Footer'
import { Hero } from '../sections/Hero'
import { CTA1 } from '../sections/CTA1'
import { CTA2 } from '../sections/CTA2'

const Base = () => {
  return (
    <Fragment>
      <ComplexNavbar />
      <Hero />
      <CTA1 />
      <CTA2 />
      <Footer />
    </Fragment>
  )
}

export default Base