import { profile } from "../lib/data.js";

export default function handler(req, res) {
  res.status(200).json(profile);
}
