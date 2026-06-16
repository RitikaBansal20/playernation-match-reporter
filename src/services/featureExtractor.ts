export interface MatchFeatures {
  totalPasses: number;
  totalShots: number;
  totalDuels: number;
  totalSaves: number;
  successfulPasses: number;
  keyMoments: string[];
}

export function extractFeatures(events: any[]): MatchFeatures {
  const passes = events.filter(
    (e) => e.eventName === "Pass"
  );

  const shots = events.filter(
    (e) => e.eventName === "Shot"
  );

  const duels = events.filter(
    (e) => e.eventName === "Duel"
  );

  const saves = events.filter(
    (e) => e.eventName === "Save attempt"
  );

  const successfulPasses = passes.filter(
    (e) =>
      e.tags?.some(
        (tag: any) => tag.id === 1801
      )
  );

  const keyMoments = shots
    .slice(0, 5)
    .map(
      (shot) =>
        `Shot at ${Math.round(
          shot.eventSec
        )} sec`
    );

  return {
    totalPasses: passes.length,
    totalShots: shots.length,
    totalDuels: duels.length,
    totalSaves: saves.length,
    successfulPasses:
      successfulPasses.length,
    keyMoments,
  };
}