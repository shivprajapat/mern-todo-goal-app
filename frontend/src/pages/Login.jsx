import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { FaSignInAlt, FaEye, FaRegEyeSlash } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { login, reset } from '../features/auth/authSlice'
import { toast } from 'react-hot-toast'
import { CustomSpinner } from 'components'
import { useEffect } from 'react'

const Login = () => {
  const [show, setShow] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const { email, password } = formData;

  const navigate = useNavigate()
  const dispatch = useDispatch()


  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    if (isSuccess || user) {
      navigate('/')
    }
    dispatch(reset())

  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const passwordToggle = () => {
    setShow(!show)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const userData = {
      email, password
    }
    dispatch(login(userData))
  }
  if (isLoading) {
    return <CustomSpinner />
  }
  return (
    <section className='auth'>
      <div className='form-wrapper shadow'>
        <div>
          <h1><FaSignInAlt /> <span>Login</span></h1>
          <p>Login and start setting goals</p>
        </div>
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

            <Button variant="primary" mr={2} type="submit">Submit</Button>
            <Link to='/register'>register</Link>
          </Form.Group>
        </Form>
      </div>
    </section>
  )
}

export default Login