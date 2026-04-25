import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appRoot = path.resolve(__dirname, "..");
const sourceDir = path.join(appRoot, "public/logo-concepts");
const outputDir = path.join(sourceDir, "png");
const sizes = [64, 256, 512];

async function main() {
  const entries = await readdir(sourceDir, { withFileTypes: true });
  const svgFiles = entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".svg"))
    .map((entry) => entry.name)
    .sort();

  if (svgFiles.length === 0) {
    console.error(`No SVG files found in ${sourceDir}`);
    process.exitCode = 1;
    return;
  }

  await rm(outputDir, { recursive: true, force: true });
  await mkdir(outputDir, { recursive: true });

  const generated = [];

  for (const fileName of svgFiles) {
    const filePath = path.join(sourceDir, fileName);
    const svg = await readFile(filePath);
    const baseName = path.basename(fileName, ".svg");

    for (const size of sizes) {
      const pngPath = path.join(outputDir, `${baseName}-${size}.png`);
      const png = await sharp(svg, { density: 288 })
        .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png()
        .toBuffer();
      await writeFile(pngPath, png);
      generated.push(path.relative(appRoot, pngPath));
    }
  }

  console.log("Rasterized logo concepts:");
  for (const filePath of generated) {
    console.log(`- ${filePath}`);
  }
}

await main();
