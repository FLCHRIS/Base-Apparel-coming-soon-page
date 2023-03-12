import React from 'react'
import logo from '../assets/logo.svg'
import heroMobile from '../assets/hero-mobile.jpg'
import heroDesktop from '../assets/hero-desktop.jpg'
import { Form } from './Form'

export const Main = () => {
  return (
    <main className='main' >
      <a href='/' >
        <img src={logo} alt="base apparel" className='main__logo' />
      </a>
      <picture>
        <source media="(min-width: 600px)" srcset={heroDesktop} />
        <img src={heroMobile} alt="" aria-disabled="false" />
      </picture>
      <Form />
    </main>
  )
}
