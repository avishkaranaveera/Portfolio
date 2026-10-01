const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    res.status(400).json({ message: "Name, email, and message are required" });
    return;
  }
  if (!EMAIL_PATTERN.test(email)) {
    res.status(400).json({ message: "Email must be valid" });
    return;
  }

  // Serverless functions have no persistent storage, so this just confirms
  // receipt and logs to the Vercel function logs. Email delivery to you
  // happens client-side via EmailJS (see src/api/emailjs.js).
  console.log("Contact message received:", { name, email, message });

  res.status(200).json({ status: "received" });
}
