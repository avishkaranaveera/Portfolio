import { experience } from "../lib/data.js";

export default function handler(req, res) {
  const sorted = [...experience].sort((a, b) => a.sortOrder - b.sortOrder);
  res.status(200).json(sorted);
}
