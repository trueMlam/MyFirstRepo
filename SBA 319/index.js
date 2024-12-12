const e = require('express');
const { dbSetup } = require("./db");
const env = require("dotenv"); env.config();

const app = e();
const port = process.env.PORT || 3008;

app.use(e.json());

app.use((req, res, next) => {
  const log = `${new Date().toISOString()} ${req.method} ${req.url}`;
  console.log("🌐 " + log);
  next()
});

const d = require("./dreams");
const m = require("./moods");
const t = require('./tags');

app.use('/dreams', d);
app.use("/moods", m);
app.use('/tags', t);

app.get('/', (req, res) => {
  res.json({ message: "🌙 Dream. Log. Repeat. MystiLog." });
});

(async () => {
  dbSetup();
  setTimeout(() => {
    app.listen(port, () => { console.log(`🚀 port ${port}`) });
  }, 2000)
})();