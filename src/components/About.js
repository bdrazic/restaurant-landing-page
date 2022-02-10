import { Fragment } from "react";
import "./About.css";

const About = () => {
  return (
    <Fragment>
      <br />
      <br />
      <div class="aboutus_title"><h1 class="title">THE BUSINESS OF GOOD FOOD</h1></div>
      <br />
      <br />
      <div class="aboutus_div">
        Founded in 2014. out of love for fine dining, Foodie is here to bring
        you the best cuisine from all over the world. Using high-quality raw
        ingredients and classic cooking techniques to ensure you will love every
        single dish you try. As we grow, our mission is to make sure amazing
        food is accessible to everyone!
      </div>
      <div class="home_page container grid">
        <div class="about_us_content">
          <i class="uil uil-user-md about_icon"></i>
          We have top chefs to ensure quality of the food.
        </div>
        <div class="about_us_content">
          <i class="uil uil-truck about_icon"></i>
          Delivering fresh food directly to your doorstep!
        </div>
        <div class="about_us_content">
          <i class="uil uil-favorite about_icon"></i>
          We are proud to have many awards under our belt.
        </div>
      </div>
    </Fragment>
  );
};

export default About;
