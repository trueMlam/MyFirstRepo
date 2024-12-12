const e = require('express');
const r = e.Router();
const { getDb } = require("./db");

r.get("/", async (req, res) => {
  const db = getDb();
  try {
    const t = await db.collection("tags").find({}).toArray();
    res.json({ success: true, data: t });
  } catch (e) {
    res.status(500).json({ success: false, err: "err fetching" });
  }
});

r.post("/", async (req, res) => {
  const { id, name } = req.body;
  if (!id) return res.status(400).json({ success: false, err: "id req" });

  try {
    const db = getDb();
    const exists = await db.collection("tags").findOne({ id });
    if (exists) {
      return res.status(409).json({ success: false, err: "tag exists" });
    }
    await db.collection("tags").insertOne({ id, name });
    res.json({ success: true, msg: "added" });
  } catch (e) {
    res.status(500).json({ success: false, err: "err adding" });
  }
});

r.delete("/:id", async (req, res) => {
  const db = getDb();
  try {
    const r = await db.collection("tags").deleteOne({ id: req.params.id });
    if (r.deletedCount == 0) return res.status(404).json({ success: false, err: "not found" });
    res.json({ success: true, msg: "deleted" });
  } catch (e) {
    res.status(500).json({ success: false, err: "delete failed" });
  }
});

module.exports = r;