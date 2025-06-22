export interface Activity {
  id: string;
  type: string;
  title: string;
  description: string;
  timestamp: string;
}

export const ACTIVITIES_QUERY_KEY = "activities";

export async function fetchActivities(): Promise<Activity[]> {
  await new Promise((resolve) => setTimeout(resolve, 1750));

  const mockActivities: Activity[] = Array.from({ length: 10 }, (_, i) => ({
    id: `act-${i + 1}`,
    type: ["login", "purchase", "view", "share"][Math.floor(Math.random() * 4)],
    title: `Activity ${i + 1}`,
    description: `This is a mock activity description for activity ${i + 1}`,
    timestamp: new Date(
      Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000,
    ).toISOString(),
  }));

  return mockActivities;
}
