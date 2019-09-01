const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes/routes");
const connectToDb = require("./db/connectionDB");

connectToDb();

app.use(express.json());
app.use(cors());

routes(app);

app.get("/", (req, res) => {
  res.json("TEST: server is working");
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));

module.exports = app;
