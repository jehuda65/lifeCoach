import { defineConfig } from "vite";
import path from "path";
import fs from "fs";

function getEntries() {
  const dir = path.resolve(__dirname);
  const files = fs.readdirSync(dir);
  const htmlFiles = files.filter((f) => f.endsWith(".html"));
  return Object.fromEntries(
    htmlFiles.map((file) => [path.parse(file).name, path.resolve(dir, file)])
  );
}

export default defineConfig({
  build: {
    rollupOptions: {
      input: getEntries(),
    },
  },
});
