import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import { FaSignInAlt, FaUser } from 'react-icons/fa'

const Header = () => {
    const loading = false;

    const handleLogout = ()=>{
        localStorage.clear();
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
                            loading ? <Button onClick={handleLogout}><FaSignInAlt /> <span>Logout</span></Button>
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