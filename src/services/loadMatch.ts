export async function loadMatchEvents(
  matchId: string
) {
  const data = await import(
    `../../assets/data/events/${matchId}.json`
  );

  return data.events;
}