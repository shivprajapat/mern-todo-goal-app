import React, { useState } from 'react'
import { Button, Form, Spinner } from 'react-bootstrap'
import { FaUser, FaEye, FaRegEyeSlash } from 'react-icons/fa'
import { useMutation } from 'react-query'
import { Link, useNavigate } from 'react-router-dom'
import { register } from '../query/auth/auth.query'

const Register = () => {
  const [eyePassword, setEyePassword] = useState(false)
  const [eyePassword1, setEyePassword1] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const { name, email, password, password2 } = formData

  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const passwordToggle = () => {
    setEyePassword(!eyePassword)
  }
  const passwordToggle1 = () => {
    setEyePassword1(!eyePassword1)
  }
  const { mutate, isLoading } = useMutation(register, {
    onSuccess: (response) => {
      console.log({ response })
      localStorage.setItem('token', response.data.token)
      navigate('/login')
    }
  })
  const onSubmit = (e) => {
    e.preventDefault()
    if (password !== password2) {
      alert('Passwords do not match')
    } else {
      return mutate({
        name,
        email,
        password,
      })
    }
  }
  return (
    <section className='auth'>
      <div className='form-wrapper shadow'>
        <article>
          <h1><FaUser /> <span>Register</span></h1>
          <p>Please create an account</p>
        </article>
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder='Enter your name' name='name' value={name} onChange={onChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder='Enter your email' name='email' onChange={onChange} value={email} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <div className="icon-input">
              <Form.Control type={eyePassword ? "text" : "password"} placeholder='Enter your password' name='password' onChange={onChange} value={password} />
              <span className="eye" onClick={passwordToggle}>{eyePassword ? <FaEye /> : <FaRegEyeSlash />}</span>
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword2">
            <Form.Label>Confirm Password</Form.Label>
            <div className="icon-input">
            <Form.Control type={eyePassword1 ? "text" : "password"} placeholder='Confirm password' name='password2' onChange={onChange} value={password2} />
            <span className="eye" onClick={passwordToggle1}>{eyePassword1 ? <FaEye /> : <FaRegEyeSlash />}</span>  </div>
          </Form.Group>
          <Form.Group className="text-center">

            <Button variant="primary" type="submit">
              {isLoading ? <Spinner animation="border" size="sm" /> : "Register"}
            </Button>
            <Link to='/login'>Login</Link>
          </Form.Group>
        </Form>
      </div>
    </section>
  )
}

export default Register