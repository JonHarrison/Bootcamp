import React from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

import Signup from "./pages/Signup";
import Search from "./pages/Search";

const App = () => {
  document.title = "Wikipedia Searcher";
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Routes>
            <Route exact path="/" component={Search} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/search" component={Search} />
          </Routes>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
