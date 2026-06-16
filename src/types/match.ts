export interface Match {
  wyId: number;
  label: string;
}

export interface MatchFeature {
  homeTeam: string;
  awayTeam: string;

  homeGoals: number;
  awayGoals: number;

  shotsHome: number;
  shotsAway: number;

  passesHome: number;
  passesAway: number;

  keyMoments: any[];
}