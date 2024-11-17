// This component is used to display the header of the application, it contains the buttons to acces the different sections of the application.
// The header is displayed in all the pages of the application.
// Its compleatley responsive and it has a sticky effect when the user scrolls down.

// This are the dependencies used in this file.
import React, { useEffect, useState }from 'react'
import { Container, Row, Navbar, Offcanvas, Nav, Form, Button, NavDropdown } from 'react-bootstrap';
import { NavLink as NavLink, Link} from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import '../Header/header.css';

// This is the main function of the Header component.
const Header = () => {
    const [open, setOpen] = useState(false); // This is used to set the state of the offcanvas menu.
    const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0(); // This is used to get the user information.

    // This is used to toggle the offcanvas menu.
    const toggleMenu = () => { 
        setOpen(!open);
    }


    // This is used to add the sticky effect to the header.
    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky)
        }
    })

    // sticky header, this function is used to add the sticky effect to the header.
    const isSticky = (e) => {
        const header = document.querySelector('.header-section'); // This is used to get the header element.
        const scrollTop = window.scrollY; // This is used to get the scroll position of the window.
        scrollTop > 120 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky'); // This is used to add the sticky class to the header.
        
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
                <Offcanvas.Header> {/* https://react-bootstrap.netlify.app/docs/components/offcanvas/#offcanvas-headerFrom: https://react-bootstrap.netlify.app/docs/components/offcanvas/#offcanvas-header */}
                <h1 className='logo'>UCUInsider</h1>
                <span className="navbar-toggler ms-auto"  onClick={toggleMenu}> {/* This is used to close the offcanvas menu. */}
                    <i className="bi bi-x-lg"></i> {/* close icon */}
                </span>

                </Offcanvas.Header>
                {/* End mobile logo Section */}
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                    <NavLink className="nav-link" to="/">Inicio</NavLink>
                    <NavLink className="nav-link" to="/project">Proyecto </NavLink>
                    
                    {/* This is used to display the session section of the header. */}
                    <NavDropdown 
                        title="Sesión" 
                        id={`offcanvasNavbarDropdown-expand-lg`}
                    >
                        
                        <NavDropdown.Item as={Link} to="/profile">Perfil</NavDropdown.Item>
                        {isAuthenticated ? (<NavDropdown.Item href="#action4" onClick={() => logout({ returnTo: window.location.origin})} >Cerrar sesion</NavDropdown.Item>) 
                        : (<NavDropdown.Item href="#action4" onClick={loginWithRedirect} >Crea tu cuenta</NavDropdown.Item>)}

                        {isAuthenticated ? (<NavDropdown.Item as={Link} to="/blog">Publicar <i className="bi bi-plus-circle"></i></NavDropdown.Item>) 
                        : true}
        
                    </NavDropdown>
                    </Nav>
                </Offcanvas.Body>
                </Navbar.Offcanvas>

                {/* This is used to display the publish and login button. */}
                <div className="ms-md-4 ms-2">
                    {isAuthenticated ? (
                    <NavLink className=' nav-link primaryBtn d-none d-sm-inline-block' to="/blog"> 
                        Publicar <i className="bi bi-plus-circle"></i>
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