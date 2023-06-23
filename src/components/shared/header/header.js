import React, { useState, useEffect } from 'react'
import "./header.css"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { ReactComponent as Logo } from '../../../assets/Images/Logo/ARMNFT_logo 1.svg';
import { ReactComponent as User } from '../../../assets/Images/Icons/user.svg';
import { ReactComponent as Search } from '../../../assets/Images/Icons/search-normal.svg';
import { Link, useLocation } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Select from 'react-select';
const Header = () => {

    const location = useLocation();
    const [navbarBg, setNavbarBg] = useState('transparent');
    const [SearchBorder, setSearchBorder] = useState('form-control-header');
    const data = [
        {
            text: 'Eth', value: 'Eth',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                    <path fill="#9fa8da" d="M11 24L25 2 39 24 25 32z"></path><path fill="#7986cb" d="M25 2L39 24 25 32z"></path><path fill="#9fa8da" d="M11 27L25 35 39 27 25 46z"></path><path fill="#7986cb" d="M25 35L39 27 25 46zM11 24L25 18 39 24 25 32z"></path><path fill="#5c6bc0" d="M25 18L39 24 25 32z"></path>
                </svg>
            ),
        },
        {
            text: 'MAT',
            value: 'MAT',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#8247E5" width="24" height="24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1.25-10.27c.42 0 .75.34.75.76v3.87c0 .42-.34.76-.75.76H8.68c-.42 0-.75-.34-.75-.76v-3.87c0-.42.34-.76.75-.76h2.07zm5.17.94c.41 0 .74.34.74.76v2.36c0 .42-.33.76-.74.76h-2.57c-1.51 0-2.45-.93-2.45-2.48v-.14c0-1.51.94-2.49 2.45-2.49h2.57zm-7.83.02c.42 0 .76.34.76.76v3.86c0 .42-.34.76-.76.76H6.55c-.42 0-.76-.34-.76-.76v-3.86c0-.42.34-.76.76-.76h2.21z" />
                </svg>
            ),
        },
        {
            text: 'OMR',
            value: 'OMR',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-omani-rial">
                    <path d="M10 7h4v10h-4zm2-5a7 7 0 1 0 7 7 7 7 0 0 0-7-7z"></path>
                    <path d="M17 10h2v4h-2z"></path>
                    <path d="M16 12h2"></path>
                    <path d="M19 12h2"></path>
                    <path d="M16 15h2"></path>
                    <path d="M19 15h2"></path>
                    <path d="M12 12h2"></path>
                    <path d="M12 15h2"></path>
                    <path d="M15 15h2"></path>
                </svg>
            ),
        },
        {
            text: 'JOD',
            value: 'JOD',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-currency">
                    <path d="M6 10L6 16"></path>
                    <path d="M12 10L12 16"></path>
                    <path d="M18 10L18 16"></path>
                    <path d="M6 12L18 12"></path>
                    <path d="M6 6L6 6"></path>
                    <path d="M12 6L12 6"></path>
                    <path d="M18 6L18 6"></path>
                </svg>
            ),
        },
        {
            text: 'GBP',
            value: 'GBP',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20">
                    <path fill="#000" d="M256 8C119.04 8 8 119.04 8 256s111.04 248 248 248 248-111.04 248-248S392.96 8 256 8zm0 472c-119.103 0-216-96.897-216-216S136.897 48 256 48s216 96.897 216 216-96.897 216-216 216zm-4-144h-52.8v-70.4h52.8c36.593 0 64.8-15.406 64.8-56.8v-16.8h44.8v16.8c0 53.841-34.048 78.4-109.6 78.4zM220 272h36.8c29.263 0 46.8 12.347 46.8 38.4 0 25.817-17.592 38.4-47.2 38.4H220v-76zm80 56h-50.4v-48h49.6c20.6 0 30.4 9.6 30.4 24.8 0 14.4-8 23.2-29.6 23.2zm8-88h-44v-52.8h44c25.232 0 40 10.4 40 34.4-.4 24-14.768 34.4-40 34.4zM220 192h43.2c17.488 0 30.8-8 30.8-23.2 0-15.104-14.4-22.4-32.8-22.4H220v45.6z" />
                </svg>
            ),
        },
        {
            text: 'KYD',
            value: 'KYD',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-dollar-sign"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            ),
        },
        {
            text: 'EUR',
            value: 'EUR',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="20" height="20">
                    <path d="M64 240C46.33 240 32 225.7 32 208C32 190.3 46.33 176 64 176H92.29C121.9 92.11 201.1 32 296 32H320C337.7 32 352 46.33 352 64C352 81.67 337.7 96 320 96H296C238.1 96 187.8 128.4 162.1 176H288C305.7 176 320 190.3 320 208C320 225.7 305.7 240 288 240H144.2C144.1 242.6 144 245.3 144 248V264C144 266.7 144.1 269.4 144.2 272H288C305.7 272 320 286.3 320 304C320 321.7 305.7 336 288 336H162.1C187.8 383.6 238.1 416 296 416H320C337.7 416 352 430.3 352 448C352 465.7 337.7 480 320 480H296C201.1 480 121.9 419.9 92.29 336H64C46.33 336 32 321.7 32 304C32 286.3 46.33 272 64 272H80.15C80.05 269.3 80 266.7 80 264V248C80 245.3 80.05 242.7 80.15 240H64z" /></svg>
            ),
        },
        {
            text: 'CHF',
            value: 'CHF',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M10 21V3h8" /> <path d="M6 16h9" /> <path d="M10 9.5h7" /> </svg>
            ),
        },
        {
            text: 'USD',
            value: 'USD',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
                    <title>ionicons-v5_logos</title><path d="M240,480V443.58C160.53,439,112.25,398.06,112,336h72c1.77,26.34,23.86,46.45,56,50V288L213.23,281c-61-14.18-93.64-49.39-93.64-102.08C119.59,116.81,164.08,76.08,240,70V32h32V70c77.39,6.3,119,47.74,120,106H320c-.76-24.06-15.83-43.39-48-46v92l30.82,7.28C367.61,243.46,400,277,400,332c0,64.34-43.74,105.88-128,111.32V480Zm0-264V130c-27.59,1.52-47.27,18.47-47.27,42.53C192.73,194.83,209.12,209.41,240,216Zm32,78v92c38.15-1.54,56.38-18.92,56.38-45.77C328.38,315.65,310.15,299.1,272,294Z" /></svg>
            ),
        },
    ];
    useEffect(() => {
        const changeBackground = () => {
            if (window.scrollY >= 50) {
                setNavbarBg('white');
            } else {
                setNavbarBg('transparent');
            }
        };

        window.addEventListener('scroll', changeBackground);

        return () => {
            window.removeEventListener('scroll', changeBackground);
        };
    }, []);
    useEffect(() => {
        const changeBorder = () => {
            if (window.scrollY >= 50) {
                setSearchBorder('border');
            } else {
                setSearchBorder('noborder');
            }
        };

        window.addEventListener('scroll', changeBorder);

        return () => {
            window.removeEventListener('scroll', changeBorder);
        };
    }, []);
    return (
        <Navbar collapseOnSelect expand="lg" className={`navbar ${navbarBg}`}>
            <Container fluid className='sidespc'>
                <Navbar.Brand href="/">
                    <Logo />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav ">
                    <Nav className="me-auto" >
                        <Search className='search-icon' />
                        <Form.Control size="lg" type="search"
                            placeholder="Search NFT, Artist, Collectins, etc"
                            className={`form-control-header ${SearchBorder}`} />
                    </Nav>
                    <Nav className=''>
                        <Nav.Link >
                            <div className="itemSpacing explore TxtOverFlow">
                                <Link className={location.pathname === '/explore' ? 'active' : ''} >Explore</Link>
                                <Link className={location.pathname === '/stats' ? 'active' : ''}>Stats</Link>
                                <Link className={location.pathname === '/blogs' ? 'active' : ''}>Blogs</Link>
                            </div>
                        </Nav.Link>
                    </Nav>
                    <Nav className=''>
                        <Nav.Link>
                            <Select
                                placeholder="Select Option"
                                options={data}
                                isSearchable={false}
                                getOptionLabel={(e) => (
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        {e.icon}
                                        <span style={{ marginLeft: 5 }}>{e.text}</span>
                                    </div>
                                )}
                            />
                        </Nav.Link>
                        <Nav.Link>
                            <Button>
                                <User />
                            </Button>
                        </Nav.Link>
                        <Nav.Link>
                            <button type="button" class="login-btn">Login</button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container >
        </Navbar >
    );
}
export default Header;