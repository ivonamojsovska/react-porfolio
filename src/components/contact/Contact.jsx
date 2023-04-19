import React, { useRef } from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BiPhone } from "react-icons/bi";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dntfnz6",
        "template_4inkdxm",
        form.current,
        "Nkod-QOca7oCVOUp_"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Error. Please try again.");
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5 className="text-light">ivonamojsovska15@gmail.com</h5>
            <a href="mailto:ivonamojsovska15@gmail.com" target="_blank">
              Send a meessage
            </a>
          </article>
          <article className="contact__option">
            <BiPhone className="contact__option-icon" />
            <h4>Phone</h4>
            <h5 className="text-light">
              <a href="tel:+13109511029" target="_blank">
                310.951.1029
              </a>
            </h5>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message..."
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
