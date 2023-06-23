import "./footer.css"
import React from "react";
import Form from 'react-bootstrap/Form';
import { ReactComponent as Youtube } from '../../../assets/Images/Icons/Youtube.svg';
import { ReactComponent as Facebook } from '../../../assets/Images/Icons/Facebook.svg';
import { ReactComponent as Instagram } from '../../../assets/Images/Icons/Instagram.svg';
import { ReactComponent as Logo } from '../../../assets/Images/Icons/ARMNFT_logo -Footer.svg';

const Footer = () => {
    return (
        <div className="px-5">
            <div className="px-5">
            <div className="px-lg-5">
                <footer class="footer-section">
                    <div class="footer-content pt-5 pb-5">
                        <div class="row">
                            <div class="col-xl-2 col-lg-3 col8-bg p-5 radious">
                                <div class="footer-widget">
                                    <div class="footer-logo">
                                        <a href="index.html">
                                            <Logo /></a>
                                    </div>
                                    <div class="d-flex gap-4">
                                        <Facebook />
                                        <Instagram />
                                        <Youtube />
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-5 col-md-6 col8-bg p-5">
                                <div className=" d-flex">
                                    <div class="p-lg-3">
                                        <div>
                                            <h3 className="Footer-Head">NFT</h3>
                                        </div>
                                        <div className="list pt-2">
                                            <div className="Footer-subhead pt-lg-3">Explore</div>
                                            <div className="Footer-subhead pt-lg-3">Stats</div>
                                            <div className="Footer-subhead pt-lg-3">Blog</div>
                                        </div>
                                    </div>
                                    <div class="p-lg-3">
                                        <div>
                                            <h3 className="Footer-Head">MY ACCOUNT</h3>
                                        </div>
                                        <div className="list pt-2">
                                            <div className="Footer-subhead pt-lg-3">My Profile</div>
                                            <div className="Footer-subhead pt-lg-3">My Collection</div>
                                        </div>
                                    </div>
                                    <div class="p-lg-3">
                                        <div>
                                            <h3 className="Footer-Head">COMPANY</h3>
                                        </div>
                                        <div className="list pt-2">
                                            <div className="Footer-subhead pt-lg-3">Careers</div>
                                            <div className="Footer-subhead pt-lg-3">About</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="comp2018">
                                    © 2018-2022 ARMUP NFT, Inc
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-6 mb-50 col4-bg p-5 right-radious">
                                <div class="footer-widget">
                                    <div class="center pb-4">
                                        <h3 className="Footer-Head">JOIN OUR COMMUNITY</h3>
                                    </div>
                                    <div class="subscribe-form">
                                        <form action="#" className="center pb-4">
                                            <Form.Control size="lg" type="search"
                                                placeholder="Your email address"
                                                className='Form-email' />
                                        </form>
                                        <button type="button" className="btn btn-submit">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
            </div>
        </div>
    );
}
export default Footer;