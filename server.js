import express from "express";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(path.join(__dirname, "index.html"));
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`Express работает ${PORT}!`);
});
