import React, { Component } from 'react';
import Scroll from 'react-scroll';
import {Container, Row, Col, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem} from 'reactstrap';

import demoScreen from './img/demo-screen-1.jpg';
import googlePlayBadge from './img/google-play-badge.svg';
import appStoreBadge from './img/app-store-badge.svg';


class App extends Component {
  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);

    this.onOpened = this.onOpened.bind(this);
    this.onClosed = this.onClosed.bind(this);
    this.toggle = this.toggle.bind(this);
    
    this.state = {
      collapse: true,
      status: "Closed",
      shrinkClass: "",
      layoutResponded: false
    };

    this.scrollOptions = {
      containerId: "containerElementID",
      activeClass: "active",
      spy: true,
      smooth: "easeInOutQuint",
      offset: -47.5,
      duration: 1000,
      isDynamic: true
    };
  }

  handleScroll(event) {
    this.setState((window.scrollY > 100) ? { shrinkClass: " navbar-shrink" } : { shrinkClass: "" });
  }

  scrollToTop(options) {
    Scroll.animateScroll.scrollToTop(options);
    if (!this.state.collapse) this.toggle();
  }

  scrollToBottom(options) {
    Scroll.animateScroll.scrollToTop(options);
    if (!this.state.collapse) this.toggle();
  }

  scrollToSection() {
    // Closes responsive menu when a scroll trigger link is clicked
    if (!this.state.collapse) this.toggle();
  }

  onOpened() {
    this.setState({ ...this.state, status: 'Opened' });
  }

  onClosed() {
    this.setState({ ...this.state, status: 'Closed' });
  }

  toggle() {
    const status = !this.state.collapse ? 'Opening...' : 'Closing...';
    this.setState({ collapse: !this.state.collapse, status });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    Scroll.scrollSpy.update();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }


  render() {
    return (
      <div className="App">

        {/*<!-- Navigation -->*/}
        <Navbar light fixed="top" className={"navbar-expand-lg" + this.state.shrinkClass} id="mainNav">
          <Container>
            <NavbarBrand onClick={() => this.scrollToTop(this.scrollOptions)} style={{cursor: "pointer"}}>Start Bootstrap</NavbarBrand>
            <NavbarToggler right onClick={this.toggle} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded={!this.state.collapse} aria-label="Toggle navigation" style={{"fontFamily": "inherit"}}>
              Menu&nbsp;
              <i className="fa fa-bars"></i>
            </NavbarToggler>
            <Collapse navbar isOpen={!this.state.collapse} onOpened={this.onOpened} onClosed={this.onClosed} id="navbarResponsive">
              <Nav navbar className="ml-auto">
                <NavItem>
                <Scroll.Link to="scroll-download" onClick={() => this.scrollToSection()} activeClass={this.scrollOptions.activeClass} spy={this.scrollOptions.spy} smooth={this.scrollOptions.smooth} offset={this.scrollOptions.offset} duration={this.scrollOptions.duration} isDynamic={this.scrollOptions.isDynamic} className="nav-link" style={{cursor: "pointer"}}>Download</Scroll.Link>
                </NavItem>
                <NavItem>
                  <Scroll.Link to="scroll-features" onClick={() => this.scrollToSection()} activeClass={this.scrollOptions.activeClass} spy={this.scrollOptions.spy} smooth={this.scrollOptions.smooth} offset={this.scrollOptions.offset} duration={this.scrollOptions.duration} isDynamic={this.scrollOptions.isDynamic} className="nav-link" style={{cursor: "pointer"}}>Features</Scroll.Link>
                </NavItem>
                <NavItem>
                  <Scroll.Link to="scroll-contact" onClick={() => this.scrollToSection()} activeClass={this.scrollOptions.activeClass} spy={this.scrollOptions.spy} smooth={this.scrollOptions.smooth} offset={-110} duration={this.scrollOptions.duration} isDynamic={this.scrollOptions.isDynamic} className="nav-link" style={{cursor: "pointer"}}>Contact</Scroll.Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>

        <header className="masthead">
          <Container className="h-100">
            <Row className="h-100">
              <Col lg={7} className="my-auto">
                <div className="header-content mx-auto">
                  <h1 className="mb-5">New Age is an app landing page that will help you beautifully showcase your new mobile app, or anything else!</h1>
                  <Scroll.Link to="scroll-download" onClick={() => this.scrollToSection()} activeClass={this.scrollOptions.activeClass} spy={this.scrollOptions.spy} smooth={this.scrollOptions.smooth} offset={this.scrollOptions.offset} duration={this.scrollOptions.duration} isDynamic={this.scrollOptions.isDynamic} className="btn btn-outline btn-xl" style={{cursor: "pointer"}}>Start Now for Free!</Scroll.Link>
                </div>
              </Col>
              <Col lg={5} className="my-auto">
                <div className="device-container">
                  <div className="device-mockup iphone6_plus portrait white">
                    <div className="device">
                      <div className="screen">
                        {/*<!-- Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! -->*/}
                        <img src={demoScreen} className="img-fluid" alt="" />
                      </div>
                      <div className="button">
                        {/*<!-- You can hook the "home button" to some JavaScript events or just remove it -->*/}
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </header>

        <Scroll.Element name="scroll-download" className="element">
          <section className="download bg-primary text-center" id="download">
              <Container>
                  <Row>
                    <Col md={8} className="mx-auto">
                      <h2 className="section-heading">Discover what all the buzz is about!</h2>
                      <p>Our app is available on any mobile device! Download now to get started!</p>
                      <div className="badges">
                        <a href="" className="badge-link"><img src={googlePlayBadge} alt="" /></a>&nbsp;
                        <a href="" className="badge-link"><img src={appStoreBadge} alt="" /></a>
                      </div>
                    </Col>
                  </Row>
              </Container>
          </section>
        </Scroll.Element>

        <Scroll.Element name="scroll-features" className="element">
          <section className="features" id="features">
            <Container>
                <div className="section-heading text-center">
                  <h2>Unlimited Features, Unlimited Fun</h2>
                  <p className="text-muted">Check out what you can do with this app theme!</p>
                  <hr />
                </div>
                <Row>
                  <Col lg={4} className="my-auto">
                    <div className="device-container">
                      <div className="device-mockup iphone6_plus portrait white">
                        <div className="device">
                          <div className="screen">
                            {/*<!-- Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! -->*/}
                            <img src={demoScreen} className="img-fluid" alt="" />
                          </div>
                          <div className="button">
                            {/*<!-- You can hook the "home button" to some JavaScript events or just remove it -->*/}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={8} className="my-auto">
                    <Container fluid>
                      <Row>
                        <Col lg={6}>
                          <div className="feature-item">
                            <i className="icon-screen-smartphone text-primary"></i>
                            <h3>Device Mockups</h3>
                            <p className="text-muted">Ready to use HTML/CSS device mockups, no Photoshop required!</p>
                          </div>
                        </Col>
                        <Col lg={6}>
                          <div className="feature-item">
                            <i className="icon-camera text-primary"></i>
                            <h3>Flexible Use</h3>
                            <p className="text-muted">Put an image, video, animation, or anything else in the screen!</p>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={6}>
                          <div className="feature-item">
                            <i className="icon-present text-primary"></i>
                            <h3>Free to Use</h3>
                            <p className="text-muted">As always, this theme is free to download and use for any purpose!</p>
                          </div>
                        </Col>
                        <Col lg={6}>
                          <div className="feature-item">
                            <i className="icon-lock-open text-primary"></i>
                            <h3>Open Source</h3>
                            <p className="text-muted">Since this theme is MIT licensed, you can use it commercially!</p>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </Col>
                </Row>
            </Container>
          </section>
         </Scroll.Element>

        <Scroll.Element name="scroll-contact" className="element">
          <section className="cta">
            <div className="cta-content">
                <Container>
                    <h2>Stop waiting.<br />Start building.</h2>
                    <a href="" className="btn btn-outline btn-xl">Let's Get Started!</a>
                </Container>
            </div>
            <div className="overlay"></div>
          </section>
               
          <section className="contact bg-primary" id="contact">
            <Container>
              <h2>We&nbsp;<i className="fa fa-heart"></i>&nbsp;new friends!</h2>
              <ul className="list-inline list-social">
                <li className="list-inline-item social-twitter">
                  <a href="">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item social-facebook">
                  <a href="">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item social-google-plus">
                  <a href="">
                    <i className="fa fa-google-plus"></i>
                  </a>
                </li>
              </ul>
            </Container>
          </section>
        </Scroll.Element>

        <footer>
          <Container>
            <p>&copy; 2017 Start Bootstrap. All Rights Reserved.</p>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="">Privacy</a>
              </li>
              <li className="list-inline-item">
                <a href="">Terms</a>
              </li>
              <li className="list-inline-item">
                <a href="">FAQ</a>
              </li>
            </ul>
          </Container>
        </footer>
      </div>
    );
  }
}

export default App;
