import { useState } from "react";
import { sendContactMessage } from "../api/client";
import { isEmailJsConfigured, sendViaEmailJs } from "../api/emailjs";
import useReveal from "../hooks/useReveal";

const INITIAL_FORM = { name: "", email: "", message: "" };

export default function Contact({ profile }) {
  const [ref, visible] = useReveal();
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");
    setError(null);

    // Always record the message in the backend, then try to email it via EmailJS.
    const backendSave = sendContactMessage(form).catch((err) => {
      console.error("Failed to store contact message:", err.message);
    });

    if (isEmailJsConfigured) {
      try {
        await sendViaEmailJs(form);
        await backendSave;
        setStatus("sent");
        setForm(INITIAL_FORM);
      } catch (err) {
        await backendSave;
        setStatus("error");
        setError(err.message || "Couldn't send your message. Please try again.");
      }
    } else {
      try {
        await backendSave;
        setStatus("sent");
        setForm(INITIAL_FORM);
      } catch (err) {
        setStatus("error");
        setError(err.message);
      }
    }
  }

  return (
    <section id="contact" ref={ref} className={`section reveal ${visible ? "is-visible" : ""}`}>
      <h2 className="section-title">Get in Touch</h2>
      <p className="contact-intro">
        {profile?.email
          ? `Reach out directly at ${profile.email}, or use the form below.`
          : "Send a message using the form below."}
      </p>
      {!isEmailJsConfigured && (
        <p className="contact-notice">
          Email delivery isn't set up yet — messages are currently saved on the server only.
          See the .env file for setup instructions.
        </p>
      )}
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Message
          <textarea
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
        {status === "sent" && <p className="form-success">Message sent, thank you!</p>}
        {status === "error" && <p className="form-error">{error}</p>}
      </form>
    </section>
  );
}
