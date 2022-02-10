import { Fragment, useState } from "react";
import "./Home.css";
import image1 from "../img/3.jpg";
import image2 from "../img/4.jpg";
import { Carousel } from "react-carousel-minimal";
import Menu from "./Menu";
import About from "./About";

const Home = () => {
  const data = [
    {
      image:
        "https://www.bevanda.hr/wp-content/uploads/2019/08/Restaurant-1920x670.jpg",
      caption: "Visit us at one of our many locations!",
    },
    {
      image:
        "https://i0.wp.com/www.westside.social/wp-content/uploads/2017/12/food-background-food-concept-with-various-tasty-fresh-ingredients-for-cooking-italian-food-ingredients-view-from-above-with-copy-space_1220-1491-2-e1513108150131.jpg?ssl=1",
      caption:
        "Our meals are made using only best quality and fresh ingredients!",
    },
    {
      image:
        "https://assets.bonappetit.com/photos/5e7a6c79edf206000862e452/16:9/w_2580,c_limit/Cooking-Home-Collection.jpg",
      caption: "Every meal is prepared by a professional chef!",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  const [showHome, setHomeShowing] = useState(true);

  const [showMenu, setMenuShowing] = useState(false);

  const [showAbout, setAboutShowing] = useState(false);

  function showMenuHandler() {
    setMenuShowing(true);
    setHomeShowing(false);
    setAboutShowing(false);
  }

  function showAboutHandler(){
    setAboutShowing(true);
    setHomeShowing(false);
    setMenuShowing(false);
  }

  return (
    <Fragment>

      {showHome && <Fragment>
        <div class="carousel_style">
          <Carousel
            data={data}
            time={3000}
            width="968px"
            margin="auto"
            height="400px"
            captionStyle={captionStyle}
            radius="0"
            // slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            //thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "968px",
              maxHeight: "500px",
              margin: "auto",
            }}
          />
        </div>

        <div class="home_page grid">
          <div class="home-title-container">
            <div class="home_page_title">Enjoy Our Delicious Meals</div>
            <div class="home_page_subtitle">
              Choose from our big offer and see for yourself just how delicious
              out food is. We guarantee you'll love them!
            </div>
            <div class="button_div">
              <button class="button_style" onClick={showMenuHandler}>
                Our Menu
                <i class="uil uil-angle-right button_icon"></i>
              </button>
            </div>
          </div>
          <div class="home_page_image">
            <img class="home_meals_img" src={image1} alt="home meals"></img>
          </div>
        </div>

        <div class="home_page2 grid">
          <div class="home_page_image2">
            <img class="home_meals_img2" src={image2} alt="home meals"></img>
          </div>
          <div class="home-title-container">
            <div class="home_page_title2">About Foodie</div>
            <div class="home_page_subtitle2">
              Foodie offers tasty and healthy meals made by professional chef
              only using best quality ingredients.
            </div>
            <div class="button_div2">
              <button class="button_style" onClick={showAboutHandler}>
                About us
                <i class="uil uil-angle-right button_icon"></i>
              </button>
            </div>
          </div>
        </div>
      </Fragment>}
      {showMenu && <Menu />}
      {showAbout && <About />}


    </Fragment>
  );
};

export default Home;
