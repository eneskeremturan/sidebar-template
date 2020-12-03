import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import Content from "./components/content/Content";
import Login from "./components/screens/LoginScreen";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignUp from "./components/screens/SignUp";

class App extends React.Component {
  constructor(props) {
    super(props);

    // Moblie first
    this.state = {
      isOpen: false,
      isMobile: true,
    };

    this.previousWidth = -1;
  }

  updateWidth() {
    const width = window.innerWidth;
    const widthLimit = 576;
    const isMobile = width <= widthLimit;
    const wasMobile = this.previousWidth <= widthLimit;

    if (isMobile !== wasMobile) {
      this.setState({
        isOpen: !isMobile,
      });
    }

    this.previousWidth = width;
  }

  /**
   * Add event listener
   */
  componentDidMount() {
    this.updateWidth();
    window.addEventListener("resize", this.updateWidth.bind(this));
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth.bind(this));
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <>
        <div className="App">
          {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>
            positronX.io
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
          <SideBar toggle={this.toggle} isOpen={this.state.isOpen} />
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Container>
                <Route exact path="/" component={Login} />
                <Route path="/sign-in" component={Login} />
                <Route path="/sign-up" component={SignUp} />
              </Container>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
