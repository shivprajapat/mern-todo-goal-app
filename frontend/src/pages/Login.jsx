import React, { useState } from 'react'
import { Button, Form, Spinner } from 'react-bootstrap'
import { FaSignInAlt, FaEye, FaRegEyeSlash } from 'react-icons/fa'
import { useMutation } from 'react-query'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../query/auth/auth.query'

const Login = () => {
  const [show, setShow] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData
  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const passwordToggle = () => {
    setShow(!show)
  }

  const { mutate, isLoading } = useMutation(login, {
    onSuccess: (response) => {
      console.log({ response })
      localStorage.setItem('token', response.headers.authorization)
      navigate('/')
    }
  })
  const onSubmit = (e) => {
    e.preventDefault()
    mutate({ email, password })
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
            <div className="icon-input">
              <Form.Control type={show ? "text" : "password"} placeholder='Enter your password' name='password' onChange={onChange} value={password} />
              <span className="eye" onClick={passwordToggle}>{show ? <FaEye /> : <FaRegEyeSlash />}</span>
            </div>
          </Form.Group>
          <Form.Group className="text-center">

          <Button variant="primary" mr={2} type="submit">
            {isLoading ? <Spinner animation="border" size="sm" /> : "Submit"}
          </Button>
          <Link to='/register'>register</Link>
          </Form.Group>
        </Form>
      </div>
    </section>
  )
}

export default Login