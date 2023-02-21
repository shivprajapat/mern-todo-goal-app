import React, { useState } from 'react'
import { Button, Form, Spinner } from 'react-bootstrap'
import { FaUser, FaEye, FaRegEyeSlash } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const isLoading = false
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })
  const [show, setShow] = useState(false)
  const { name, email, password, password2 } = formData;
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
  const navigate = useNavigate()
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
            <div className="input-group">
              <Form.Control type={show ? "text" : "password"} placeholder='Enter your password' name='password' onChange={onChange} value={password} />
              <button className="eye" onClick={eyeButton}>{show ? <FaEye /> : <FaRegEyeSlash />}</button>
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword2">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder='Enter your password' name='password2' onChange={onChange} value={password2} />
          </Form.Group>
          <Form.Group className="d-flex justify-content-between align-items-center" controlId="formBasicPassword2">

            <Button variant="primary" type="submit">
              {isLoading ? <Spinner animation="border" size="sm" /> : "Register"}
            </Button>
            <Button variant="primary" onClick={() => navigate("/login")}>
              Login
            </Button>
          </Form.Group>
        </Form>
      </div>
    </section>
  )
}

export default Register