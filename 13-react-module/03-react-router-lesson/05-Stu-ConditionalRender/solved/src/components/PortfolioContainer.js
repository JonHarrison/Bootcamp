import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

class PortfolioContainer extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    let Page = '';
    switch (this.state.currentPage) {
      case 'About' : Page = <About />; break;
      case 'Blog' : Page = <Blog />; break;
      case 'Contact' : Page = <Contact />; break;
      case 'Home' : default: Page = <Home />; break;
    }
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {Page}
      </div>
    );
  }
}

export default PortfolioContainer;
