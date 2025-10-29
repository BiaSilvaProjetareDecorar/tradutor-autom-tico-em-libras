export type SignItem = {
sign: string;
duration_ms: number;
notes?: string;
lexeme?: string;
};


const DEFAULT_MAP: Record<string, SignItem[]> = {
"oi": [{ sign: "OI", duration_ms: 800 }],
"olá": [{ sign: "OI", duration_ms: 800 }],
"tudo bem": [{ sign: "TUDO_BEM", duration_ms: 1200 }],
"obrigado": [{ sign: "OBRIGADO", duration_ms: 1000 }],
"obrigada": [{ sign: "OBRIGADA", duration_ms: 1000 }],
"sim": [{ sign: "SIM", duration_ms: 600 }],
"não": [{ sign: "NAO", duration_ms: 600 }]
};


function normalizeText(text: string) {
return text
.toLowerCase()
.normalize("NFD")
.replace(/[\u0300-\u036f]/g, "")
.replace(/[^\w\s-]/g, "")
.trim();
}


export function textToTokens(text: string) {
const normalized = normalizeText(text);
const words = normalized.split(/\s+/);
const tokens: string[] = [];
let i = 0;
while (i < words.length) {
if (i + 1 < words.length) {
const pair = `${words[i]} ${words[i + 1]}`;
if (pair in DEFAULT_MAP) {
tokens.push(pair);
i += 2;
continue;
}
}
tokens.push(words[i]);
i++;
}
return tokens;
}


export function mapTokensToSigns(tokens: string[]) {
const result: SignItem[] = [];
for (const t of tokens) {
if (t in DEFAULT_MAP) {
result.push(...DEFAULT_MAP[t]);
} else {
result.push({ sign: "FALLBACK_LETRA", lexeme: t, duration_ms: Math.max(600, 100 * t.length), notes: "Soletração/fallback" });
}
}
return result;
}


export function translateHandler(text: string) {
const tokens = textToTokens(text);
const sequence = mapTokensToSigns(tokens);
return { input: text, tokens, sequence };
}
