import express from "express";
import path from "path";

console.log(path.join(__dirname, "index.html"));
const PORT = 3001;
const app = express();
app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`Express работает ${PORT}!`);
});
