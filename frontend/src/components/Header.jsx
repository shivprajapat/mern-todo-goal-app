import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FaSignInAlt, FaUser } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

const Header = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)

    const handleLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }
    return (
        <Navbar fixed='top' bg="primary" variant="dark">
            <Container>
                <Navbar.Brand to="/" as={Link}>
                    GoalSetter
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {
                            user ? <Nav.Link className='logout' onClick={handleLogout}><FaSignInAlt /> <span>Logout</span></Nav.Link>
                                :
                                <>
                                    <Nav.Link as={NavLink} to="/login"><FaSignInAlt /> <span>Login</span></Nav.Link>
                                    <Nav.Link as={NavLink} to="/register"><FaUser /> <span>Register</span></Nav.Link>
                                </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header