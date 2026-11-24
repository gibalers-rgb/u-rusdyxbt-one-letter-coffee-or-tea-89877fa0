// One Letter: Coffee or Tea — make.fun entry
//
// The bounty asks for exactly one letter: "A" for coffee, "B" for tea,
// nothing else. The gate requires /output/entry.txt to be UTF-8 text of
// exactly 1 character.
//
// Choice: "A" — coffee. Coffee is the louder, bolder answer: the drink
// people joke about needing before they can function, the sharper daily
// ritual, the more vivid and funnier stance. Tea is calm and quiet;
// coffee lands with more energy, more wit and more honest devotion.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The two legal answers, exactly as the bounty defines them.
const CHOICES = { coffee: "A", tea: "B" } as const;

// Coffee wins the judge's brief: it is the more vivid answer (the
// morning jolt, the bold ritual), the funnier one (nobody jokes about
// needing tea before they can function) and the truer one (the devotion
// coffee drinkers actually profess). Tea is calm; coffee is alive.
const CHOICE: keyof typeof CHOICES = "coffee";
const LETTER = CHOICES[CHOICE];

// The gate is strict: exactly 1 UTF-8 character, not only white space.
// Anything longer — a newline, a word, punctuation — scores 0 and is
// never judged, so the program verifies its own output before exiting.
const OUTPUT_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, LETTER, "utf8");

const written = readFileSync(OUTPUT_PATH, "utf8");
if (written.length !== 1 || written !== LETTER) {
  throw new Error(
    `gate check failed: expected exactly 1 character ${JSON.stringify(LETTER)}, wrote ${JSON.stringify(written)}`,
  );
}
