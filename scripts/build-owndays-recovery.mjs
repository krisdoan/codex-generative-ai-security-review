import { mkdir, copyFile, readFile, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import esbuild from "esbuild";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");
const assetsDir = path.join(distDir, "assets");
const recoveryDir = path.join(root, "recovery");
const readableDir = path.join(recoveryDir, "readable");

const sourceHtml = path.join(recoveryDir, "index.html");
const sourceCss = path.join(recoveryDir, "index-DVeldr2r.css");
const sourceJsReadable = path.join(readableDir, "index-DGdfkmHX.pretty.js");
const outputHtml = path.join(distDir, "index.html");
const outputCss = path.join(assetsDir, "index-DVeldr2r.css");
const outputJs = path.join(assetsDir, "index-DGdfkmHX.js");

await mkdir(assetsDir, { recursive: true });

await esbuild.build({
  entryPoints: [sourceJsReadable],
  bundle: false,
  minify: true,
  format: "esm",
  target: ["es2020"],
  outfile: outputJs,
  legalComments: "none",
});

const html = await readFile(sourceHtml, "utf8");
await writeFile(outputHtml, html, "utf8");

await copyFile(sourceCss, outputCss);

console.log("Recovered OWNDAYS bundle written to dist/");
