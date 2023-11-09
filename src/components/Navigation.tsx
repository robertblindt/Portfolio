import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'


type NaviationProps = {
}

export default function Navigation({}:NaviationProps) {

    return (
        <Navbar bg='dark' data-bs-theme="dark" className='nav-vh p-0'>
            <Container className='h-100'>
                <div className='col-8 align-self-center'>
                <Navbar.Brand  as={Link} to='/' className='h-100'>
                SomeLogo
                </Navbar.Brand>
                </div>
                <div className='col-4'>
                <Nav className='justify-content-end nav-vh align-self-center'>
                    <Nav.Link as={Link} to='/' className="align-self-center">Projects</Nav.Link>
                    <Nav.Link as={Link} to='/createdeck' className="align-self-center">Experience</Nav.Link>
                    <Nav.Link as={Link} to='/createdeck' className="align-self-center">Contact</Nav.Link>
                </Nav>
                </div>
            </Container>
        </Navbar>
    )
}