import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {FaHome} from 'react-icons/fa'
import {MdContactPhone} from "react-icons/md";
import {BsPersonBadge, BsTerminal} from 'react-icons/bs';
import { Link, animateScroll as scroll } from "react-scroll";
import 'bootstrap/dist/css/bootstrap.css';
import './Header.css';
import logo from '../../Assets/logo.png'
import {useLayoutEffect} from "react";
import { gsap } from "gsap";

const Header = () => {

    useLayoutEffect(() => {
        window.scroll(0,0);
        gsap.fromTo(".NavBar",{y:-100, duration:3, delay:0.3},{y:0, duration:3, delay:0.3, ease:'bounce'});
    },[])

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <Navbar variant="dark" expand="lg" className="NavBar">
            <Container className="Container">
                <Link to="homeSection" offset={-120}>
                    <Navbar.Brand className="Brand">
                        <img
                            width="60"
                            height="60"
                            className="d-inline-block align-top"
                            src={logo}
                        />
                        <p className="Title"> Jesus | Dev </p>
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse className="NavBarCollapse" id="basic-navbar-nav" >
                    <Nav className="me-auto">
                        <Link
                            activeClass="active"
                            to="homeSection"
                            smooth={true}
                            offset={-120}
                            duration={50}
                        >
                            <Nav.Link className="item">
                                <FaHome className="FaHome"/> Home
                            </Nav.Link>
                        </Link>
                        <div className="vr"></div>
                        <Link
                            activeClass="active"
                            to="aboutMeSection"
                            smooth={true}
                            offset={-200}
                            duration={50}
                        >
                            <Nav.Link className="item">
                                <BsPersonBadge className="BsPersonBadge"/> About Me
                            </Nav.Link>
                        </Link>
                        <div className="vr"></div>
                        <Link
                            activeClass="active"
                            to="skillsSection"
                            smooth={true}
                            offset={-200}
                            duration={50}
                        >
                            <Nav.Link className="item">
                                <BsTerminal className="BsTerminal"/> Skills
                            </Nav.Link>
                        </Link>
                        <div className="vr"></div>
                        <Link
                            activeClass="active"
                            to="contactMeSection"
                            smooth={true}
                            duration={50}
                        >
                            <Nav.Link className="item">
                                <MdContactPhone className="MdContactPhone"/> Contact Me
                            </Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;