import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {FaHome} from 'react-icons/fa'
import {MdContactPhone} from "react-icons/md";
import {BsPersonBadge, BsTerminal} from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.css';
import './NavBar.css';
import logo from '../../Assets/logo.png'
import {useLayoutEffect, useRef} from "react";
import { gsap } from "gsap";

const NavBar = ({tl}) => {
    const navBarRef = useRef();

    useLayoutEffect(() => {
        window.scroll(0,0)
        // create our context. This function is invoked immediately and all GSAP animations
        // and ScrollTriggers created during the execution of this function get recorded, so
        // we can revert() them later (cleanup)
        let ctx = gsap.context(() => {
            tl.from(navBarRef.current, {y:-100, duration:2, delay:0.3 ,opacity:0, ease:'power3'});
        });
        return () => ctx.revert(); // cleanup
    },[])

    return (
        <Navbar ref={navBarRef} collapseOnSelect variant="dark pills" expand="lg" className="NavBar" id="navbar">
            <Container className="Container">
                <Navbar.Brand href="#homeSection" className="Brand">
                    <img
                        width="60"
                        height="60"
                        className="d-inline-block align-top"
                        src={logo}
                    />
                    <p className="Title"> Jesus | Dev </p>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse className="NavBarCollapse" id="basic-navbar-nav" >
                    <Nav activeKey className="me-auto">
                        <Nav.Link href="#homeSection" className="item">
                            <FaHome className="FaHome"/> Home
                        </Nav.Link>
                        <div className="vr"></div>
                        <Nav.Link href="#aboutMeSection" className="item">
                            <BsPersonBadge className="BsPersonBadge"/> About Me
                        </Nav.Link>
                        <div className="vr"></div>
                        <Nav.Link href="#skillsSection" className="item">
                            <BsTerminal className="BsTerminal"/> Skills
                        </Nav.Link>
                        <div className="vr"></div>
                        <Nav.Link href="#contactMeSection" className="item">
                            <MdContactPhone className="MdContactPhone"/> Contact Me
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;