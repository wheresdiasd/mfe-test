import { useActivities } from "./use-activities";

export function ActivityCount() {
  const { count } = useActivities();

  if (count === 0) return null;

  return (
    <span className="inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
      {count}
    </span>
  );
}

export default ActivityCount;
