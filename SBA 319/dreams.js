const r = require("express").Router();
const { getDb } = require("./db");

r.get('/', async (req, res) => {
  const db = getDb();
  const c = db.collection("dreams");
  try {
    const ds = await c.find({}).toArray();
    if (ds.length == 0) console.log("no dreams");
    res.json({ success: true, data: ds });
  } catch (e) {
    res.status(500).json({ success: false, err: "err fetching" });
  }
});

r.get('/:id', async (req, res) => {
  const { id } = req.params;
  const db = getDb();
  const c = db.collection("dreams");
  
  try {
    const dream = await c.findOne({ id });

    if (!dream) {
      return res.status(404).json({ success: false, err: "❌ dream not found" });
    }

    res.json({ success: true, data: dream });
  } catch (e) {
    res.status(500).json({ success: false, err: "❌ err fetching" });
  }
});

r.post("/", async (req, res) => {
  const { id, title, date, mood_id, tag_ids } = req.body;
  if (!title || !date) {
    return res.status(400).json({ success: false, err: "title or date req" });
  }

  try {
    const db = getDb();
    const m = db.collection("moods");
    const t = db.collection("tags");

    const me = await m.findOne({ id: mood_id });
    if (!me) return res.status(400).json({ success: false, err: "mood not found" });

    const tc = await t.find({ id: { $in: tag_ids || [] } }).count();
    if (tc !== (tag_ids || []).length) {
      return res.status(400).json({ success: false, err: "invalid tags" });
    }

    await db.collection('dreams').insertOne(req.body);
    res.json({ success: true, msg: "👍 added" });
  } catch (e) {
    res.status(500).json({ success: false, err: "add failed" });
  }
});

r.delete("/:id", async (req, res) => {
  const db = getDb();
  const c = db.collection("dreams");
  try {
    const r = await c.deleteOne({ id: req.params.id });
    if (r.deletedCount == 0) {
      return res.status(404).json({ success: false, err: "not found" });
    }
    res.json({ success: true, msg: "🗑️ deleted" });
  } catch (e) {
    res.status(500).json({ success: false, err: "delete failed" });
  }
});

module.exports = r;