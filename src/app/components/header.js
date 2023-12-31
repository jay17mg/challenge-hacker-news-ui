import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, NavbarBrand, NavbarCollapse, NavbarToggle } from 'react-bootstrap';
import Image from 'next/image';

export default function Head(){
    return(
        <>
        <Navbar className='bgorange' expand="md">
            <Container>
                <NavbarBrand href='/'><Image alt='Hacker news logo' height="30" width='30' className="logo" src='y18.svg'/> Hacker News</NavbarBrand>
                <NavbarToggle />
                <NavbarCollapse>
                <Nav className='me-auto my-2 my-lg-0'>
                    <NavLink href='/' active>Home</NavLink>
                    <NavLink href='/'>Comments</NavLink>
                    <NavLink href='/'>Ask</NavLink>
                    <NavLink href='/'>Show</NavLink>
                    <NavLink href='/'>Jobs</NavLink>
                    <NavLink href='/'>Submit</NavLink>
                </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
        </>
    );
}