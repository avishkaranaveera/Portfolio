import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const isEmailJsConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

export function sendViaEmailJs({ name, email, message }) {
  if (!isEmailJsConfigured) {
    return Promise.reject(
      new Error("EmailJS is not configured yet (missing VITE_EMAILJS_* values in .env).")
    );
  }

  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    { from_name: name, from_email: email, message },
    { publicKey: PUBLIC_KEY }
  );
}
