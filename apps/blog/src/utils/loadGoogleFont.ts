import { access, readFile } from "node:fs/promises";

type OgFont = {
  name: string;
  data: ArrayBuffer;
  weight: number;
  style: string;
};

const FONT_CANDIDATES = {
  regular: [
    "/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf",
    "/usr/share/fonts/truetype/liberation2/LiberationMono-Regular.ttf",
    "/System/Library/Fonts/Supplemental/Courier New.ttf",
  ],
  bold: [
    "/usr/share/fonts/truetype/dejavu/DejaVuSansMono-Bold.ttf",
    "/usr/share/fonts/truetype/liberation2/LiberationMono-Bold.ttf",
    "/System/Library/Fonts/Supplemental/Courier New Bold.ttf",
  ],
} as const;

function toArrayBuffer(buffer: Buffer): ArrayBuffer {
  const copy = new Uint8Array(buffer.byteLength);
  copy.set(buffer);
  return copy.buffer;
}

async function findFontPath(candidates: readonly string[]) {
  for (const candidate of candidates) {
    try {
      await access(candidate);
      return candidate;
    } catch {}
  }

  throw new Error(`Missing OG font. Tried: ${candidates.join(", ")}`);
}

async function loadOgFonts(_: string): Promise<OgFont[]> {
  const [regularPath, boldPath] = await Promise.all([
    findFontPath(FONT_CANDIDATES.regular),
    findFontPath(FONT_CANDIDATES.bold),
  ]);

  const [regularData, boldData] = await Promise.all([
    readFile(regularPath),
    readFile(boldPath),
  ]);

  return [
    {
      name: "Spore OG Mono",
      data: toArrayBuffer(regularData),
      weight: 400,
      style: "normal",
    },
    {
      name: "Spore OG Mono",
      data: toArrayBuffer(boldData),
      weight: 700,
      style: "normal",
    },
  ];
}

export default loadOgFonts;
