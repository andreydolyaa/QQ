
import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
const outDir = "./pngs";
await mkdir(outDir, { recursive: true });

async function download(url, num) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const name = `${num}-${path.basename(new URL(url).pathname)}`;
  await writeFile(
    path.join(outDir, name),
    Buffer.from(await res.arrayBuffer()),
  );
  console.log("✓", url);
}
for (let i = 0; i < 256; i++) {
  const hex = i.toString(16).padStart(2, "0");
  await download(`http://0x${hex}.a.hackycorp.com/logo.png`, hex);
}
