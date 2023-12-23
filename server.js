import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(path.join(__dirname, "index.html"));
const PORT = 3000;
const app = express();
app.use(express.static(__dirname + "/dist"));
express.static.mime.define({ "application/wasm": ["wasm"] });
app.listen(PORT, () => {
  console.log(`Express работает ${PORT}!`);
});
