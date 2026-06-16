export function buildPrompt(stats: any) {
  return `
You are a professional football analyst.

Analyze this FIFA World Cup match.

Statistics:

Passes: ${stats.passes}
Shots: ${stats.shots}
Duels: ${stats.duels}
Saves: ${stats.saves}

Generate:

1. Match Summary

2. Tactical Analysis

3. Key Moments

4. Standout Players

5. Areas For Improvement

Use professional football terminology.

Write in an engaging report style.
`;
}