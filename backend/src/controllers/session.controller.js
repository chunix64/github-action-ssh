import { getSessionTime } from "../services/session.service.js";

export async function sessionTime(req, res) {
  try {
    res.json(getSessionTime());
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
