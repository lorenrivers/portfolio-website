import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_h3lj3rk", "template_1nalism", form.current, {
        publicKey: "pReQoce0qBNkPR37-",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" placeholder="Your Name" required />
      <label>Email</label>
      <input type="email" name="user_email" placeholder="Your Email" required />
      <label>Message</label>
      <textarea name="message" placeholder="Message" required />
      <button type="submit">Submit</button>
    </form>
  );
}
