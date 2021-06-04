import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import '../styles/global.css';
import { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Layout = ({ children }) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <main>
        {/* Two Navbars:
            First Navbar does not that the menu toggle icon.
            Second Navbar does. */}
            <Navbar color="light" light expand="md" className='d-none d-lg-flex py-0'>
                <NavbarBrand href="/">
                    <StaticImage src="../images/logo.svg" placeholder='blurred' alt="" />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                {/* Had to use justify-content-end and make width 100% to get the navlinks to the right side */}
                    <Nav className="justify-content-end w-100 mt-5" navbar>
                        <NavItem>
                            <NavLink className='py-0' href="/">Information</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='py-0' href="/LongDong">Long Dong</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='py-0' href="/ReHai">Re Hai</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='py-0' href="/BigCannonCliff">Big Cannon Cliff</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='py-0' href="/GuanZiLing">Guan Zi Ling</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='py-0' href="/ShouShan">Shou Shan</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <Navbar color="light" light className='d-lg-none'>
                <NavbarBrand href="/" className="mr-auto">
                    <StaticImage src="../images/logo.svg" placeholder='blurred' alt="" />
                </NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar>
                <Nav navbar className=''>
                    <NavItem className='mx-auto'>
                        <NavLink href="/">Information</NavLink>
                    </NavItem>
                    <NavItem className='mx-auto'>
                        <NavLink href="/LongDong">Long Dong</NavLink>
                    </NavItem>
                    <NavItem className='mx-auto'>
                        <NavLink href="/ReHai">Re Hai</NavLink>
                    </NavItem>
                    <NavItem className='mx-auto'>
                        <NavLink href="/BigCannonCliff">Big Cannon Cliff</NavLink>
                    </NavItem>
                    <NavItem className='mx-auto'>
                        <NavLink href="/GuanZiLing">Guan Zi Ling</NavLink>
                    </NavItem>
                    <NavItem className='mx-auto'>
                        <NavLink href="/ShouShan">Shou Shan</NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>

            {/* <nav className="navbar navbar-light bg-light static-top p-0 sticky-top d-sm-none pt-1 pb-1" id="mobileBrand">
                <a className="navbar-brand mx-auto" href="/">
                    <StaticImage src="../images/logo.svg" placeholder='blurred' alt="" />
                </a>
            </nav>
            <nav className="navbar navbar-expand-lg navbar-light bg-light static-top p-0 sticky-top" id="mainNav">
                <a className="navbar-brand d-none d-sm-inline ml-2" href="/">
                    <StaticImage src="../images/logo.svg" placeholder='blurred' alt="" />
                </a>
                <button className="navbar-toggler mr-sm-1 mx-auto mt-1 mb-1" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon mr-sm-4"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto text-center">
                    <li className="nav-item mx-auto mt-3">
                        <a className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" href="/">Information</a>
                    </li>
                    <li className="nav-item mx-auto mt-3">
                        <a className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" href="/LongDong" id="longDongNavLink">Long Dong</a>
                    </li>
                    <li className="nav-item mx-auto mt-3">
                        <a className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" href="/ReHai">Re Hai</a>
                    </li>
                    <li className="nav-item mx-auto mt-3">
                        <a className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" href="/BigCannonCliff">Big Cannon Cliff</a>
                    </li>
                    <li className="nav-item mx-auto mt-3">
                        <a className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" href="/GuanZiLing">Guan Zi Ling</a>
                    </li>
                    <li className="nav-item mx-auto mt-3 mb-3 mb-sm-0">
                        <a className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" href="/ShouShan">Shou Shan</a>
                    </li>
                    </ul>
                </div>
            </nav> */}
            {children}
        </main>
    )
}

export default Layout;