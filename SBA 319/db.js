const mdb = require("mongodb");
const env = require('dotenv');
env.config();

const client = mdb.MongoClient;
let db;

function dbSetup() {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    console.log("no db uri");
    process.exit(1);
  }
  const name = process.env.DB_NAME;
  if (!name) { console.log('no db name'); process.exit(1); }

  const cl = new client(uri, { useUnifiedTopology: true });
  cl.connect()
    .then(() => {
      db = cl.db(name);
      console.log("✅ mystilog ok")
    }).catch((e) => {
      console.log("db err:", e.message)
      process.exit(1)
    })
}

function getDb() {
  if (!db) {
    throw new Error("db not connected")
  } return db;
}

process.on('SIGINT', async () => {
  if (db) {
    console.log("closing..");
    await db.client?.close();
  }
  process.exit(0)
});

module.exports = { dbSetup, getDb }