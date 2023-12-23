import express from "express";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(path.join(__dirname, "index.html"));
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.static(__dirname + "/dist"));

app.listen(PORT, () => {
  console.log(`Express работает ${PORT}!`);
});
