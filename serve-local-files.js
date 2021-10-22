const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8081;

app.use(cors());
app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
