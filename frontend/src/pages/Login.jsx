import React, { useState } from 'react'
import { Button, Form, Spinner } from 'react-bootstrap'
import { FaSignInAlt , FaEye, FaRegEyeSlash } from 'react-icons/fa'

const Login = () => {
  const isLoading = false
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [show, setShow] = useState(false)

  const { email, password } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  const onSubmit = (e) => {
    e.preventDefault()
    console.log('e :>> ', e);
  }
  const eyeButton = () => {
    setShow(!show)
  }
  return (
    <section className='auth'>
      <div className='form-wrapper shadow'>
        <article>
          <h1><FaSignInAlt /> <span>Login</span></h1>
          <p>Login and start setting goals</p>
        </article>
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder='Enter your email' name='email' onChange={onChange} value={email} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <div className="input-group">
              <Form.Control type={show ? "text" : "password"} placeholder='Enter your password' name='password' onChange={onChange} value={password} />
              <button className="eye" onClick={eyeButton}>{show ? <FaEye /> : <FaRegEyeSlash />}</button>
            </div>
                      </Form.Group>
          <Button variant="primary" mr={2} type="submit">
            {isLoading ? <Spinner animation="border" size="sm" /> : "Submit"}
          </Button>
        </Form>
      </div>
    </section>
  )
}

export default Login