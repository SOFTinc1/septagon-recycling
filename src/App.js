import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";

// import Header from "./components/header/header.component";
import NavbarBootStrap from "./components/navbar/navbar.component";
import Homepage from "./pages/homepage/homepage.component";
import MachinePage from "./pages/machine/machine.component";
import Footer from "./components/footer/footer.component";

class App extends React.Component {
  unSubscribeFromAuth = null;

  componentDidMount() {}

  render() {
    return (
      <div>
        <AnimatedCursor
          innerSize={12}
          outerSize={30}
          color="0,255,0"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={2}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
            ".nav-item",
            ".onClick",
            ".main",
            ".oover",
          ]}
        />
        {/* <Header /> */}
        <NavbarBootStrap />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/machine" element={<MachinePage />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
