import Home from "./Home";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";
import Menu from "./Menu";
import "./MainContent.css";

import { useState } from "react";

const MainContent = () => {

    const [homeShowing, setHomeIsShowing] = useState(true);

    const [aboutShowing, setAboutIsShowing] = useState(false);

    const [contactShowing, setContactIsShowing] = useState(false);

    const [menuShowing, setMenuIsShowing] = useState(false);

    function aboutShowingHandler() {
        setAboutIsShowing(true);
        setHomeIsShowing(false);
        setContactIsShowing(false);
        setMenuIsShowing(false);
    };

    function homeShowingHandler(){
      setHomeIsShowing(true);
      setAboutIsShowing(false);
      setContactIsShowing(false);
      setMenuIsShowing(false);
    }

    function contactShowingHandler(){
      setContactIsShowing(true);
      setAboutIsShowing(false);
      setHomeIsShowing(false);
      setMenuIsShowing(false);
    }

    function menuShowingHandler(){
      setMenuIsShowing(true);
      setContactIsShowing(false);
      setAboutIsShowing(false);
      setHomeIsShowing(false);
    }

  return (
    <div>
      <nav class="navbar container">
        <button class="nav_logo button_link">FOODIE</button>
        <div class="nav_menu" id="nav-menu">
          <ul class="nav_list grid" id="nav-list">
            <li class="nav_item">
              <button class="nav_link button_link" onClick={homeShowingHandler}>
                <i class="uil uil-estate nav_icon"></i> Home
              </button>
            </li>
            <li class="nav_item">
              <button class="nav_link button_link" onClick={aboutShowingHandler}>
                <i class="uil uil-info-circle nav_icon"></i>About
              </button>
            </li>
            <li class="nav_item">
              <button class="nav_link button_link" onClick={menuShowingHandler}>
                <i class="uil uil-restaurant nav_icon"></i>Menu
              </button>
            </li>
            <li class="nav_item">
              <button class="nav_link button_link" onClick={contactShowingHandler}>
                <i class="uil uil-phone nav_icon"></i>Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>
      {homeShowing && <Home />}
      {aboutShowing && <About />}
      {contactShowing && <Contact />}
      {menuShowing && <Menu />}
      <Footer />
    </div>
  );
};

export default MainContent;
