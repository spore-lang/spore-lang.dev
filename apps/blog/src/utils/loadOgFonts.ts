import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import subsetFont from "subset-font";

type OgFont = {
  name: string;
  data: ArrayBuffer;
  weight: number;
  style: string;
};

const require = createRequire(import.meta.url);

const SOURCE_HAN_REGULAR_PATH = require.resolve(
  "@fontpkg/source-han-sans-sc/SourceHanSansSC-Regular.otf"
);
const SOURCE_HAN_BOLD_PATH = require.resolve(
  "@fontpkg/source-han-sans-sc/SourceHanSansSC-Bold.otf"
);

const OG_FONT_FAMILY = "Spore OG Sans";

let regularFontSourcePromise: Promise<Buffer> | undefined;
let boldFontSourcePromise: Promise<Buffer> | undefined;

function toArrayBuffer(buffer: Buffer): ArrayBuffer {
  const copy = new Uint8Array(buffer.byteLength);
  copy.set(buffer);
  return copy.buffer;
}

function getRegularFontSource() {
  return (regularFontSourcePromise ??= readFile(SOURCE_HAN_REGULAR_PATH));
}

function getBoldFontSource() {
  return (boldFontSourcePromise ??= readFile(SOURCE_HAN_BOLD_PATH));
}

function buildSubsetText(text: string) {
  return `${text}
Spore
blog.spore-lang.dev
docs.spore-lang.dev
https://
0123456789
abcdefghijklmnopqrstuvwxyz
ABCDEFGHIJKLMNOPQRSTUVWXYZ
.,:;!?'"()[]{}<>-_/+&%#@`;
}

async function subsetOgFont(source: Promise<Buffer>, text: string) {
  const subset = await subsetFont(await source, buildSubsetText(text), {
    targetFormat: "woff",
  });
  return toArrayBuffer(subset);
}

async function loadOgFonts(text: string): Promise<OgFont[]> {
  const [regularData, boldData] = await Promise.all([
    subsetOgFont(getRegularFontSource(), text),
    subsetOgFont(getBoldFontSource(), text),
  ]);

  return [
    {
      name: OG_FONT_FAMILY,
      data: regularData,
      weight: 400,
      style: "normal",
    },
    {
      name: OG_FONT_FAMILY,
      data: boldData,
      weight: 700,
      style: "normal",
    },
  ];
}

export default loadOgFonts;
