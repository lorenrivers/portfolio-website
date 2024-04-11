import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_h3lj3rk";
    const templateId = "template_1nalism";
    const publicKey = "pReQoce0qBNkPR37-";

    const templateParams = {
      user_name: name,
      user_email: email,
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent succesfully.", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col px-10 py-5">
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="bg-teal-50 p-2 rounded-xl m-1"
        required
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-teal-50 p-2 rounded-xl m-1"
        required
      />

      <textarea
        rows="5"
        cols="40"
        type="text"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="bg-teal-50 p-2 rounded-xl m-1"
        required
      />
      <button
        type="submit"
        className="bg-teal-950 text-white p-4 w-fit self-center rounded-xl m-2 hover:bg-teal-950/75 "
      >
        Submit
      </button>
    </form>
  );
}
