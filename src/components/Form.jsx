import React, { useState } from 'react'
import iconError from '../assets/icon-error.svg'

export const Form = () => {

  const [email, setEmail] = useState('')
  const [error, setError] = useState(true)

  let validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  const eventSubmit = event => {
    event.preventDefault();

    if(validEmail.test(email)) {
      setEmail('')
    }else {
      setError(false)
      setTimeout(() => {
        setEmail('')
        setError(true)
      }, 2500)
    }
  }

  return (
    <div action="#" method="post" className='form'>
      <h1 className='form__title'>
        We're <span>coming soon</span>
      </h1>
      <p className='form__paragraph' >
        Hello fellow shoppers! We're currently building our new fashion store. 
        Add your email below to stay up-to-date with announcements and our launch deals.
      </p>
      <form action="#" method="get" className='form__container' onSubmit={eventSubmit}>
        <label htmlFor="email" className={error ? 'labelError' : 'labelError showError'} sty >Please provide a valid email</label>
        <img src={iconError} alt="" aria-disabled='false' className={error ? 'iconError' : 'iconError showError'} />
        <input type="text" value={email} name="email" id="email" placeholder='Email Address' onChange={ev => setEmail(ev.target.value)} />
        <button type="submit" aria-label='submit'></button>
      </form>
    </div>
  )
}
