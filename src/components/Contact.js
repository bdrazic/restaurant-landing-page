import { Fragment } from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <Fragment>
      <br />
      <br />
      <div class="contact_title">
        <h1 class="title">CONTACT US</h1>
      </div>
      <div class="contact_div grid container">
        <div class="contact_container">
          <div class="contact_information">
            <i class="uil uil-phone contact_icon"></i>
            <div>
              <h3 class="contact_titles">Call Us</h3>
              <span class="contact_subtitles">999-777-666</span>
            </div>
          </div>

          <div class="contact_information">
            <i class="uil uil-envelope contact_icon"></i>
            <div>
              <h3 class="contact_titles">E-Mail</h3>
              <span class="contact_subtitles">foodie@foodie.com</span>
            </div>
          </div>

          <div class="contact_information">
            <i class="uil uil-map-marker contact_icon"></i>
            <div>
              <h3 class="contact_titles">Location</h3>
              <span class="contact_subtitles">Pula, Croatia</span>
            </div>
          </div>
        </div>

        <form class="contact_form" action="">
          <div class="contact_inputs">
            <div class="contact_content">
              <label for="" class="contact_label">
                Name
              </label>
              <input type="text" class="contact_input"/>
            </div>
            <div class="contact_content">
              <label for="" class="contact_label">
                Email
              </label>
              <input type="email" class="contact_input" />
            </div>
          </div>
          <div class="contact_content">
            <label for="" class="contact_label">
              Subject
            </label>
            <input type="text" class="contact_input" />
          </div>
          <div class="contact_content">
            <label for="" class="contact_label">
              Message
            </label>
            <textarea
              class="contact_input"
              name="name"
              rows="3"
              cols="0"
            ></textarea>
          </div>

          <div>
              <button class="button_style1">
                Send Message
                <i class="uil uil-message button_icon"></i>
              </button>
            </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Contact;
