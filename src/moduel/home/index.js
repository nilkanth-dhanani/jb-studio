import React from 'react'
import './home.css';
import averest from '../../assets/images/dbfa24d7-2e60-498c-03ce-2ae7b3d1c988.jpg';
import shape1 from '../../assets/images/shape1.png';
import logo from '../../assets/images/logo.png';
import shape2 from '../../assets/images/shape2.png';
import fimg from '../../assets/images/f.jpg';
import patternsmallgold from '../../assets/images/patternsmallgold.png';
import getyourcode from '../../assets/images/122.png';
import patterndrkblue from '../../assets/images/patterndrkblue.png';
import shoe from '../../assets/images/62.png';
import patterngoldnew from '../../assets/images/patterngoldnew.png';
import Favim from '../../assets/images/Favim.com35163.jpg';
import face from '../../assets/images/6430c7ab52850cbbb82ff19bc2c04658.jpg';
import agency from '../../assets/images/78.png';
import Untitled9 from '../../assets/images/Untitled9.jpg';
import bg2 from '../../assets/images/bg2.png';
import rt from '../../assets/images/rt.jpg';
import Untitled8 from '../../assets/images/Untitled8.jpg';
import dfv from '../../assets/images/dfv.jpg';
import rcimg from '../../assets/images/78.jpg';
import facebook from '../../assets/images/facebook.png';
import instagram from '../../assets/images/instagram.png';
import twitter from '../../assets/images/twitter.png';

export default function Home() {
    return (
        <div className="main-div">
            <header>
                <a href="index.js">
                    <img src={logo} alt="logo" />
                </a>
                <div className="header-link">
                    <a href="#one">One</a>
                    <a href="#two">Two</a>
                    <a href="#three">Three</a>
                    <a href="#four">Four</a>
                </div>
                <button className='button-main' type='button'><p>BUTTON</p></button>
            </header>
            <div className="first-div">
                <img src={averest} alt="averest" />
            </div>
            <div className="second-main-div">
                <div className="second-div">
                    <img src={shape1} alt="shape1" />
                    <div className="second-div2">
                        <div className="second-div-logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="second-div-text">
                            <h1>Design Agency</h1>
                        </div>
                        <div className="second-div-pera">
                            <p>We create brands for the most innovative and exciting companies in the world, to help them rewrite the rules for how we all live our lives.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="studio-div">
                <div className="studio-div-relative">
                    <img src={shape2} alt="shape2" />
                </div>
                <div className="container">
                    <div className="studio-main-div">
                        <div className="studio-main-div-flex">
                            <div className="studio-main-div-flex-pera">
                                <h1>Hello,<br />We are <br />Design Studio.</h1>
                                <p>We make a meaningful difference to the world’s most loved brands. We begin with ‘we know nothing’, and immerse ourselves in everything you do. We want to move in. Be part of your team. And see the world how you see it.</p>
                            </div>
                            <div className="studio-main-div-flex-img">
                                <div className="studio-main-div-flex-img2">
                                    <img src={patternsmallgold} alt="patternsmallgold" />
                                    <div className="studio-main-div-flex-img1">
                                        <img src={fimg} alt="fimg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="get-your-guide">
                <div className="container">
                    <div className="get-your-guide-flex">
                        <div className="get-your-guide-flex-div1">
                            <div className="get-your-guide-flex-div1-box">
                                <div className="get-your-guide-flex-div1-black-box"></div>
                                <div className="get-your-guide-flex-div1-yallow-box">
                                    <img src={getyourcode} alt="getyourcode" />
                                </div>
                            </div>
                            <div className="get-your-guide-flex-div1-pera">
                                <p>As intense sneaker lovers and designers, we decided to create our own sneaker design. The Shift F1’s broaden our design language, while setting an exercise to experiment and explore the future of footwear design.</p>
                            </div>
                        </div>
                        <div className="get-your-guide-flex-div2">
                            <div className="get-your-guide-flex-div2-object">
                                <h2>Our Projects</h2>
                                <div className="get-your-guide-flex-div2-object-black"></div>
                            </div>
                            <div className="get-your-guide-flex-div2-relative">
                                <div className="get-your-guide-flex-div2-relative-img">
                                    <img src={patterndrkblue} alt="patterndrkblue" />
                                    <div className="get-your-guide-flex-div2-relative-yallow">
                                        <img src={shoe} alt="shoe" />
                                        <div className="get-your-guide-flex-div2-relative-yallow-position">
                                            <div className="get-your-guide-flex-div2-relative-yallow-position-div">
                                                <h3>SHIFT F1</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="get-your-guide-flex-div2-button">
                                <button type="button">view more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="water">
                <div className="container">
                    <div className="water-flex">
                        <div className="water-flex-div1">
                            <div className="water-flex-div1-poster">
                                <img src={patterngoldnew} alt="patterngoldnew" />
                                <div className="water-flex-div1-poster-img">
                                    <img src={Favim} alt="Favim" />
                                </div>
                            </div>
                            <div className="water-flex-div1-pera">
                                <p>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
                            </div>
                        </div>
                        <div className="water-flex-div2">
                            <div className="water-flex-div2-position">
                                <h2>let's get</h2>
                                <h2>creative</h2>
                                <div className="water-flex-div2-position-img">
                                    <img src={patterndrkblue} alt="patterndrkblue" />
                                </div>
                            </div>
                            <div className="water-flex-div2-img">
                                <img src={face} alt="face" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="agency">
                <div className="container">
                    <div className="agency-flex">
                        <div className="agency-flex-div1">
                            <img src={patternsmallgold} alt="patternsmallgold" />
                            <div className="agency-flex-div1-img">
                                <img src={agency} alt="agency" />
                            </div>
                        </div>
                        <div className="agency-flex-div2">
                            <div className="agency-flex-div2-pera">
                                <p>We are a design and digital agency providing marketing advice for more than 29 years. We specialise in:</p>
                                <span>
                                    - Branding <br />
                                    – Printed Collateral <br />
                                    – Responsive Websites <br />
                                    – Digital Marketing <br />
                                    – Signage <br />
                                    – Display Centres <br />
                                    – Promotional Items <br />
                                    – Plus more…
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="building">
                <div className="container">
                    <div className="building-head">
                        <h3>We’ve been building brands for more than 29 years. This is what we’ve done recently.</h3>
                    </div>
                </div>
            </div>
            <div className="last-div-position">
                <div className="container">
                    <div className="last-div-main">
                        <div className="last-div-main-img">
                            <div className="last-div-main-img-position-img">
                                <img src={patternsmallgold} alt="patternsmallgold" />
                            </div>
                            <div className="last-div-main-box">
                                <div className="last-div-main-box-flex">
                                    <img src={Untitled9} alt="Untitled9" />
                                    <div className="last-div-main-box-flex-pera">
                                        <h2>Brand Strategy & Equity</h2>
                                        <p>Your brand strategy is how, what, where, when and to whom you plan on communicating and delivering on your brand messages. Where you advertise is part of your brand strategy. Your distribution channels are also part of your brand strategy.</p>
                                    </div>
                                </div>
                                <div className="last-div-main-box-grid">
                                    <div className="">
                                        <img src={bg2} alt="bg2" />
                                    </div>
                                    <img src={rt} alt="rt" />
                                    <img src={Untitled8} alt="Untitled8" />
                                </div>
                                <div className="last-div-main-box-flex2">
                                    <div className="last-div-main-box-flex2-img1">
                                        <img src={dfv} alt="dfv" />
                                    </div>
                                    <div className="last-div-main-box-flex2-img2">
                                        <img src={rcimg} alt="rcimg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="last-div">
            </div>
            <footer>
                <div className="container">
                    <div className="footer-det">
                        <div className="rlogo-class">
                            <img src={logo} alt="logo" />
                        </div>
                        <div class="footer-menu">
                            <div class="footer-menu-item">
                                <a href="#home">Home</a>
                            </div>
                            <div class="footer-menu-item">
                                <a href="#about">About</a>
                            </div>
                            <div class="footer-menu-item">
                                <a href="#services">Services</a>
                            </div>
                            <div class="footer-menu-item">
                                <a href="#contact">Contact</a>
                            </div>
                        </div>
                        <div className="social-media-logo-last">
                            <a href="facebook.com">
                                <img src={facebook} alt="facebook" />
                            </a>
                            <a href="twitter.com">
                                <img src={twitter} alt="twiter" />
                            </a>
                            <a href="instagram.com">
                                <img src={instagram} alt="instagram" />
                            </a>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright">
                    <p>© 2023 Company Name</p>
                </div>
            </footer>
        </div>
    )
}
