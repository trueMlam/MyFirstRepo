const e = require('express');
const r = e.Router();
const { getDb } = require("./db");

r.get("/", async (req, res) => {
  const db = getDb();
  try {
    const m = await db.collection("moods").find({}).toArray();
    res.json({ success: true, data: m });
  } catch (e) {
    res.status(500).json({ success: false, err: "err fetching" });
  }
});

r.post("/", async (req, res) => {
  const { id, name } = req.body;
  if (!name) return res.status(400).json({ success: false, err: "name req" });

  try {
    const db = getDb();
    const exists = await db.collection("moods").findOne({ id });
    if (exists) {
      return res.status(409).json({ success: false, err: "mood exists" });
    }
    await db.collection("moods").insertOne({ id, name });
    res.json({ success: true, msg: "added" });
  } catch (e) {
    res.status(500).json({ success: false, err: "err adding" });
  }
});

r.delete("/:id", async (req, res) => {
  const db = getDb();
  try {
    const r = await db.collection("moods").deleteOne({ id: req.params.id });
    if (r.deletedCount == 0) return res.status(404).json({ success: false, err: "not found" });
    res.json({ success: true, msg: "deleted" });
  } catch (e) {
    res.status(500).json({ success: false, err: "delete failed" });
  }
});

module.exports = r;