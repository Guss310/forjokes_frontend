import React, { useEffect, useState }from 'react'
import { Container, Row, Navbar, Offcanvas, Nav, Form, Button, NavDropdown } from 'react-bootstrap';
import { NavLink as NavLink, Link} from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import '../Header/header.css';

const Header = () => {
    const [open, setOpen] = useState(false);
    const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();


    const toggleMenu = () => {
        setOpen(!open);
    }


    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky)
        }
    })

    // sticky header
    const isSticky = (e) => {
        const header = document.querySelector('.header-section');
        const scrollTop = window.scrollY;
        scrollTop > 120 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky'); 
        
    }

  return (
    <header className='header-section'>
        <Container > {/* From: https://react-bootstrap.netlify.app/docs/components/navbar/#offcanvas */}

            <Navbar expand='lg' className="p-0">
                {/* Logo section */}
                <Navbar.Brand>
                    <NavLink to='/'>UCUInsider</NavLink>
                </Navbar.Brand>
                {/* End logo section */}

                
                <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-lg`}
                aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                placement="start"
                show={open}
                >

                {/* mobile logo Section */}
                <Offcanvas.Header>
                <h1 className='logo'>UCUInsider</h1>
                <span className="navbar-toggler ms-auto"  onClick={toggleMenu}>
                    <i className="bi bi-x-lg"></i> {/* close icon */}
                </span>

                </Offcanvas.Header>
                {/* End mobile logo Section */}
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                    <NavLink className="nav-link" to="/">Inicio</NavLink>
                    <NavLink className="nav-link" to="/project">Proyecto </NavLink>
                    
                    <NavDropdown
                        title="Sesión" 
                        id={`offcanvasNavbarDropdown-expand-lg`}
                    >
                        
                        <NavDropdown.Item as={Link} to="/profile">Perfil</NavDropdown.Item>
                        {isAuthenticated ? (<NavDropdown.Item href="#action4" onClick={() => logout({ returnTo: window.location.origin})} >Cerrar sesion</NavDropdown.Item>) 
                        : (<NavDropdown.Item href="#action4" onClick={loginWithRedirect} >Crea tu cuenta</NavDropdown.Item>)}

                        {isAuthenticated ? (<NavDropdown.Item as={Link} to="/blog">Publicar <i class="bi bi-plus-circle"></i></NavDropdown.Item>) 
                        : true}
        
                    </NavDropdown>
                    </Nav>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
                <div className="ms-md-4 ms-2">
                    {isAuthenticated ? (
                    <NavLink className=' nav-link primaryBtn d-none d-sm-inline-block' to="/blog">
                        Publicar <i class="bi bi-plus-circle"></i>
                    </NavLink>
                    ) : (
                    <NavLink className='primaryBtn d-none d-sm-inline-block' onClick={loginWithRedirect}>Acceder</NavLink>
                    )
                    }
                    <li className="d-inline-block d-lg-none ms-3 toggle_btn">
                        <i className={open ? "bi bi-x-lg" : "bi bi-list"} onClick={toggleMenu}></i>
                    </li>
                </div>
            </Navbar>

        </Container>
    </header>
  )
}

export default Header;